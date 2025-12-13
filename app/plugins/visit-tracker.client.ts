import { defineNuxtPlugin, useRuntimeConfig } from '#app'

const VISITOR_KEY = 'eo_visitor_id'
const SESSION_KEY = 'eo_session_id'

interface VisitPayload {
  visitorId: string
  sessionId: string
  pagePath: string
  referrer?: string
  userAgent?: string
  metadata?: Record<string, unknown>
  durationSeconds?: number
}

export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) {
    return
  }

  const runtimeConfig = useRuntimeConfig()
  const apiBase = (runtimeConfig.public.apiBase || 'https://api.tlpy8.com').replace(/\/$/, '')
  const router = nuxtApp.$router

  const visitorId = ensureStorageId(window.localStorage, VISITOR_KEY)
  const sessionId = ensureStorageId(window.sessionStorage, SESSION_KEY)

  let lastRecordedPath = ''

  const recordRoute = (path: string, referrer?: string) => {
    if (!path || path === lastRecordedPath) {
      return
    }

    lastRecordedPath = path

    const payload: VisitPayload = {
      visitorId,
      sessionId,
      pagePath: path,
      referrer,
      userAgent: navigator.userAgent,
      metadata: buildMetadata()
    }

    sendVisit(`${apiBase}/api/visits`, payload)
  }

  router.isReady().then(() => {
    recordRoute(router.currentRoute.value.fullPath, document.referrer || undefined)
  })

  router.afterEach((to, from) => {
    const internalReferrer = from.fullPath ? `${window.location.origin}${from.fullPath}` : undefined
    recordRoute(to.fullPath, internalReferrer || document.referrer || undefined)
  })
})

function ensureStorageId(storage: Storage, key: string): string {
  let value = storage.getItem(key)
  if (!value) {
    value = createId()
    try {
      storage.setItem(key, value)
    } catch (error) {
      console.debug('[visit-tracker] failed to persist id', error)
    }
  }
  return value
}

function createId(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID()
  }
  return `eo-${Math.random().toString(36).slice(2, 10)}-${Date.now()}`
}

function buildMetadata() {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  return {
    language: navigator.language,
    platform: navigator.platform,
    screen: typeof window !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : undefined,
    timezone: timeZone,
    historyLength: typeof history !== 'undefined' ? history.length : undefined
  }
}

function sendVisit(endpoint: string, payload: VisitPayload) {
  const body = JSON.stringify(payload)
  if (navigator.sendBeacon) {
    const blob = new Blob([body], { type: 'application/json' })
    navigator.sendBeacon(endpoint, blob)
    return
  }
  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body,
    keepalive: true
  }).catch((error) => {
    console.debug('[visit-tracker] failed to record visit', error)
  })
}
