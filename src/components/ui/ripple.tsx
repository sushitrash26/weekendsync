'use client'
import { cn } from '@/lib/utils'

export function Ripple({ className }: { className?: string }) {
  return (
    <div className={cn('absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none', className)}>
      {Array.from({ length: 4 }, (_, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-accent-cyan/10"
          style={{
            width: `${(i + 1) * 200}px`,
            height: `${(i + 1) * 200}px`,
            animation: `ripple 4s ease-out ${i * 0.8}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 0.4; }
          100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
