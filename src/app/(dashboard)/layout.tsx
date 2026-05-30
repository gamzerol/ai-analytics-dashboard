import { Sidebar } from '@/src/components/features/dashboard/sidebar'
import { Header } from '@/src/components/features/dashboard/header'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[var(--background)]">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header user={{ name: 'Demo User', email: 'demo@dashboard.com' }} />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}
