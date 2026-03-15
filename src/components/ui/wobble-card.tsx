'use client'
import { useRef, useState } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

export function WobbleCard({ className, children }: { className?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const midX = rect.width / 2
    const midY = rect.height / 2
    setRotateX((y - midY) / -10)
    setRotateY((x - midX) / 10)
  }

  function handleMouseLeave() {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      style={{ perspective: 800, transformStyle: 'preserve-3d' }}
      className={cn(
        'relative rounded-lg border border-base-700/50 bg-base-800/60 p-6 backdrop-blur-sm',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}
