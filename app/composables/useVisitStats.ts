import { computed } from 'vue'
import { useRuntimeConfig, useState } from '#app'
import type { VisitStatsResponse } from '~/types/visit'

interface VisitStatsFilters {
  startTime?: string
  endTime?: string
  pagePath?: string
}

interface VisitStatsState {
  data: VisitStatsResponse | null
  loading: boolean
  error: string | null
  lastFetched: number
}

export function useVisitStats() {
  const runtimeConfig = useRuntimeConfig()
  const apiBase = (runtimeConfig.public.apiBase || 'https://api.lyky8.com').replace(/\/$/, '')

  const state = useState<VisitStatsState>('visit-stats', () => ({
    data: null,
    loading: false,
    error: null,
    lastFetched: 0
  }))

  const refresh = async (filters?: VisitStatsFilters) => {
    state.value.loading = true
    state.value.error = null

    try {
      const url = new URL('/api/visits/stats', apiBase)
      if (filters?.startTime) {
        url.searchParams.set('startTime', filters.startTime)
      }
      if (filters?.endTime) {
        url.searchParams.set('endTime', filters.endTime)
      }
      if (filters?.pagePath) {
        url.searchParams.set('pagePath', filters.pagePath)
      }

      const data = await $fetch<VisitStatsResponse>(url.toString(), {
        method: 'GET'
      })
      state.value.data = data
      state.value.lastFetched = Date.now()
    } catch (error) {
      console.error('[visit-stats] 加载失败', error)
      state.value.error = error instanceof Error ? error.message : '未知错误'
    } finally {
      state.value.loading = false
    }
  }

  return {
    stats: computed(() => state.value.data),
    loading: computed(() => state.value.loading),
    error: computed(() => state.value.error),
    lastFetched: computed(() => state.value.lastFetched),
    refresh
  }
}
