'use client'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export function AnimatedGridPattern({ className }: { className?: string }) {
  const [cells, setCells] = useState<number[]>([])
  const totalCells = 200
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCells(
        Array.from({ length: 6 }, () => Math.floor(Math.random() * totalCells)),
      )
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={containerRef} className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      <div className="grid grid-cols-20 grid-rows-10 h-full w-full">
        {Array.from({ length: totalCells }, (_, i) => (
          <div
            key={i}
            className="border border-base-700/20 transition-colors duration-1000"
            style={{
              backgroundColor: cells.includes(i) ? 'rgba(0,255,224,0.06)' : 'transparent',
            }}
          />
        ))}
      </div>
    </div>
  )
}
