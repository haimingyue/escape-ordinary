import { defineEventHandler, readBody } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig(event)
  const upstreamBase = (runtimeConfig.apiServerBase || 'https://api.tlpy8.com').replace(/\/$/, '')
  const payload = await readBody(event)

  return await $fetch(`${upstreamBase}/api/visits`, {
    method: 'POST',
    body: payload
  })
})
