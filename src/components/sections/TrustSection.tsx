'use client'

import { GlassCard } from '@/components/ui/GlassCard'
import { TrendingUp, Activity, BarChart, ArrowUpRight } from 'lucide-react'

const metrics = [
  {
    title: "Organic Traffic Growth",
    value: "200%",
    timeframe: "in 6 months",
    trend: "up",
    icon: <TrendingUp className="w-6 h-6 text-accent-lime" />
  },
  {
    title: "User Retention Rate",
    value: "84%",
    timeframe: "+12% vs ind. avg",
    trend: "up",
    icon: <Activity className="w-6 h-6 text-accent-cyan" />
  },
  {
    title: "Cost per Acquisition",
    value: "$14.50",
    timeframe: "decreased by 40%",
    trend: "down",
    icon: <BarChart className="w-6 h-6 text-accent-amber" />
  }
]

export function TrustSection() {
  return (
    <section className="py-24 relative border-t border-white/5 bg-gradient-to-b from-transparent to-black/50">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
            Proven Results You Can <span className="italic text-white/80">Trust</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            From startups to industry leaders, we've helped businesses achieve remarkable results in record time with no technical debt required.
          </p>
        </div>

        {/* Imitating a deep dark analytical SEO dashboard view */}
        <div className="max-w-6xl mx-auto relative">
          
          {/* Subtle glow effect behind cards */}
          <div className="absolute inset-0 bg-accent-cyan/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {metrics.map((metric, idx) => (
              <GlassCard key={idx} className="p-8 hover:translate-y-[-4px] group border-t-white/20 bg-gradient-to-br from-white/[0.04] to-transparent">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-smooth">
                    {metric.icon}
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-medium ${metric.trend === 'up' ? 'text-accent-lime' : 'text-accent-cyan'}`}>
                    <ArrowUpRight className="w-4 h-4" />
                    <span>Positive</span>
                  </div>
                </div>
                
                <h4 className="text-white/60 text-sm font-medium tracking-wide uppercase mb-2">
                  {metric.title}
                </h4>
                
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-5xl font-display text-white tracking-tight">
                    {metric.value}
                  </span>
                </div>
                
                <p className="text-white/50 text-sm">
                  {metric.timeframe}
                </p>

                {/* Faux graph line */}
                <div className="mt-8 h-8 w-full border-b border-white/10 relative overflow-hidden">
                  <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-white/5 to-transparent blur-[2px]" />
                  <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                     <path d="M0,80 Q25,30 50,70 T100,20" fill="none" stroke="currentColor" strokeWidth="2" className={metric.trend === 'up' ? 'text-accent-lime/50' : 'text-accent-cyan/50'} />
                  </svg>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
