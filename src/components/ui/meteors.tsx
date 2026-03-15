'use client'
import { cn } from '@/lib/utils'

export function Meteors({ number = 20, className }: { number?: number; className?: string }) {
  const meteors = Array.from({ length: number }, (_, i) => {
    const left = Math.random() * 100
    const delay = Math.random() * 5
    const duration = 1.5 + Math.random() * 3
    return (
      <span
        key={i}
        className={cn(
          'absolute top-0 h-0.5 w-0.5 rotate-[215deg] rounded-full bg-accent-cyan shadow-[0_0_0_1px_#ffffff10]',
          "before:content-[''] before:absolute before:top-1/2 before:h-px before:w-12 before:-translate-y-1/2 before:bg-gradient-to-r before:from-accent-cyan before:to-transparent",
        )}
        style={{
          left: `${left}%`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          animation: `meteor ${duration}s linear ${delay}s infinite`,
        }}
      />
    )
  })

  return (
    <>
      <style>{`
        @keyframes meteor {
          0% { transform: rotate(215deg) translateX(0); opacity: 1; }
          70% { opacity: 1; }
          100% { transform: rotate(215deg) translateX(-500px); opacity: 0; }
        }
      `}</style>
      <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
        {meteors}
      </div>
    </>
  )
}
