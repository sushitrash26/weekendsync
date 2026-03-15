'use client'

import { customers } from '@/lib/data'
import { TiltedCard } from '@/components/ui/tilted-card'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

/* ── Abstract SVG Avatars (56x56) ── */

function FounderAvatar() {
  return (
    <svg width={56} height={56} viewBox="0 0 56 56" fill="none">
      <circle cx={20} cy={28} r={14} fill="#00FFE0" opacity={0.3} />
      <circle cx={28} cy={20} r={14} fill="#00FFE0" opacity={0.3} />
      <circle cx={36} cy={28} r={14} fill="#00FFE0" opacity={0.4} />
    </svg>
  )
}

function MakerAvatar() {
  return (
    <svg width={56} height={56} viewBox="0 0 56 56" fill="none">
      <polygon points="10,40 18,26 26,40" fill="#A8FF3E" opacity={0.35} />
      <polygon points="22,40 30,26 38,40" fill="#A8FF3E" opacity={0.45} />
      <polygon points="16,28 24,14 32,28" fill="#A8FF3E" opacity={0.55} />
      <polygon points="30,40 38,26 46,40" fill="#A8FF3E" opacity={0.35} />
    </svg>
  )
}

function NonTechAvatar() {
  return (
    <svg width={56} height={56} viewBox="0 0 56 56" fill="none">
      <polygon points="28,6 43,14.5 43,31.5 28,40 13,31.5 13,14.5" fill="#FFB800" opacity={0.25} />
      <polygon points="28,12 38,17.5 38,28.5 28,34 18,28.5 18,17.5" fill="#FFB800" opacity={0.35} />
      <polygon points="28,18 33,21 33,27 28,30 23,27 23,21" fill="#FFB800" opacity={0.5} />
    </svg>
  )
}

function AgencyAvatar() {
  return (
    <svg width={56} height={56} viewBox="0 0 56 56" fill="none">
      <rect x={8} y={8} width={40} height={40} stroke="#4A5578" strokeWidth={2} fill="none" opacity={0.3} />
      <rect x={16} y={16} width={24} height={24} stroke="#4A5578" strokeWidth={2} fill="none" opacity={0.5} />
      <rect x={24} y={24} width={8} height={8} stroke="#4A5578" strokeWidth={2} fill="#4A5578" opacity={0.6} />
    </svg>
  )
}

function HackathonAvatar() {
  return (
    <svg width={56} height={56} viewBox="0 0 56 56" fill="none">
      <polygon points="30,4 24,22 34,22 20,52 28,30 18,30" fill="#FF3B3B" opacity={0.5} />
      <polygon points="36,8 32,20 38,20 28,44 33,26 27,26" fill="#FF3B3B" opacity={0.3} />
    </svg>
  )
}

function AcceleratorAvatar() {
  return (
    <svg width={56} height={56} viewBox="0 0 56 56" fill="none">
      <circle cx={28} cy={28} r={18} stroke="#00FFE0" strokeWidth={1} fill="none" opacity={0.2} />
      <circle cx={28} cy={28} r={10} stroke="#00FFE0" strokeWidth={1} fill="none" opacity={0.3} />
      <circle cx={28} cy={10} r={3} fill="#00FFE0" opacity={0.7} />
      <circle cx={44} cy={22} r={2.5} fill="#00FFE0" opacity={0.5} />
      <circle cx={44} cy={36} r={2} fill="#00FFE0" opacity={0.6} />
      <circle cx={28} cy={46} r={3} fill="#00FFE0" opacity={0.5} />
      <circle cx={12} cy={36} r={2.5} fill="#00FFE0" opacity={0.7} />
      <circle cx={12} cy={22} r={2} fill="#00FFE0" opacity={0.4} />
    </svg>
  )
}

const avatarMap: Record<string, () => React.ReactNode> = {
  'Early-Stage Founders': FounderAvatar,
  'Solo & Indie Makers': MakerAvatar,
  'Non-Technical Founders': NonTechAvatar,
  'Agencies & Consultancies': AgencyAvatar,
  'Hackathon Teams': HackathonAvatar,
  'Accelerator Cohorts': AcceleratorAvatar,
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: 'easeOut' as const },
  }),
}

export function CustomersSection() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary text-center">
        Who We Serve
      </h2>

      {/* Mobile: horizontal scroll */}
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory mt-16 md:hidden pb-4 -mx-6 px-6">
        {customers.map((customer, i) => {
          const Avatar = avatarMap[customer.title] ?? FounderAvatar
          return (
            <motion.div
              key={customer.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="min-w-70 snap-start shrink-0"
            >
              <TiltedCard rotateAmplitude={8} scaleOnHover={1.03} className="h-full">
                <div className="group bg-base-800/60 border border-base-700/50 rounded-lg p-6 h-full flex flex-col">
                  <Avatar />
                  <span className="font-mono text-[10px] text-accent-cyan tracking-widest uppercase mt-2">
                    {customer.tag}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-text-primary mt-2">
                    {customer.title}
                  </h3>
                  <p className="text-sm text-text-secondary mt-2 flex-1">
                    {customer.need}
                  </p>
                  <ArrowRight className="w-4 h-4 text-text-muted mt-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition" />
                </div>
              </TiltedCard>
            </motion.div>
          )
        })}
      </div>

      {/* Desktop: grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {customers.map((customer, i) => {
          const Avatar = avatarMap[customer.title] ?? FounderAvatar
          return (
            <motion.div
              key={customer.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <TiltedCard rotateAmplitude={8} scaleOnHover={1.03} className="h-full">
                <div className="group bg-base-800/60 border border-base-700/50 rounded-lg p-6 h-full flex flex-col">
                  <Avatar />
                  <span className="font-mono text-[10px] text-accent-cyan tracking-widest uppercase mt-2">
                    {customer.tag}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-text-primary mt-2">
                    {customer.title}
                  </h3>
                  <p className="text-sm text-text-secondary mt-2 flex-1">
                    {customer.need}
                  </p>
                  <ArrowRight className="w-4 h-4 text-text-muted mt-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition" />
                </div>
              </TiltedCard>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
