import { MetricCard } from '@/src/components/features/dashboard/metric-card'
import { VisitorsChart } from '@/src/components/features/dashboard/visitors-chart'
import { TopPagesTable } from '@/src/components/features/dashboard/top-pages-table'
import { metricCards, chartData, topPages } from '@/src/lib/mock-data'

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-[var(--foreground)]">Overview</h1>
        <p className="mt-1 text-sm text-[var(--muted-foreground)]">
          Welcome back! Here&apos;s what&apos;s happening.
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metricCards.map((card) => (
          <MetricCard key={card.id} data={card} />
        ))}
      </div>

      {/* Chart */}
      <VisitorsChart data={chartData} />

      {/* Bottom grid */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <TopPagesTable data={topPages} />
      </div>
    </div>
  )
}
