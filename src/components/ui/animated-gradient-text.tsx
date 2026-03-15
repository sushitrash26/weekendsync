'use client'
import { cn } from '@/lib/utils'

export function AnimatedGradientText({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 bg-gradient-to-r from-accent-cyan via-accent-lime to-accent-cyan bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer',
        className,
      )}
    >
      {children}
    </span>
  )
}
