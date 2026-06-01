import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MetricCard } from '@/src/components/features/dashboard/metric-card'
import type { MetricCard as MetricCardType } from '@/src/types/dashboard'

const mockCard: MetricCardType = {
  id: 'test',
  title: 'Total Visitors',
  value: '124,532',
  change: 12.5,
  changeLabel: 'vs last month',
  trend: 'up',
}

describe('MetricCard', () => {
  it('renders title and value', () => {
    render(<MetricCard data={mockCard} />)
    expect(screen.getByText('Total Visitors')).toBeInTheDocument()
    expect(screen.getByText('124,532')).toBeInTheDocument()
  })

  it('renders positive change correctly', () => {
    render(<MetricCard data={mockCard} />)
    expect(screen.getByText(/12.5%/)).toBeInTheDocument()
  })

  it('renders negative change correctly', () => {
    render(<MetricCard data={{ ...mockCard, change: -3.1, trend: 'down' }} />)
    expect(screen.getByText(/3.1%/)).toBeInTheDocument()
  })
})
