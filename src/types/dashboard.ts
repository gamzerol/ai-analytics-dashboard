export interface MetricCard {
  id: string
  title: string
  value: string
  change: number
  changeLabel: string
  trend: 'up' | 'down' | 'neutral'
}

export interface ChartDataPoint {
  date: string
  visitors: number
  pageViews: number
  sessions: number
  revenue: number
}

export interface TopPage {
  path: string
  views: number
  uniqueVisitors: number
  bounceRate: number
}

export interface AnalyticsRow {
  id: string
  page: string
  visitors: number
  pageViews: number
  bounceRate: number
  avgSession: string
  revenue: number
  trend: 'up' | 'down' | 'neutral'
}
