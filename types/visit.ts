export interface VisitLogResponse {
  visitId: number
  recordedAt: string
  message: string
}

export interface DailyVisitStat {
  date: string
  visits: number
  uniqueVisitors: number
}

export interface PageVisitStat {
  pagePath: string
  visits: number
  uniqueVisitors: number
}

export interface VisitStatsResponse {
  rangeStart: string
  rangeEnd: string
  totalVisits: number
  uniqueVisitors: number
  averageDurationSeconds: number
  dailyStats: DailyVisitStat[]
  topPages: PageVisitStat[]
}
