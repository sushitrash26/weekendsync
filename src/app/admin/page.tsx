import { AdminDashboard } from '@/components/admin/AdminDashboard'

export default function AdminPage() {
  return (
    <main className="relative min-h-screen z-10 w-full overflow-hidden pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-display text-white">CEO Command Center</h1>
          <p className="text-white/60 mt-2">Manage incoming sprints and deploy pods.</p>
        </div>
        <AdminDashboard />
      </div>
    </main>
  )
}
