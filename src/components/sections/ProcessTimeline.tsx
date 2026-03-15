'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { processSteps } from '@/lib/data'
import { TracingBeam } from '@/components/ui/tracing-beam'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' },
} as const

const staggerRow = (i: number) =>
  ({
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.4, delay: i * 0.1, ease: 'easeOut' },
  }) as const

const expandVariants = {
  initial: { height: 0, opacity: 0 },
  animate: { height: 'auto', opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.3, ease: 'easeInOut' },
} as const

export default function ProcessTimeline() {
  const [expandedDay, setExpandedDay] = useState<number | null>(null)

  return (
    <section id="process" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.h2
        className="font-display text-4xl md:text-5xl font-bold text-text-primary text-center mb-16"
        {...fadeUp}
      >
        7 Days. One Sprint. Done.
      </motion.h2>

      <TracingBeam>
        <div className="flex flex-col">
          {processSteps.map((step, i) => {
            const isExpanded = expandedDay === step.day

            return (
              <motion.div
                key={step.day}
                className="relative mb-16 cursor-pointer"
                onClick={() =>
                  setExpandedDay(isExpanded ? null : step.day)
                }
                {...staggerRow(i)}
              >
                {/* Giant ghost day number */}
                <span className="absolute -left-4 md:-left-8 -top-8 font-mono text-[150px] leading-none font-bold text-base-700/20 pointer-events-none select-none">
                  {step.day}
                </span>

                {/* Day label pill */}
                <span
                  className={`inline-flex font-mono text-xs px-3 py-1 rounded-full transition-colors duration-300 ${
                    isExpanded
                      ? 'bg-accent-cyan text-base-950'
                      : 'bg-base-700 border border-base-600 text-text-muted'
                  }`}
                >
                  Day {step.day}
                </span>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold text-text-primary mt-3">
                  {step.label}
                </h3>

                {/* Output */}
                <p className="text-sm text-text-muted mt-1">{step.output}</p>

                {/* Expandable detail */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="detail"
                      className="overflow-hidden"
                      {...expandVariants}
                    >
                      <div className="bg-base-800/50 border border-accent-cyan/20 rounded-lg p-4 mt-3">
                        <p className="text-sm text-text-muted leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </TracingBeam>

      {/* Commitment banner */}
      <motion.div
        className="bg-base-800 border-l-4 border-accent-lime px-8 py-4 rounded-r-lg mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' } as const}
      >
        <p className="font-mono text-sm text-accent-lime">
          If we can&apos;t deliver what was scoped, we tell you by Day 3 — not
          Day 7.
        </p>
      </motion.div>
    </section>
  )
}
