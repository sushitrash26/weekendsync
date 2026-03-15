'use client'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

export function LampEffect({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn('relative flex flex-col items-center', className)}>
      <motion.div
        initial={{ width: '8rem', opacity: 0.5 }}
        whileInView={{ width: '24rem', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto h-40 bg-gradient-to-b from-accent-cyan/20 to-transparent"
        style={{
          clipPath: 'polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)',
        }}
      />
      <div className="relative -mt-20 z-10">{children}</div>
    </div>
  )
}
