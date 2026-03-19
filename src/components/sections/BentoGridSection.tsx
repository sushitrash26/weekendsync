'use client'

import { motion } from 'motion/react'
import { GlassCard } from '@/components/ui/GlassCard'
import { Code2, Zap, Slack, Github, CreditCard, ShieldCheck } from 'lucide-react'

export function BentoGridSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-display text-white mb-4">Precision Engineering.</h2>
           <p className="text-white/60 max-w-2xl mx-auto">We've stripped away the agency bloat. No retainers, no infinite discovery phases. Just sheer execution speed packed into a pristine framework.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          
          {/* Card 1: Huge span (2 cols) */}
          <GlassCard className="md:col-span-2 p-8 flex flex-col justify-between group overflow-hidden border-accent-cyan/10 hover:border-accent-cyan/30 transition-smooth">
            <div className="relative z-10">
              <Zap className="w-8 h-8 text-accent-cyan mb-4" />
              <h3 className="text-2xl font-display text-white mb-2">The 7-Day Architecture</h3>
              <p className="text-white/60 text-sm max-w-md">We utilize pre-compiled staging templates strictly mapped to Next.js, Postgres, and Tailwind. We don't build from scratch, we build from orbital velocity.</p>
            </div>
            {/* Abstract visual */}
            <div className="absolute right-0 bottom-0 translate-y-1/4 translate-x-1/4 w-64 h-64 bg-accent-cyan/10 blur-[60px] rounded-full group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute -right-10 -bottom-10 grid grid-cols-3 gap-2 opacity-20 transform -rotate-12 group-hover:rotate-0 transition-transform duration-700">
               {[...Array(9)].map((_, i) => <div key={i} className="w-12 h-12 bg-white rounded-lg border border-white" />)}
            </div>
          </GlassCard>

          {/* Card 2: Minimalist (1 col) */}
          <GlassCard className="p-8 flex flex-col justify-between group border-white/5 hover:border-white/20 transition-smooth overflow-hidden relative">
            <div className="relative z-10">
              <Slack className="w-8 h-8 text-[#E01E5A] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-display text-white mb-2">Zero Meetings</h3>
              <p className="text-white/60 text-sm">We delete calendar bloat. 100% of communication is handled asynchronously via dedicated Slack channels.</p>
            </div>
          </GlassCard>

          {/* Card 3: Tall span (1 col, 2 rows) - wait auto rows is 250px so spanning 2 is 524px */}
          <GlassCard className="md:row-span-2 p-8 flex flex-col group border-accent-lime/10 hover:border-accent-lime/30 transition-smooth relative overflow-hidden">
            <div className="relative z-10 flex-1">
              <ShieldCheck className="w-8 h-8 text-accent-lime mb-4" />
              <h3 className="text-2xl font-display text-white mb-2">Elite 1% Talent</h3>
              <p className="text-white/60 text-sm mb-8">Your sprint is operated by hyper-specialized senior product engineers. We don't hire junior devs or out-source to generic farms.</p>
              
              <div className="space-y-3">
                {[
                  { name: 'Alex M.', role: 'Frontend Architect', img: 'Felix' },
                  { name: 'Sarah K.', role: 'Backend Dev', img: 'Aneka' },
                  { name: 'David R.', role: 'UX Designer', img: 'Jack' }
                ].map((member, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 group-hover:border-white/10 transition-smooth transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100" style={{ transitionDelay: `${i * 100}ms` }}>
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.img}`} className="w-10 h-10 rounded-full bg-black/40" alt={member.name} />
                    <div>
                      <div className="text-sm font-medium text-white">{member.name}</div>
                      <div className="text-xs text-white/40">{member.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-accent-lime/5 to-transparent blur-xl pointer-events-none" />
          </GlassCard>

          {/* Card 4: Standard (1 col) */}
          <GlassCard className="p-8 flex flex-col justify-between group border-white/5 hover:border-accent-cyan/20 transition-smooth">
            <div>
              <Github className="w-8 h-8 text-white mb-4 group-hover:text-accent-cyan transition-smooth" />
              <h3 className="text-xl font-display text-white mb-2">100% Code Ownership</h3>
              <p className="text-white/60 text-sm">You own everything. The staging repo transfers to your GitHub org the second the final invoice clears.</p>
            </div>
          </GlassCard>

          {/* Card 5: Standard (1 col) */}
          <GlassCard className="p-8 flex flex-col justify-between group border-white/5 hover:border-white/20 transition-smooth relative overflow-hidden">
             <div>
              <CreditCard className="w-8 h-8 text-white mb-4" />
              <h3 className="text-xl font-display text-white mb-2">$2,500 Base Price</h3>
              <p className="text-white/60 text-sm">Predictable pricing. 50% upfront to lock the scope, 50% upon complete delivery.</p>
            </div>
            <div className="absolute right-4 top-4 text-4xl text-white/5 font-display group-hover:scale-110 transition-transform">$$</div>
          </GlassCard>

        </div>
      </div>
    </section>
  )
}
