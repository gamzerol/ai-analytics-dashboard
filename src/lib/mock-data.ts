import type { MetricCard, ChartDataPoint, TopPage } from '@/src/types/dashboard'

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
