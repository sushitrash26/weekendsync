'use client'

import dynamic from 'next/dynamic'
import { Aurora } from '@/components/ui/aurora'
import { LampEffect } from '@/components/ui/lamp-effect'
import { Meteors } from '@/components/ui/meteors'
import { Ripple } from '@/components/ui/ripple'
import { ClickSpark } from '@/components/ui/click-spark'
import { Magnet } from '@/components/ui/magnet'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { BlurText } from '@/components/ui/blur-text'
import { motion } from 'motion/react'

const StarsScene = dynamic(
  () => import('@/components/three/StarsScene').then((m) => m.StarsScene),
  { ssr: false, loading: () => <div className="absolute inset-0 bg-base-950" /> }
)

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
} as const

export function CTASection() {
  return (
    <section
      id="contact"
      className="py-32 px-6 relative overflow-hidden min-h-[80vh] flex items-center justify-center"
    >
      {/* Layer 1: Stars */}
      <div className="absolute inset-0 z-0">
        <StarsScene />
      </div>

      {/* Layer 2: Aurora */}
      <div className="absolute inset-0 z-1">
        <Aurora colorStops={['#00FFE0', '#050810', '#A8FF3E']} blend={0.12} />
      </div>

      {/* Layer 3: Meteors */}
      <Meteors number={8} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <LampEffect>
          <BlurText
            text="The next great startup is somewhere between"
            animateBy="words"
            className="font-display text-3xl md:text-5xl font-bold text-text-primary"
          />
          <BlurText
            text="an idea and an MVP."
            animateBy="chars"
            className="font-display text-3xl md:text-5xl font-bold text-accent-cyan mt-2"
          />
          <p className="font-display italic text-xl md:text-2xl text-text-secondary mt-6">
            WeekendSync is the bridge.
          </p>
        </LampEffect>

        {/* Buttons */}
        <div className="relative mt-10 flex gap-4 justify-center">
          <Ripple />
          <ClickSpark>
            <ShimmerButton variant="default" className="relative z-10">
              Start Your Sprint
            </ShimmerButton>
          </ClickSpark>
          <Magnet strength={0.3}>
            <ShimmerButton variant="outline" className="relative z-10">
              Investment Inquiries
            </ShimmerButton>
          </Magnet>
        </div>

        {/* Investor note */}
        <p className="font-mono text-xs text-text-muted max-w-md mx-auto mt-8">
          Currently seeking seed-stage investment to scale team capacity and accelerate platform
          development.
        </p>
      </div>
    </section>
  )
}
