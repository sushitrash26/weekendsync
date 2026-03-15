'use client'

import { CustomCursor } from '@/components/cursor/CustomCursor'
import HeroSection from '@/components/sections/HeroSection'
import TickerSection from '@/components/sections/TickerSection'
import ProblemSection from '@/components/sections/ProblemSection'
import SolutionSection from '@/components/sections/SolutionSection'
import ProcessTimeline from '@/components/sections/ProcessTimeline'
import ServicesGrid from '@/components/sections/ServicesGrid'
import { PricingSection } from '@/components/sections/PricingSection'
import { CustomersSection } from '@/components/sections/CustomersSection'
import TeamSection from '@/components/sections/TeamSection'
import CompetitiveSection from '@/components/sections/CompetitiveSection'
import { MarketSection } from '@/components/sections/MarketSection'
import { CTASection } from '@/components/sections/CTASection'
import { Footer } from '@/components/sections/Footer'

function SectionDivider() {
  return <div className="h-px bg-linear-to-r from-transparent via-rule to-transparent" />
}

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main>
        <HeroSection />
        <TickerSection />
        <SectionDivider />
        <ProblemSection />
        <SectionDivider />
        <SolutionSection />
        <SectionDivider />
        <ProcessTimeline />
        <SectionDivider />
        <ServicesGrid />
        <SectionDivider />
        <PricingSection />
        <SectionDivider />
        <CustomersSection />
        <SectionDivider />
        <TeamSection />
        <SectionDivider />
        <CompetitiveSection />
        <SectionDivider />
        <MarketSection />
        <SectionDivider />
        <CTASection />
        <Footer />
      </main>
    </>
  )
}
