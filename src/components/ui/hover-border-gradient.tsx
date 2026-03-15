'use client'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'

export function HoverBorderGradient({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <motion.div
      className={cn('group relative rounded-lg p-px', className)}
      whileHover="hover"
    >
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: 'linear-gradient(135deg, #00FFE0, #A8FF3E, #00FFE0)',
          backgroundSize: '200% 200%',
        }}
        variants={{
          hover: {
            backgroundPosition: ['0% 0%', '100% 100%'],
            transition: { duration: 2, repeat: Infinity, repeatType: 'reverse' },
          },
        }}
      />
      <div className="relative rounded-lg bg-base-900 p-6">
        {children}
      </div>
    </motion.div>
  )
}
