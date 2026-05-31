import type { MetricCard, ChartDataPoint, TopPage } from '@/src/types/dashboard'
import type { AnalyticsRow } from '@/src/types/dashboard'

export const metricCards: MetricCard[] = [
  {
    id: 'total-visitors',
    title: 'Total Visitors',
    value: '124,532',
    change: 12.5,
    changeLabel: 'vs last month',
    trend: 'up',
  },
  {
    id: 'page-views',
    title: 'Page Views',
    value: '847,291',
    change: 8.2,
    changeLabel: 'vs last month',
    trend: 'up',
  },
  {
    id: 'bounce-rate',
    title: 'Bounce Rate',
    value: '38.4%',
    change: -3.1,
    changeLabel: 'vs last month',
    trend: 'down',
  },
  {
    id: 'avg-session',
    title: 'Avg. Session',
    value: '4m 32s',
    change: 5.7,
    changeLabel: 'vs last month',
    trend: 'up',
  },
]

export const chartData: ChartDataPoint[] = Array.from({ length: 30 }, (_, i) => {
  const date = new Date(2026, 4, 1 + i)
  return {
    date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    visitors: Math.floor(3000 + Math.random() * 2000 + Math.sin(i / 3) * 500),
    pageViews: Math.floor(8000 + Math.random() * 4000 + Math.sin(i / 3) * 1000),
    sessions: Math.floor(4000 + Math.random() * 2500 + Math.sin(i / 3) * 600),
    revenue: Math.floor(1200 + Math.random() * 800 + Math.sin(i / 4) * 200),
  }
})

export const topPages: TopPage[] = [
  { path: '/', views: 48291, uniqueVisitors: 32104, bounceRate: 32.1 },
  { path: '/pricing', views: 31847, uniqueVisitors: 24531, bounceRate: 41.5 },
  { path: '/blog', views: 28934, uniqueVisitors: 19823, bounceRate: 38.2 },
  { path: '/docs', views: 21043, uniqueVisitors: 15678, bounceRate: 28.7 },
  { path: '/about', views: 14521, uniqueVisitors: 11234, bounceRate: 52.3 },
]

export const analyticsRows: AnalyticsRow[] = [
  {
    id: '1',
    page: '/',
    visitors: 48291,
    pageViews: 92341,
    bounceRate: 32.1,
    avgSession: '5m 12s',
    revenue: 12400,
    trend: 'up',
  },
  {
    id: '2',
    page: '/pricing',
    visitors: 31847,
    pageViews: 54231,
    bounceRate: 41.5,
    avgSession: '3m 45s',
    revenue: 9800,
    trend: 'up',
  },
  {
    id: '3',
    page: '/blog',
    visitors: 28934,
    pageViews: 41823,
    bounceRate: 38.2,
    avgSession: '4m 20s',
    revenue: 3200,
    trend: 'down',
  },
  {
    id: '4',
    page: '/docs',
    visitors: 21043,
    pageViews: 38678,
    bounceRate: 28.7,
    avgSession: '6m 50s',
    revenue: 1500,
    trend: 'up',
  },
  {
    id: '5',
    page: '/about',
    visitors: 14521,
    pageViews: 21234,
    bounceRate: 52.3,
    avgSession: '2m 10s',
    revenue: 800,
    trend: 'down',
  },
  {
    id: '6',
    page: '/contact',
    visitors: 11832,
    pageViews: 15432,
    bounceRate: 48.9,
    avgSession: '2m 55s',
    revenue: 600,
    trend: 'neutral',
  },
  {
    id: '7',
    page: '/features',
    visitors: 9823,
    pageViews: 18234,
    bounceRate: 35.4,
    avgSession: '4m 05s',
    revenue: 4200,
    trend: 'up',
  },
  {
    id: '8',
    page: '/changelog',
    visitors: 7234,
    pageViews: 12891,
    bounceRate: 29.8,
    avgSession: '5m 30s',
    revenue: 900,
    trend: 'up',
  },
  {
    id: '9',
    page: '/login',
    visitors: 6821,
    pageViews: 8932,
    bounceRate: 61.2,
    avgSession: '1m 45s',
    revenue: 0,
    trend: 'neutral',
  },
  {
    id: '10',
    page: '/signup',
    visitors: 5432,
    pageViews: 7123,
    bounceRate: 55.7,
    avgSession: '2m 20s',
    revenue: 0,
    trend: 'down',
  },
]
