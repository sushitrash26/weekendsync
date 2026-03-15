'use client'
import { cn } from '@/lib/utils'
import { type ButtonHTMLAttributes } from 'react'

interface ShimmerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
}

export function ShimmerButton({ className, variant = 'default', children, ...props }: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        'group relative inline-flex items-center justify-center overflow-hidden px-8 py-3 font-body text-sm font-semibold tracking-wide transition-all duration-300',
        variant === 'default' && 'bg-accent-cyan text-base-950 hover:shadow-[0_0_30px_rgba(0,255,224,0.3)]',
        variant === 'outline' && 'border border-accent-cyan/40 text-accent-cyan hover:bg-accent-cyan/10',
        className,
      )}
      {...props}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative z-10">{children}</span>
    </button>
  )
}
