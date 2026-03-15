'use client'
import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { cn } from '@/lib/utils'

export function TracingBeam({ className, children }: { className?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end center'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <div ref={ref} className={cn('relative', className)}>
      <div className="absolute left-4 top-0 bottom-0 w-px md:left-8">
        <div className="absolute inset-0 bg-base-700/40" />
        <motion.div
          className="absolute top-0 left-0 w-full bg-accent-cyan origin-top"
          style={{ scaleY, height: '100%' }}
        />
      </div>
      <div className="pl-12 md:pl-20">{children}</div>
    </div>
  )
}
