'use client'

import { marketStats } from '@/lib/data'
import { CountUp } from '@/components/ui/count-up'
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern'
import { BorderBeam } from '@/components/ui/border-beam'
import { AnimatedContent } from '@/components/ui/animated-content'
import { motion } from 'motion/react'

const investablePoints = [
  'Massive addressable market: $50B+ in MVP development spend annually',
  'Clear pricing model: fixed-cost sprints with predictable margins',
  'Repeatable delivery framework: 7-day sprint methodology is systematized',
  'Network effects: every launch creates referrals and case studies',
  'Low burn, high output: lean team, high revenue per sprint',
  'Platform potential: sprint tooling and automation can be productized',
] as const

const phases = [
  { label: 'Phase 1: Launch', style: 'bg-accent-cyan text-base-950' },
  { label: 'Phase 2: Scale', style: 'border border-accent-cyan/40 text-accent-cyan' },
  { label: 'Phase 3: Platform', style: 'border border-base-600 text-text-muted' },
] as const

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
} as const

export function MarketSection() {
  return (
    <section id="investors" className="py-24 px-6 max-w-6xl mx-auto relative">
      <AnimatedGridPattern className="opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />

      <div className="relative z-10 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
          The Market Opportunity
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 relative z-10">
        {marketStats.map((stat, i) => (
          <AnimatedContent key={stat.label} direction="up" delay={i * 100}>
            <div className="relative group overflow-hidden bg-base-800/50 border border-base-700 rounded-xl p-8 text-center">
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ backgroundColor: stat.color }}
              />
              <CountUp
                from={0}
                to={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                className="text-6xl font-mono font-bold"
              />
              <p className="font-display text-sm text-text-secondary mt-3">{stat.label}</p>
              <div className="opacity-0 group-hover:opacity-100 transition">
                <BorderBeam />
              </div>
            </div>
          </AnimatedContent>
        ))}
      </div>

      {/* Why We're Investable */}
      <div className="relative z-10 mt-16">
        <h3 className="font-display text-2xl md:text-3xl font-bold text-text-primary text-center">
          Why We&apos;re Investable
        </h3>

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {investablePoints.map((point, i) => (
            <AnimatedContent key={i} direction="left" delay={i * 80}>
              <div className="flex items-start gap-3">
                <span className="text-accent-cyan">&#x25C6;</span>
                <p className="text-sm text-text-secondary">{point}</p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>

      {/* Phase Roadmap */}
      <div className="relative z-10 mt-12 flex items-center justify-center gap-0">
        {phases.map((phase, i) => (
          <div key={phase.label} className="flex items-center">
            {i > 0 && <div className="border-dashed border-t border-base-600 w-12" />}
            <span className={`${phase.style} px-4 py-2 rounded-full font-mono text-xs`}>
              {phase.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
