'use client'
import { cn } from '@/lib/utils'

interface MarqueeProps {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children: React.ReactNode
}

export function Marquee({ className, reverse, pauseOnHover = false, children }: MarqueeProps) {
  return (
    <div className={cn('group flex overflow-hidden [--duration:35s]', className)}>
      <div
        className={cn(
          'flex shrink-0 items-center gap-0 animate-marquee',
          reverse && '[animation-direction:reverse]',
          pauseOnHover && 'group-hover:[animation-play-state:paused]',
        )}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
