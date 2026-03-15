'use client'
import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect } from 'react'

export function PageLoader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'loading' | 'exiting' | 'done'>('loading')

  useEffect(() => {
    // Phase 1: show for 1.2s
    const t1 = setTimeout(() => setPhase('exiting'), 1200)
    // Phase 2: cinematic exit takes ~1.6s, then complete
    const t2 = setTimeout(() => {
      setPhase('done')
      onComplete()
    }, 2800)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-bg flex flex-col items-center justify-center"
          exit={{
            clipPath: 'inset(0 50% 0 50%)',
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Split logo: Weekend | Sync */}
          <div className="flex items-center gap-8">
            <motion.span
              className="font-display text-3xl md:text-4xl text-cream tracking-tight"
              initial={{ opacity: 0, x: 20 }}
              animate={{
                opacity: 1,
                x: phase === 'exiting' ? -60 : 0,
              }}
              transition={{ duration: phase === 'exiting' ? 0.8 : 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
              Weekend
            </motion.span>

            {/* Horizontal rule between */}
            <motion.div
              className="w-px h-10 bg-rule"
              initial={{ scaleY: 0 }}
              animate={{
                scaleY: phase === 'exiting' ? 0 : 1,
                opacity: phase === 'exiting' ? 0 : 1,
              }}
              transition={{ duration: 0.4, delay: phase === 'exiting' ? 0 : 0.2 }}
            />

            <motion.span
              className="font-display text-3xl md:text-4xl text-cream tracking-tight"
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: 1,
                x: phase === 'exiting' ? 60 : 0,
              }}
              transition={{ duration: phase === 'exiting' ? 0.8 : 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
              Sync
            </motion.span>
          </div>

          {/* Tagline */}
          <motion.p
            className="font-display text-sm md:text-base text-cream/60 mt-6 italic"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: phase === 'exiting' ? 0 : 1,
              y: phase === 'exiting' ? -20 : 0,
              scale: phase === 'exiting' ? 1.5 : 1,
            }}
            transition={{ duration: phase === 'exiting' ? 0.6 : 0.6, delay: phase === 'exiting' ? 0 : 0.4 }}
          >
            From Idea to MVP in 7 Days.
          </motion.p>

          {/* Subtle loading line */}
          <motion.div
            className="w-32 h-px bg-rule mt-8 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'exiting' ? 0 : 0.5 }}
          >
            <motion.div
              className="h-full bg-cream/30"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
