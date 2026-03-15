'use client'

import { pricing } from '@/lib/data'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { ShineBorder } from '@/components/ui/shine-border'
import { MagicCard } from '@/components/ui/magic-card'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' },
} as const

const cardStagger = (i: number) =>
  ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' },
  }) as const

function FeatureRows({ features }: { features: { name: string; value: string | boolean }[] }) {
  return (
    <div className="mt-8 flex-1">
      {features.map((feature, i) => (
        <div
          key={feature.name}
          className={cn(
            'flex justify-between py-2',
            i < features.length - 1 && 'border-b border-base-700/30',
          )}
        >
          <span className="text-sm text-text-secondary">{feature.name}</span>
          <span className="font-mono text-sm">
            {typeof feature.value === 'boolean' && feature.value ? (
              <span className="text-accent-cyan">&#9670;</span>
            ) : (
              <span className="text-accent-lime">{String(feature.value)}</span>
            )}
          </span>
        </div>
      ))}
    </div>
  )
}

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center">
        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold text-text-primary"
          {...fadeUp}
        >
          Simple, Transparent Pricing
        </motion.h2>
        <motion.p
          className="text-text-secondary text-lg mt-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' } as const}
        >
          No hidden fees. No scope creep. Pay once, own everything.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 items-start">
        {pricing.map((plan, i) => {
          // Starter MVP (index 0)
          if (i === 0) {
            return (
              <motion.div
                key={plan.name}
                className="bg-base-800 border border-base-700 rounded-xl p-8 flex flex-col"
                {...cardStagger(i)}
              >
                <span className="text-lg font-mono text-text-secondary uppercase tracking-wider">
                  {plan.name}
                </span>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold text-text-primary">
                    {plan.price}
                  </span>
                  <span className="text-text-muted text-sm">/sprint</span>
                </div>
                <FeatureRows features={plan.features} />
                <ShimmerButton variant="outline" className="w-full mt-6">
                  Get Started
                </ShimmerButton>
              </motion.div>
            )
          }

          // Advanced MVP (index 1, featured)
          if (i === 1) {
            return (
              <motion.div
                key={plan.name}
                className="relative -translate-y-6"
                {...cardStagger(i)}
              >
                {/* MOST POPULAR badge */}
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-cyan text-base-950 font-mono text-[10px] tracking-widest px-3 py-1 rounded-full z-10">
                  MOST POPULAR
                </span>

                <ShineBorder color="#00FFE0">
                  <MagicCard gradientColor="#00FFE0" gradientOpacity={0.08} className="p-8">
                    <span className="text-lg font-mono text-text-secondary uppercase tracking-wider">
                      {plan.name}
                    </span>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="font-display text-5xl font-bold text-accent-cyan">
                        {plan.price}
                      </span>
                      <span className="text-text-muted text-sm">/sprint</span>
                    </div>
                    <FeatureRows features={plan.features} />
                    <ShimmerButton variant="default" className="w-full mt-6">
                      Get Started
                    </ShimmerButton>
                  </MagicCard>
                </ShineBorder>
              </motion.div>
            )
          }

          // AI MVP (index 2)
          return (
            <motion.div
              key={plan.name}
              className="bg-base-800 border border-base-700 rounded-xl p-8 flex flex-col"
              {...cardStagger(i)}
            >
              <span className="text-accent-lime font-mono text-[10px] tracking-widest mb-4 block">
                MOST POWERFUL
              </span>
              <span className="text-lg font-mono text-text-secondary uppercase tracking-wider">
                {plan.name}
              </span>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold text-text-primary">
                  {plan.price}
                </span>
                <span className="text-text-muted text-sm">/sprint</span>
              </div>
              <FeatureRows features={plan.features} />
              <ShimmerButton variant="outline" className="w-full mt-6">
                Get Started
              </ShimmerButton>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
