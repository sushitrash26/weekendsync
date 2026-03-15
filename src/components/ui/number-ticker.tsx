'use client'
import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useTransform, motion, animate } from 'motion/react'
import { cn } from '@/lib/utils'

interface NumberTickerProps {
  value: number
  prefix?: string
  suffix?: string
  className?: string
}

export function NumberTicker({ value, prefix = '', suffix = '', className }: NumberTickerProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => {
    if (value >= 1000) return Math.round(v).toLocaleString()
    return Math.round(v).toString()
  })

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 1.8, ease: 'easeOut' })
    }
  }, [inView, count, value])

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}
