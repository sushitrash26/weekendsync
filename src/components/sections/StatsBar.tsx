import { GlassCard } from '@/components/ui/GlassCard'
import { Clock, Users, DollarSign, Code2 } from 'lucide-react'

export function StatsBar() {
  const stats = [
    { icon: <Clock className="w-5 h-5 text-accent-cyan" />, label: '7-Day Delivery' },
    { icon: <Users className="w-5 h-5 text-accent-lime" />, label: '11 Specialist Teams' },
    { icon: <DollarSign className="w-5 h-5 text-accent-amber" />, label: '$2.5k Base Price' },
    { icon: <Code2 className="w-5 h-5 text-white/80" />, label: '100% Code Ownership' },
  ]

  return (
    <section className="relative z-20 -mt-8 pb-12">
      <div className="container mx-auto px-6">
        <GlassCard className="py-6 px-8 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 overflow-hidden shadow-2xl shadow-black/50 border-white/20 relative">
          
          {/* Subtle gradient highlight inside the card */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50" />
          
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4 flex-1 justify-center md:justify-start last:justify-center md:last:justify-end">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                {stat.icon}
              </div>
              <span className="text-lg font-medium tracking-wide text-white/90">
                {stat.label}
              </span>
              
              {/* Divider between items on desktop */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 w-px h-8 bg-white/10" style={{ right: `${100 - ((index + 1) * 25)}%` }} />
              )}
            </div>
          ))}
        </GlassCard>
      </div>
    </section>
  )
}
