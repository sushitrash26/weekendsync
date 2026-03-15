'use client'

import { ParticlesBg } from '@/components/ui/particles-bg'
import { ScrambleHover } from '@/components/ui/scramble-hover'
import { Magnet } from '@/components/ui/magnet'
import { Linkedin, Twitter, Rocket } from 'lucide-react'
import { motion } from 'motion/react'

const navLinks = ['Process', 'Services', 'Pricing', 'Contact'] as const

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Rocket, href: '#', label: 'ProductHunt' },
] as const

const iconHover = {
  scale: 1.1,
} as const

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-base-700/50 relative overflow-hidden">
      <ParticlesBg particleCount={20} className="opacity-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Row 1 */}
        <div className="flex items-center justify-between">
          <Magnet strength={0.2}>
            <span className="font-display font-bold text-xl text-text-primary">
              WeekendSync
              <span className="text-accent-cyan"> &#x25C6;</span>
            </span>
          </Magnet>
          <p className="text-text-secondary text-sm">From Idea to MVP in 7 Days</p>
        </div>

        {/* Row 2 */}
        <nav className="flex gap-6 mt-8">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}>
              <ScrambleHover className="font-mono text-xs text-text-muted hover:text-text-primary transition-colors">
                {link}
              </ScrambleHover>
            </a>
          ))}
        </nav>

        {/* Row 3 */}
        <div className="flex justify-between items-center mt-8 pt-8 border-t border-base-700/30">
          <p className="text-text-muted text-xs">
            &copy; 2025 WeekendSync. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={iconHover}
                className="text-text-muted hover:text-accent-cyan transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
