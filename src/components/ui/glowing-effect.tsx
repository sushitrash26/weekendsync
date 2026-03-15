'use client'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

export function GlowingEffect({ className, children }: { className?: string; children: React.ReactNode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className={cn('relative rounded-lg', className)}
      animate={inView ? { boxShadow: ['0 0 0px rgba(0,255,224,0)', '0 0 20px rgba(0,255,224,0.15)', '0 0 0px rgba(0,255,224,0)'] } : {}}
      transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
    >
      {children}
    </motion.div>
  )
}
