import { ClientPortal } from '@/components/portal/ClientPortal'

export default function PortalPage() {
  return (
    <main className="relative min-h-screen z-10 w-full overflow-hidden pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-display text-white">Project Workspace</h1>
          <p className="text-white/60 mt-2">Track your active sprint and manage logistics.</p>
        </div>
        <ClientPortal />
      </div>
    </main>
  )
}
