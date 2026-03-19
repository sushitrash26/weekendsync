'use client'

import { useState } from 'react'
import HeroSection from '@/components/sections/HeroSection'
import { StatsBar } from '@/components/sections/StatsBar'
import { BrowseTeams } from '@/components/sections/BrowseTeams'
import { TrustSection } from '@/components/sections/TrustSection'
import { CTASection } from '@/components/sections/CTASection'
import { Footer } from '@/components/sections/Footer'
import { OnboardingModal } from '@/components/ui/OnboardingModal'
import { BentoGridSection } from '@/components/sections/BentoGridSection'
import { OurWorksSection } from '@/components/sections/OurWorksSection'
import { Navbar } from '@/components/ui/Navbar'

function SectionDivider() {
  return <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Navbar onStart={() => setIsModalOpen(true)} />
      <main className="relative z-10 w-full overflow-hidden">
        <section id="hero">
          <HeroSection onStart={() => setIsModalOpen(true)} />
        </section>
        <StatsBar />
        <SectionDivider />
        <section id="how-it-works">
          <BentoGridSection />
        </section>
        <SectionDivider />
        <section id="our-works">
          <OurWorksSection />
        </section>
        <SectionDivider />
        <section id="browse-teams">
          <BrowseTeams onPitch={() => setIsModalOpen(true)} />
        </section>
        <SectionDivider />
        <section id="results">
          <TrustSection />
        </section>
        <SectionDivider />
        <CTASection />
        <Footer />
        <OnboardingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </main>
    </>
  )
}
