import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/src/components/ui/card'
import { Badge } from '@/src/components/ui/badge'
import type { TopPage } from '@/src/types/dashboard'

interface TopPagesTableProps {
  data: TopPage[]
}

export function TopPagesTable({ data }: TopPagesTableProps) {
  return (
    <Card className="border-[var(--border)] bg-[var(--surface)]">
      <CardHeader>
        <CardTitle>Top Pages</CardTitle>
        <CardDescription>Most visited pages this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-1">
          <div className="grid grid-cols-4 px-3 py-2 text-xs font-medium text-[var(--muted-foreground)]">
            <span className="col-span-2">Page</span>
            <span className="text-right">Views</span>
            <span className="text-right">Bounce Rate</span>
          </div>
          {data.map((page, index) => (
            <div
              key={page.path}
              className="grid grid-cols-4 items-center rounded-lg px-3 py-2.5 transition-colors hover:bg-[var(--surface-raised)]"
            >
              <div className="col-span-2 flex items-center gap-2">
                <span className="w-4 text-xs text-[var(--muted-foreground)]">{index + 1}</span>
                <span className="font-mono text-sm font-medium text-[var(--foreground)]">
                  {page.path}
                </span>
              </div>
              <span className="text-right text-sm text-[var(--foreground)]">
                {page.views.toLocaleString()}
              </span>
              <div className="flex justify-end">
                <Badge
                  variant="outline"
                  className={
                    page.bounceRate < 35
                      ? 'border-[var(--color-success)] text-[var(--color-success)]'
                      : page.bounceRate < 45
                        ? 'border-[var(--color-warning)] text-[var(--color-warning)]'
                        : 'border-[var(--color-error)] text-[var(--color-error)]'
                  }
                >
                  {page.bounceRate}%
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
