'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Our Works',    href: '#our-works' },
  { label: 'Browse Teams', href: '#browse-teams' },
  { label: 'Results',      href: '#results' },
]

const utilityLinks = [
  { label: 'Admin',    href: '/admin' },
  { label: 'Portal',   href: '/portal' },
  { label: 'Delivery', href: '/delivery' },
]

export function Navbar({ onStart }: { onStart?: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-xl bg-black/60 border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="relative group flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-white/20 group-hover:border-accent-cyan/80 transition-smooth flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white group-hover:bg-accent-cyan transition-smooth" />
              </div>
              <span className="font-display text-2xl text-white tracking-tight">
                Weekend<span className="text-accent-cyan">Sync</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-smooth"
                >
                  {link.label}
                </button>
              ))}

              {/* Utility / Internal Divider */}
              <div className="w-px h-5 bg-white/10 mx-2" />
              {utilityLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm text-white/40 hover:text-white/80 rounded-lg hover:bg-white/5 transition-smooth font-mono"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <button
                onClick={onStart}
                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-smooth group shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                Start Sprint
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-smooth"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 left-0 right-0 z-40 backdrop-blur-xl bg-black/80 border-b border-white/10 lg:hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-smooth text-sm"
                >
                  {link.label}
                </button>
              ))}
              <div className="h-px bg-white/10 my-2" />
              {utilityLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-white/40 hover:text-white/80 hover:bg-white/5 rounded-xl transition-smooth text-sm font-mono"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => { setMobileOpen(false); onStart?.() }}
                className="mt-2 w-full py-3 bg-white text-black font-medium rounded-xl hover:bg-white/90 transition-smooth flex items-center justify-center gap-2 group"
              >
                Start Your Sprint
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
