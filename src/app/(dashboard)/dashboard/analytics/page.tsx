import { AnalyticsTable } from '@/src/components/features/analytics/analytics-table'
import { analyticsRows } from '@/src/lib/mock-data'

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-[var(--foreground)]">Analytics</h1>
        <p className="mt-1 text-sm text-[var(--muted-foreground)]">
          Detailed performance breakdown by page.
        </p>
      </div>
      <AnalyticsTable data={analyticsRows} />
    </div>
  )
}
