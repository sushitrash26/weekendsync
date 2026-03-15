'use client'
import { cn } from '@/lib/utils'

export function BackgroundBeams({ className }: { className?: string }) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      <svg
        className="absolute h-full w-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="beam-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FFE0" stopOpacity="0" />
            <stop offset="50%" stopColor="#00FFE0" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#00FFE0" stopOpacity="0" />
          </linearGradient>
        </defs>
        {Array.from({ length: 8 }, (_, i) => {
          const x = 10 + i * 12
          return (
            <line
              key={i}
              x1={`${x}%`}
              y1="0%"
              x2={`${x + 20}%`}
              y2="100%"
              stroke="url(#beam-grad)"
              strokeWidth="1"
            />
          )
        })}
      </svg>
    </div>
  )
}
