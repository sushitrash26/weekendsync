'use client'

import { useState } from 'react'
import { GlassCard } from '@/components/ui/GlassCard'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const predefinedTeams = [
  {
    id: 't1',
    name: 'E-Commerce Launchpad',
    members: '4 Specialists',
    skills: ['Next.js', 'Stripe', 'Tailwind', 'PostgreSQL'],
    description: 'A dedicated pod built to deliver a scalable online storefront with secure payment handling.'
  },
  {
    id: 't2',
    name: 'SaaS Platform Core',
    members: '5 Specialists',
    skills: ['React', 'Node.js', 'Redis', 'AWS'],
    description: 'Architected for complex web portals, multi-tenancy, and high real-time throughput.'
  },
  {
    id: 't3',
    name: 'AI Integration Pod',
    members: '3 Specialists',
    skills: ['Python', 'OpenAI API', 'Vectors', 'FastAPI'],
    description: 'Experts in bolting LLM capabilities and generative pipelines onto existing infrastructure.'
  }
]

export function BrowseTeams({ onPitch }: { onPitch?: () => void }) {
  const [activeTab, setActiveTab] = useState<'predefined' | 'custom'>('predefined')

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
            Find Your <span className="text-accent-cyan">Squad</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Choose a specialized, battle-tested pod ready to go right out of the box, or build your own custom strike team.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-12">
          <div className="p-1 glass-card rounded-full inline-flex gap-2">
            <button
              onClick={() => setActiveTab('predefined')}
              className={`px-8 py-3 rounded-full font-medium transition-smooth ${
                activeTab === 'predefined' 
                  ? 'bg-white text-black shadow-lg shadow-white/20' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              Predefined Teams
            </button>
            <button
              onClick={() => setActiveTab('custom')}
              className={`px-8 py-3 rounded-full font-medium transition-smooth ${
                activeTab === 'custom' 
                  ? 'bg-white text-black shadow-lg shadow-white/20' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              Custom Builder
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === 'predefined' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {predefinedTeams.map((team) => (
                <GlassCard key={team.id} className="flex flex-col h-full group">
                  <div className="mb-6 flex justify-between items-start">
                    <h3 className="text-2xl font-display text-white group-hover:text-accent-cyan transition-smooth">
                      {team.name}
                    </h3>
                  </div>
                  
                  <p className="text-white/60 leading-relaxed mb-6 flex-grow">
                    {team.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <span className="w-2 h-2 rounded-full bg-accent-lime" />
                      {team.members}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {team.skills.map((skill, index) => (
                        <span key={index} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-white/70">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={onPitch}
                    className="w-full py-4 rounded-xl border border-white/10 bg-white/5 text-white font-medium hover:bg-white hover:text-black transition-smooth flex items-center justify-center gap-2"
                  >
                    Pitch Project <ArrowRight className="w-4 h-4" />
                  </button>
                </GlassCard>
              ))}
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              <GlassCard className="text-center py-16 px-8 border-dashed border-white/20 border-2">
                <h3 className="text-3xl font-display text-white mb-4">Build Your Own Pod</h3>
                <p className="text-white/60 mb-8 max-w-xl mx-auto">
                  Need a niche combination? Handpick from our roster of 110+ rigorously vetted engineers, designers, and AI specialists.
                </p>
                <div className="flex justify-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-xl font-body text-white/40">UX</span>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-xl font-body text-white/40">FE</span>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-xl font-body text-white/40">BE</span>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-xl font-body text-accent-cyan/40">+</span>
                  </div>
                </div>
                <button 
                  onClick={onPitch}
                  className="mt-10 px-8 py-3 bg-accent-cyan text-black rounded-full font-medium hover:bg-accent-cyan/90 transition-smooth"
                >
                  Open Configurator
                </button>
              </GlassCard>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
