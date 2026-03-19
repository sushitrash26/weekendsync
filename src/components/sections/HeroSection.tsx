'use client'

import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

export default function HeroSection({ onStart }: { onStart?: () => void }) {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start gap-6"
          >
            <div className="inline-block">
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium tracking-wide text-cream/80 backdrop-blur-md">
                A NEW ERA OF PRODUCT DELIVERY
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-9xl font-display leading-[1.05] tracking-tight text-white">
              THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                7-DAY SPRINT
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl leading-relaxed mt-4">
              We operate exclusively in high-velocity, 7-day sprints. 
              One elite team. One week. A fully functional MVP delivered to your domain.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <button 
                onClick={onStart}
                className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-smooth flex items-center gap-2 group"
              >
                Start Your Sprint
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 glass-card rounded-full font-medium hover:bg-white/10 transition-smooth border border-white/20">
                Explore The Process
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
