'use client'

import { useState } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
} from '@tanstack/react-table'
import { ArrowUpDown, ArrowUp, ArrowDown, TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/src/components/ui/card'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { Badge } from '@/src/components/ui/badge'
import { cn } from '@/src/lib/utils/utils'
import type { AnalyticsRow } from '@/src/types/dashboard'

const columns: ColumnDef<AnalyticsRow>[] = [
  {
    accessorKey: 'page',
    header: 'Page',
    cell: ({ row }) => (
      <span className="font-mono text-sm font-medium text-[var(--foreground)]">
        {row.getValue('page')}
      </span>
    ),
  },
  {
    accessorKey: 'visitors',
    header: ({ column }) => (
      <button
        className="flex items-center gap-1 text-xs font-medium transition-colors hover:text-[var(--foreground)]"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Visitors
        {column.getIsSorted() === 'asc' ? (
          <ArrowUp className="h-3 w-3" />
        ) : column.getIsSorted() === 'desc' ? (
          <ArrowDown className="h-3 w-3" />
        ) : (
          <ArrowUpDown className="h-3 w-3 opacity-40" />
        )}
      </button>
    ),
    cell: ({ row }) => (
      <span className="text-sm">{(row.getValue('visitors') as number).toLocaleString()}</span>
    ),
  },
  {
    accessorKey: 'pageViews',
    header: ({ column }) => (
      <button
        className="flex items-center gap-1 text-xs font-medium transition-colors hover:text-[var(--foreground)]"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Page Views
        {column.getIsSorted() === 'asc' ? (
          <ArrowUp className="h-3 w-3" />
        ) : column.getIsSorted() === 'desc' ? (
          <ArrowDown className="h-3 w-3" />
        ) : (
          <ArrowUpDown className="h-3 w-3 opacity-40" />
        )}
      </button>
    ),
    cell: ({ row }) => (
      <span className="text-sm">{(row.getValue('pageViews') as number).toLocaleString()}</span>
    ),
  },
  {
    accessorKey: 'bounceRate',
    header: ({ column }) => (
      <button
        className="flex items-center gap-1 text-xs font-medium transition-colors hover:text-[var(--foreground)]"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Bounce Rate
        {column.getIsSorted() === 'asc' ? (
          <ArrowUp className="h-3 w-3" />
        ) : column.getIsSorted() === 'desc' ? (
          <ArrowDown className="h-3 w-3" />
        ) : (
          <ArrowUpDown className="h-3 w-3 opacity-40" />
        )}
      </button>
    ),
    cell: ({ row }) => {
      const value = row.getValue('bounceRate') as number
      return (
        <Badge
          variant="outline"
          className={cn(
            'text-xs',
            value < 35
              ? 'border-[var(--color-success)] text-[var(--color-success)]'
              : value < 45
                ? 'border-[var(--color-warning)] text-[var(--color-warning)]'
                : 'border-[var(--color-error)] text-[var(--color-error)]'
          )}
        >
          {value}%
        </Badge>
      )
    },
  },
  {
    accessorKey: 'avgSession',
    header: 'Avg. Session',
    cell: ({ row }) => (
      <span className="text-sm text-[var(--muted-foreground)]">{row.getValue('avgSession')}</span>
    ),
  },
  {
    accessorKey: 'revenue',
    header: ({ column }) => (
      <button
        className="flex items-center gap-1 text-xs font-medium transition-colors hover:text-[var(--foreground)]"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Revenue
        {column.getIsSorted() === 'asc' ? (
          <ArrowUp className="h-3 w-3" />
        ) : column.getIsSorted() === 'desc' ? (
          <ArrowDown className="h-3 w-3" />
        ) : (
          <ArrowUpDown className="h-3 w-3 opacity-40" />
        )}
      </button>
    ),
    cell: ({ row }) => {
      const value = row.getValue('revenue') as number
      return (
        <span className="text-sm font-medium">
          {value === 0 ? '—' : `$${value.toLocaleString()}`}
        </span>
      )
    },
  },
  {
    accessorKey: 'trend',
    header: 'Trend',
    cell: ({ row }) => {
      const trend = row.getValue('trend') as string
      return trend === 'up' ? (
        <TrendingUp className="h-4 w-4 text-[var(--color-success)]" />
      ) : trend === 'down' ? (
        <TrendingDown className="h-4 w-4 text-[var(--color-error)]" />
      ) : (
        <Minus className="h-4 w-4 text-[var(--muted-foreground)]" />
      )
    },
  },
]

interface AnalyticsTableProps {
  data: AnalyticsRow[]
}

export function AnalyticsTable({ data }: AnalyticsTableProps) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [globalFilter, setGlobalFilter] = useState('')

  const table = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 8 } },
  })

  return (
    <Card className="border-[var(--border)] bg-[var(--surface)]">
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <div>
            <CardTitle>Page Analytics</CardTitle>
            <CardDescription>Performance breakdown by page</CardDescription>
          </div>
          <Input
            placeholder="Search pages..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="h-8 w-48 text-sm"
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="overflow-hidden rounded-lg border border-[var(--border)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--surface-raised)]">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-4 py-3 text-left text-xs font-medium text-[var(--muted-foreground)]"
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row, i) => (
                <tr
                  key={row.id}
                  className={cn(
                    'border-t border-[var(--border)] transition-colors hover:bg-[var(--surface-raised)]',
                    i % 2 === 0 ? '' : 'bg-[var(--surface-raised)]/40'
                  )}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-4 py-3 text-[var(--foreground)]">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)]">
          <span>{table.getFilteredRowModel().rows.length} results</span>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="h-7 text-xs"
            >
              Previous
            </Button>
            <span>
              Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="h-7 text-xs"
            >
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
