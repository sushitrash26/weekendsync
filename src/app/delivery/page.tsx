import { DeliveryDashboard } from '@/components/delivery/DeliveryDashboard'

export default function DeliveryPage() {
  return (
    <main className="relative min-h-screen z-10 w-full overflow-hidden pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-display text-white">Client Portal</h1>
          <p className="text-white/60 mt-2">Your 7-Day Sprint Delivery.</p>
        </div>
        <DeliveryDashboard />
      </div>
    </main>
  )
}
