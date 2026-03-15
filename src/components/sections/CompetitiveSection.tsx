'use client'

import { competitors } from '@/lib/data'
import { LampEffect } from '@/components/ui/lamp-effect'
import { GradientText } from '@/components/ui/gradient-text'
import { motion } from 'motion/react'

const rowVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -20 : 20,
  }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: 'easeOut' as const },
  }),
}

export default function CompetitiveSection() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
        Why WeekendSync
      </h2>

      {/* Headers */}
      <div className="grid grid-cols-2 gap-4 mt-16 mb-4">
        <span className="font-mono text-xs tracking-widest text-accent-red uppercase">
          TRADITIONAL
        </span>
        <span className="font-mono text-xs tracking-widest text-accent-cyan uppercase">
          WEEKENDSYNC
        </span>
      </div>

      {/* Comparison rows */}
      <div className="flex flex-col gap-2">
        {competitors.map((row, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={rowVariants}
            className={`group grid grid-cols-2 gap-4 p-4 rounded-lg ${
              i % 2 === 0 ? 'bg-base-800/20' : 'bg-base-800/40'
            }`}
          >
            {/* Them — fades on hover */}
            <span className="text-text-muted text-sm transition-all duration-300 group-hover:opacity-35 group-hover:blur-[1px] group-hover:line-through">
              {row.them}
            </span>

            {/* Us — glows on hover */}
            <span className="text-text-primary text-sm transition-all duration-300 group-hover:border-l-2 group-hover:border-accent-cyan group-hover:pl-4" style={{ textShadow: 'none' }}>
              <span className="transition-all duration-300 group-hover:[text-shadow:0_0_12px_rgba(0,255,224,0.3)]">
                {row.us}
              </span>
            </span>
          </motion.div>
        ))}
      </div>

      {/* Pull quote */}
      <LampEffect>
        <p className="font-display italic text-2xl md:text-3xl text-center text-text-primary mt-16">
          Speed is easy to claim. Execution culture is hard to replicate.
        </p>
      </LampEffect>

      <p className="text-lg text-center mt-4">
        <GradientText>
          WeekendSync&apos;s competitive moat is execution.
        </GradientText>
      </p>
    </section>
  )
}
