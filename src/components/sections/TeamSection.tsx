'use client'

import { useState } from 'react'
import { teamDomains } from '@/lib/data'
import { ScrambleHover } from '@/components/ui/scramble-hover'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'

const expandVariants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: { height: 'auto', opacity: 1 },
} as const

const chevronVariants = {
  closed: { rotate: 0 },
  open: { rotate: 180 },
} as const

const roleVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.25, delay: i * 0.06, ease: 'easeOut' as const },
  }),
}

export default function TeamSection() {
  const [openDomain, setOpenDomain] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenDomain(openDomain === index ? null : index)
  }

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
        Your Sprint Team
      </h2>
      <p className="text-text-secondary text-lg mt-4">
        Every sprint is staffed with senior-level operators across four domains.
      </p>

      <div className="space-y-4 mt-16">
        {teamDomains.map((domain, index) => (
          <div key={domain.number} className="border-b border-base-700/50">
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex items-center gap-4 py-6 w-full text-left cursor-pointer"
            >
              <span className="font-mono text-xs text-text-muted">
                {domain.number}
              </span>
              <span className="font-display text-2xl md:text-3xl font-semibold text-text-primary">
                <ScrambleHover>{domain.name}</ScrambleHover>
              </span>
              <span className="font-mono text-xs bg-base-700 px-2 py-1 rounded ml-auto text-text-secondary">
                {domain.roles.length} {domain.roles.length === 1 ? 'role' : 'roles'}
              </span>
              <motion.div
                variants={chevronVariants}
                animate={openDomain === index ? 'open' : 'closed'}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <ChevronDown className="h-5 w-5 text-text-muted" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openDomain === index && (
                <motion.div
                  key={`content-${index}`}
                  variants={expandVariants}
                  initial="collapsed"
                  animate="expanded"
                  exit="collapsed"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div
                    className="border-l-2 ml-4 pl-4 pb-4 space-y-0"
                    style={{ borderColor: domain.color }}
                  >
                    {domain.roles.map((role, i) => (
                      <motion.div
                        key={role.title}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={roleVariants}
                        className="border-b border-base-700/30 py-3"
                      >
                        <span
                          className="font-mono text-sm"
                          style={{ color: domain.color }}
                        >
                          &rarr; {role.title}
                        </span>
                        <p className="text-xs text-text-muted ml-4 mt-1">
                          {role.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}
