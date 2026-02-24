import { defineEventHandler, getQuery } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig(event)
  const upstreamBase = (runtimeConfig.apiServerBase || 'https://api.tlpy8.com').replace(/\/$/, '')
  const query = getQuery(event)

  return await $fetch(`${upstreamBase}/api/visits/stats`, {
    method: 'GET',
    query
  })
})
