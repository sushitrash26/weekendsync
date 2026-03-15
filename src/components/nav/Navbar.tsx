'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'

const leftLinks = [
  { label: 'Work (12+)', href: '#services' },
  { label: 'Services', href: '#pricing' },
  { label: 'About', href: '#process' },
]

export default function Navbar() {
  const [visible, setVisible] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 50 })

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.85)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Scroll progress bar — always visible */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-cream/15 z-[101] origin-left"
        style={{ scaleX }}
      />

      {/* Sticky nav — only after scrolling past hero */}
      <AnimatePresence>
        {visible && (
          <motion.nav
            className="fixed top-0 left-0 right-0 z-[100] bg-bg/85 backdrop-blur-md border-b border-rule/30"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
              <div className="hidden md:flex flex-col gap-0">
                {leftLinks.map((link) => (
                  <a key={link.href} href={link.href}
                    className="font-mono text-[10px] text-muted hover:text-cream transition-colors tracking-wide">
                    {link.label}
                  </a>
                ))}
              </div>

              <a href="#" className="font-display text-sm text-cream tracking-tight">
                WeekendSync
              </a>

              <div className="hidden md:flex items-center gap-5">
                <a href="#investors" className="font-mono text-[10px] text-muted hover:text-cream transition-colors">
                  Join our sprint &rarr;
                </a>
                <a href="#contact"
                  className="bg-accent-red text-cream font-mono text-[10px] tracking-wide px-4 py-1.5 hover:bg-accent-red/90 transition-colors">
                  Start Building
                </a>
              </div>

              {/* Mobile hamburger */}
              <button
                className="md:hidden flex flex-col gap-1 w-5"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <motion.span className="block h-px bg-cream w-full origin-center"
                  animate={mobileOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }} />
                <motion.span className="block h-px bg-cream w-full"
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} />
                <motion.span className="block h-px bg-cream w-full origin-center"
                  animate={mobileOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }} />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[99] bg-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            {leftLinks.map((link, i) => (
              <motion.a key={link.href} href={link.href}
                className="font-display text-2xl text-cream"
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }} transition={{ delay: i * 0.08, duration: 0.4 }}
                onClick={() => setMobileOpen(false)}>
                {link.label}
              </motion.a>
            ))}
            <motion.a href="#contact"
              className="bg-accent-red text-cream font-mono text-sm px-8 py-3 mt-4"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }} onClick={() => setMobileOpen(false)}>
              Start Building &rarr;
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
