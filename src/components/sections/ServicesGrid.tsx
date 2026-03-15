'use client'

import { motion } from 'motion/react'
import { services } from '@/lib/data'
import { CardSpotlight } from '@/components/ui/card-spotlight'
import { BorderBeam } from '@/components/ui/border-beam'
import AnimatedCardStack from '@/components/ui/animate-card-animation'
import { cn } from '@/lib/utils'
import {
  Code,
  Brain,
  BarChart3,
  Workflow,
  Globe,
  Presentation,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  'SaaS MVPs': Code,
  'AI-Powered Tools': Brain,
  'Internal Dashboards': BarChart3,
  'Automation Systems': Workflow,
  'Landing Pages & Waitlists': Globe,
  'Investor Demo Prototypes': Presentation,
}

const categoryMap: Record<string, string> = {
  'SaaS MVPs': 'SaaS',
  'AI-Powered Tools': 'Artificial Intelligence',
  'Internal Dashboards': 'Analytics',
  'Automation Systems': 'Automation',
  'Landing Pages & Waitlists': 'Marketing',
  'Investor Demo Prototypes': 'Demos',
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' },
} as const

const cardStagger = (i: number) =>
  ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.4, delay: i * 0.1, ease: 'easeOut' },
  }) as const

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="font-display text-4xl md:text-5xl font-bold text-text-primary text-center mb-16"
        {...fadeUp}
      >
        What We Build
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
        {services.map((service, i) => {
          const Icon = iconMap[service.title] ?? Code
          const isLast = i === services.length - 1

          return (
            <motion.div
              key={service.title}
              className={cn(
                'relative group',
                service.wide && !isLast && 'md:col-span-2',
                isLast && 'md:col-span-2 lg:col-span-3',
              )}
              {...cardStagger(i)}
            >
              <CardSpotlight className="h-full relative">
                {/* BorderBeam visible on hover */}
                <BorderBeam
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Category label */}
                <span className="font-mono text-[10px] text-accent-cyan uppercase tracking-widest mb-4 block">
                  {categoryMap[service.title] ?? 'Build'}
                </span>

                {/* Icon */}
                <Icon className="text-accent-cyan mb-3" size={24} />

                {/* Title */}
                <h3 className="font-display text-xl font-semibold text-text-primary">
                  {service.title}
                </h3>

                {/* Examples */}
                <p className="font-mono text-xs text-text-muted mt-3">
                  {service.examples}
                </p>

                {/* Arrow */}
                <motion.div
                  className="absolute bottom-6 right-6"
                  whileHover={{ x: 4 }}
                >
                  <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-accent-cyan transition-colors duration-300" />
                </motion.div>
              </CardSpotlight>
            </motion.div>
          )
        })}
      </div>

      {/* Project Showcase — Animated Card Stack */}
      <motion.div
        className="mt-24"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h3 className="font-display text-2xl md:text-3xl font-bold text-text-primary text-center mb-2">
          Recent Builds
        </h3>
        <p className="font-mono text-sm text-text-muted text-center mb-8">
          Shipped in 7 days or less
        </p>
        <AnimatedCardStack />
      </motion.div>
    </section>
  )
}
