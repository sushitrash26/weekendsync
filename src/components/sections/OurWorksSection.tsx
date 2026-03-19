'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

// Mock Data
const projects = [
  {
    id: 1,
    title: 'NEXUS COMMERCE',
    category: 'E-Commerce / Headless',
    description: 'A completely decoupled Shopify storefront built on Next.js. Engineered to handle 10k+ concurrent checkouts with sub-second LCP. We stripped away the bloat and delivered a hyper-optimized purchasing funnel.',
    theme: 'from-accent-cyan/20 to-black',
  },
  {
    id: 2,
    title: 'VEKTOR AI DASHBOARD',
    category: 'SaaS / AI App',
    description: 'Admin architecture for a generative AI platform. Features real-time token tracking, complex prompt engineering workflows, and a dual-pane contextual layout using deep glassmorphism.',
    theme: 'from-accent-lime/20 to-black',
  },
  {
    id: 3,
    title: 'PULSE PROTOCOL',
    category: 'Fintech / Web3',
    description: 'A sleek, minimalist decentralized exchange interface. We focused heavily on eliminating friction in the wallet connection process and visualizing complex liquidity pools through custom D3 charts.',
    theme: 'from-white/10 to-black',
  },
  {
    id: 4,
    title: 'ACME LOGISTICS',
    category: 'Internal Tools',
    description: 'A global shipping tracker replacing 15 legacy spreadsheets. Operates strictly in the browser with local-first syncing via IndexedDB, wrapped in a high-contrast dark mode UI.',
    theme: 'from-accent-amber/20 to-black',
  },
  {
    id: 5,
    title: 'NOVA STREAM',
    category: 'Media / Streaming',
    description: 'A dedicated video-on-demand platform architecture supporting HLS adaptive bitrate streaming natively inside React, tailored for a specialized indie film distributor.',
    theme: 'from-accent-red-dark/20 to-black',
  }
]

export function OurWorksSection() {
  const [activeIndex, setActiveIndex] = useState(2) // Start at middle

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const handleCardClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className="py-24 relative overflow-hidden bg-black/50">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header - matching reference layout */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-medium tracking-[0.2em] text-white/50 uppercase mb-4">View our latest works</h2>
            <h3 className="text-4xl md:text-6xl font-display text-white tracking-widest uppercase">OUR WORKS</h3>
          </div>
          <p className="max-w-xs text-sm text-white/60 italic leading-relaxed">
            We stripped away the noise to engineer high-velocity MVPs that look drastically different than the current SaaS landscape.
          </p>
        </div>

        {/* The 3D Carousel Stage */}
        <div className="relative h-[600px] flex items-center justify-center perspective-[1000px] mb-12">
          {projects.map((project, index) => {
            // Calculate relative position to active index
            const isCenter = index === activeIndex
            const offset = index - activeIndex
            
            // Core Animation Values
            const zIndex = isCenter ? 50 : 50 - Math.abs(offset)
            const rotateY = offset * -20 // Angle side cards
            const translateX = offset * 120 // Space them out
            const scale = isCenter ? 1 : 0.85
            const opacity = Math.abs(offset) > 2 ? 0 : isCenter ? 1 : 0.5 // Fade out distant cards
            
            return (
              <motion.div
                key={project.id}
                onClick={() => handleCardClick(index)}
                className={`absolute w-[300px] md:w-[350px] h-[450px] md:h-[500px] cursor-pointer rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-b ${project.theme} backdrop-blur-md shadow-2xl`}
                initial={false}
                animate={{
                  rotateY,
                  x: translateX,
                  z: Math.abs(offset) * -100, // Push distant cards further back
                  scale,
                  opacity,
                  zIndex
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
              >
                {/* Visual Placeholder (Top) */}
                <div className="h-1/2 w-full flex items-center justify-center p-8 relative">
                   <div className="absolute inset-0 bg-black/20" />
                   <h4 className="font-display text-3xl text-white/80 text-center relative z-10 skew-x-[-5deg] tracking-wider">{project.title.split(' ')[0]}</h4>
                </div>

                {/* Details (Bottom) */}
                <div className="h-1/2 w-full bg-black/80 flex flex-col p-6 relative">
                  <div className="mb-auto">
                    <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-white/60 uppercase tracking-widest mb-4">
                      {project.category}
                    </span>
                    <h5 className="font-medium text-white text-lg mb-2">{project.title}</h5>
                  </div>
                  
                  {/* Dynamic Reveal of Description on Center Card */}
                  <AnimatePresence>
                    {isCenter && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-xs text-white/50 leading-relaxed mb-4"
                      >
                        {project.description}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-auto flex justify-between items-center pt-4 border-t border-white/10">
                    <span className="text-[10px] text-white/30 uppercase tracking-wider">MVP Delivered</span>
                    {isCenter && <ExternalLink className="w-4 h-4 text-white hover:text-accent-cyan transition-colors" />}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center items-center gap-4">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-smooth active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full transition-smooth ${i === activeIndex ? 'bg-white' : 'bg-white/20'}`} 
              />
            ))}
          </div>
          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-smooth active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  )
}
