import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card'
import { Badge } from '@/src/components/ui/badge'
import type { MetricCard as MetricCardType } from '@/src/types/dashboard'
import { cn } from '@/src/lib/utils/utils'

interface MetricCardProps {
  data: MetricCardType
}

export function MetricCard({ data }: MetricCardProps) {
  const { title, value, change, changeLabel, trend } = data

  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus

  const isPositive = trend === 'up' || (trend === 'down' && change < 0)

  return (
    <Card className="border-[var(--border)] bg-[var(--surface)]">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-[var(--muted-foreground)]">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <span className="text-3xl font-bold text-[var(--foreground)]">{value}</span>
        <Badge
          variant="outline"
          className={cn(
            'flex w-fit items-center gap-1 px-2 py-0.5 text-xs',
            isPositive
              ? 'border-[var(--color-success)] text-[var(--color-success)]'
              : 'border-[var(--color-error)] text-[var(--color-error)]'
          )}
        >
          <TrendIcon className="h-3 w-3" />
          {Math.abs(change)}% {changeLabel}
        </Badge>
      </CardContent>
    </Card>
  )
}
