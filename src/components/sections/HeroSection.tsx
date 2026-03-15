'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'

/* ── Decorative tilde SVG ── */
function Tilde() {
  return (
    <svg
      width="24"
      height="10"
      viewBox="0 0 24 10"
      fill="none"
      className="inline-block mx-2 align-middle"
    >
      <path
        d="M2 7c2.5-5 4.5-5 7 0s4.5 5 7 0 4.5-5 7 0"
        stroke="#6B1A1A"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* ── Animation phases ── */
type Phase = 'preloader' | 'exploding' | 'assembling' | 'final'

/*
 * PRELOADER WORD MAP
 * The preloader shows: "From Idea to MVP in 7 Days."
 * The final headline shows:
 *   Line 1: "Turning founder visions"
 *   Line 2: "into production-ready MVPs."
 *   Line 3: "~ In 7 days. ~"
 *
 * Shared words that physically move: none literally match — so we do
 * the same visual trick as the reference: preloader words scatter OUT,
 * final headline words assemble IN from scattered positions.
 */

const PRELOADER_WORDS = ['From', 'Idea', 'to', 'MVP', 'in', '7', 'Days.']

/* Each preloader word gets a random scatter target (in vw/vh offsets) */
const SCATTER_TARGETS: { x: number; y: number; rotate: number; scale: number }[] = [
  { x: -35, y: -25, rotate: -8, scale: 1.6 },  // "From" → upper-left
  { x: 20, y: -30, rotate: 5, scale: 2.0 },     // "Idea" → upper-right
  { x: -25, y: 15, rotate: -3, scale: 1.4 },    // "to" → mid-left
  { x: 30, y: 5, rotate: 6, scale: 2.2 },       // "MVP" → mid-right
  { x: -15, y: 30, rotate: -4, scale: 1.3 },    // "in" → lower-left
  { x: 10, y: 25, rotate: 3, scale: 1.8 },      // "7" → lower-center
  { x: 35, y: 20, rotate: 7, scale: 1.5 },      // "Days." → lower-right
]

/* Final headline words — each enters from a scattered origin */
const HEADLINE_LINES = [
  {
    words: ['Turning', 'founder', 'visions'],
    origins: [
      { x: -40, y: -20 }, { x: 20, y: -35 }, { x: 45, y: -15 },
    ],
  },
  {
    words: ['into', 'production-ready', 'MVPs.'],
    origins: [
      { x: -30, y: 10 }, { x: -10, y: 30 }, { x: 35, y: 25 },
    ],
  },
  {
    words: ['In', '7', 'days.'],
    origins: [
      { x: -20, y: 35 }, { x: 5, y: 40 }, { x: 25, y: 30 },
    ],
  },
]

const ease = [0.76, 0, 0.24, 1] as const

export default function HeroSection() {
  const [phase, setPhase] = useState<Phase>('preloader')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('exploding'), 1400)
    const t2 = setTimeout(() => setPhase('assembling'), 2000)
    const t3 = setTimeout(() => setPhase('final'), 2800)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  const isPreloader = phase === 'preloader'
  const isExploding = phase === 'exploding'
  const isAssembling = phase === 'assembling' || phase === 'final'
  const isFinal = phase === 'final'

  return (
    <section className="h-screen relative flex flex-col bg-bg overflow-hidden">

      {/* ════════════════════════════════════════════════════════════
          PRELOADER LAYER — split logo + tagline, centered
          ════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {(isPreloader || isExploding) && (
          <motion.div
            className="absolute inset-0 z-30 flex flex-col items-center justify-center"
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            {/* Split logo: Weekend ─── Sync */}
            <div className="flex items-center gap-6 mb-8">
              <motion.span
                className="font-display text-xl md:text-2xl text-cream tracking-tight"
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: isExploding ? 0 : 1,
                  x: isExploding ? -80 : 0,
                }}
                transition={{ duration: isExploding ? 0.6 : 0.5, ease }}
              >
                Weekend
              </motion.span>

              <motion.div
                className="h-px bg-rule"
                initial={{ width: 0 }}
                animate={{
                  width: isExploding ? 0 : 120,
                  opacity: isExploding ? 0 : 0.4,
                }}
                transition={{ duration: 0.5, ease }}
              />

              <motion.span
                className="font-display text-xl md:text-2xl text-cream tracking-tight"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isExploding ? 0 : 1,
                  x: isExploding ? 80 : 0,
                }}
                transition={{ duration: isExploding ? 0.6 : 0.5, ease }}
              >
                Sync
              </motion.span>
            </div>

            {/* Tagline words — scatter on explosion */}
            <div className="flex flex-wrap justify-center gap-x-[0.35em]">
              {PRELOADER_WORDS.map((word, i) => {
                const target = SCATTER_TARGETS[i]
                return (
                  <motion.span
                    key={word + i}
                    className="font-display text-[clamp(1.8rem,5vw,3.5rem)] text-cream leading-tight"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{
                      opacity: isExploding ? 0 : 1,
                      x: isExploding ? `${target.x}vw` : 0,
                      y: isExploding ? `${target.y}vh` : 0,
                      rotate: isExploding ? target.rotate : 0,
                      scale: isExploding ? target.scale : 1,
                    }}
                    transition={{
                      duration: isExploding ? 0.7 : 0.6,
                      delay: isExploding ? i * 0.03 : 0.3 + i * 0.05,
                      ease,
                    }}
                  >
                    {word}
                  </motion.span>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ════════════════════════════════════════════════════════════
          HERO LAYER — navbar + headline + body + 3D
          Mounts once assembling begins, stays forever
          ════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {isAssembling && (
          <motion.div
            className="absolute inset-0 z-20 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* ── NAVBAR ── */}
            <motion.nav
              className="flex items-center justify-between px-6 md:px-10 pt-6 pb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
            >
              {/* Left — stacked links */}
              <div className="hidden md:flex flex-col gap-0">
                {['Work (12+)', 'Services', 'About'].map((link, i) => (
                  <motion.span
                    key={link}
                    className="font-mono text-[11px] text-muted leading-snug"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.06, duration: 0.5, ease }}
                  >
                    {link}
                  </motion.span>
                ))}
              </div>

              {/* Center — merged logo */}
              <motion.span
                className="font-display text-sm text-cream tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6, ease }}
              >
                WeekendSync
              </motion.span>

              {/* Right — CTA */}
              <div className="hidden md:flex items-center gap-5">
                <motion.span
                  className="font-mono text-[11px] text-muted"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Join our sprint &rarr;
                </motion.span>
                <motion.span
                  className="bg-accent-red text-cream font-mono text-[11px] tracking-wide px-5 py-2 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5, ease }}
                >
                  Start Building
                </motion.span>
              </div>
            </motion.nav>

            {/* ── HEADLINE — words assemble from scattered positions ── */}
            <div className="flex-1 flex items-center justify-center px-6 md:px-16 -mt-8">
              <h1 className="text-center">
                {HEADLINE_LINES.map((line, lineIdx) => (
                  <span key={lineIdx} className="block">
                    {lineIdx === 2 && <Tilde />}
                    {line.words.map((word, wordIdx) => {
                      const origin = line.origins[wordIdx]
                      /* Some words are bold/larger in the reference */
                      const isBold =
                        word === 'visions' ||
                        word === 'MVPs.' ||
                        word === 'days.'
                      return (
                        <motion.span
                          key={word + lineIdx}
                          className={`font-display text-cream inline-block ${
                            isBold
                              ? 'text-[clamp(2.8rem,8vw,7rem)] font-semibold'
                              : 'text-[clamp(2.2rem,6.5vw,5.5rem)]'
                          } leading-[0.95] tracking-tight`}
                          style={{ marginRight: '0.25em' }}
                          initial={{
                            opacity: 0,
                            x: `${origin.x}vw`,
                            y: `${origin.y}vh`,
                          }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          transition={{
                            duration: 0.9,
                            delay: lineIdx * 0.12 + wordIdx * 0.06,
                            ease,
                          }}
                        >
                          {word}
                        </motion.span>
                      )
                    })}
                    {lineIdx === 2 && <Tilde />}
                  </span>
                ))}
              </h1>
            </div>

            {/* ── BOTTOM SECTION — body left, 3D right ── */}
            <motion.div
              className="flex items-end justify-between px-6 md:px-10 pb-8 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isFinal ? 1 : 0, y: isFinal ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
            >
              {/* Left — body copy */}
              <div className="max-w-sm">
                <p className="font-body text-[13px] text-muted leading-relaxed">
                  A high-velocity execution studio specializing
                  in delivering production-ready MVPs
                </p>
                <p className="font-display italic text-cream/50 text-sm mt-2">
                  for ambitious founders.
                </p>
                <div className="flex items-center gap-4 mt-5">
                  <span className="border border-cream/20 text-cream font-mono text-[11px] tracking-wider px-5 py-2 cursor-pointer hover:bg-cream hover:text-bg transition-colors duration-300">
                    Our Work
                  </span>
                  <span className="font-mono text-[9px] text-muted/50 tracking-wide">
                    Trusted by ambitious founders
                    <br />
                    &amp; early-stage teams.
                  </span>
                </div>
              </div>

              {/* Right spacer — keeps layout balanced */}
              <div className="hidden md:block w-[280px] flex-shrink-0" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
