'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, BarChart3, Users, TrendingUp, Settings, Zap } from 'lucide-react'
import { cn } from '@/src/lib/utils/utils'

const navItems = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/dashboard/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/dashboard/users', label: 'Users', icon: Users },
  { href: '/dashboard/revenue', label: 'Revenue', icon: TrendingUp },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="flex w-60 flex-col border-r border-[var(--border)] bg-[var(--surface)]">
      {/* Logo */}
      <div className="flex items-center gap-2.5 border-b border-[var(--border)] px-5 py-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-brand-500)]">
          <Zap className="h-4 w-4 text-white" />
        </div>
        <span className="font-semibold text-[var(--foreground)]">AI Analytics</span>
      </div>

      {/* Nav */}
      <nav className="flex flex-1 flex-col gap-1 px-3 py-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-[var(--color-brand-500)] text-white'
                  : 'text-[var(--muted-foreground)] hover:bg-[var(--surface-raised)] hover:text-[var(--foreground)]'
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Bottom */}
      <div className="border-t border-[var(--border)] px-3 py-4">
        <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs text-[var(--muted-foreground)]">
          <div className="h-2 w-2 rounded-full bg-[var(--color-success)]" />
          All systems operational
        </div>
      </div>
    </aside>
  )
}
