'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { GlassCard } from '@/components/ui/GlassCard'
import { Inbox, CheckCircle2, XCircle, Calendar, FileText, ChevronRight, X } from 'lucide-react'

// --- MOCK DATA ---
type Pitch = {
  id: string
  projectName: string
  founderType: string
  submittedAt: string
  feasibility: 'High Feasibility' | 'Moderate' | 'Resource Constrained'
  details: string
}

const mockPitches: Pitch[] = [
  { id: 'p1', projectName: 'Acme SaaS Redesign', founderType: 'Startup', submittedAt: '10 mins ago', feasibility: 'High Feasibility', details: 'Full redesign of our web app using Next.js to improve LCP and retention.' },
  { id: 'p2', projectName: 'Vektor AI Plugin', founderType: 'Solo', submittedAt: '1 hour ago', feasibility: 'Moderate', details: 'Need a vector database integrated into my existing Django app.' },
  { id: 'p3', projectName: 'Global Comm Store', founderType: 'Agency', submittedAt: '3 hours ago', feasibility: 'Resource Constrained', details: 'Building an entirely new Shopify competitor from scratch. Highly complex routing.' },
]

// --- MAIN COMPONENT ---
export function AdminDashboard() {
  const [selectedPitch, setSelectedPitch] = useState<Pitch | null>(null)
  const [modalState, setModalState] = useState<'decision' | 'schedule' | 'decline' | 'proposal' | null>(null)

  const openDecision = (pitch: Pitch) => {
    setSelectedPitch(pitch)
    setModalState('decision')
  }

  const closeAll = () => {
    setSelectedPitch(null)
    setModalState(null)
  }

  return (
    <div className="relative">
      {/* Inbox View */}
      <GlassCard className="p-8">
        <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
          <Inbox className="w-5 h-5 text-accent-cyan" />
          <h2 className="text-2xl font-display text-white">Incoming Pitches</h2>
          <span className="ml-2 px-2.5 py-0.5 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-medium">
            {mockPitches.length} New
          </span>
        </div>

        <div className="space-y-4">
          {mockPitches.map((pitch) => (
            <div 
              key={pitch.id}
              onClick={() => openDecision(pitch)}
              className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer transition-smooth group gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-medium text-white group-hover:text-accent-cyan transition-smooth">{pitch.projectName}</h3>
                  <span className="px-2 py-0.5 rounded border border-white/20 text-[10px] text-white/60 uppercase tracking-wider">{pitch.founderType}</span>
                </div>
                <p className="text-sm text-white/50 truncate max-w-lg">{pitch.details}</p>
              </div>

              <div className="flex items-center gap-6">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  pitch.feasibility === 'High Feasibility' ? 'bg-accent-lime/10 text-accent-lime border border-accent-lime/20' :
                  pitch.feasibility === 'Moderate' ? 'bg-accent-amber/10 text-accent-amber border border-accent-amber/20' :
                  'bg-accent-red-dark/30 text-accent-red border border-accent-red/20'
                }`}>
                  {pitch.feasibility}
                </span>
                <span className="text-xs text-white/40 hidden md:block">{pitch.submittedAt}</span>
                <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white/80" />
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Admin Modals */}
      <AnimatePresence>
        {selectedPitch && modalState && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={closeAll} />
            
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 10 }} className="relative w-full max-w-3xl z-10">
              <GlassCard className="p-8 md:p-12 overflow-hidden shadow-2xl">
                <button onClick={closeAll} className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-smooth text-white/60 hover:text-white">
                  <X className="w-5 h-5" />
                </button>

                {/* 1. Decision Gate */}
                {modalState === 'decision' && (
                  <div>
                    <h3 className="text-3xl font-display text-white mb-2">{selectedPitch.projectName}</h3>
                    <p className="text-white/60 mb-8 border-b border-white/10 pb-8">{selectedPitch.details}</p>
                    
                    <h4 className="text-sm font-medium text-white/80 uppercase tracking-widest mb-4">CEO Decision Protocol</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button onClick={() => setModalState('schedule')} className="flex flex-col items-center justify-center p-8 rounded-xl bg-accent-lime/5 border border-accent-lime/20 hover:bg-accent-lime/10 transition-smooth group">
                        <CheckCircle2 className="w-10 h-10 text-accent-lime mb-3 group-hover:scale-110 transition-transform" />
                        <span className="font-medium text-white">Accept Pitch</span>
                        <span className="text-xs text-white/50 mt-1">Trigger Scheduling Flow</span>
                      </button>
                      <button onClick={() => setModalState('decline')} className="flex flex-col items-center justify-center p-8 rounded-xl bg-accent-red-dark/10 border border-accent-red/20 hover:bg-accent-red-dark/30 transition-smooth group">
                        <XCircle className="w-10 h-10 text-accent-red mb-3 group-hover:scale-110 transition-transform" />
                        <span className="font-medium text-white">Decline Pitch</span>
                        <span className="text-xs text-white/50 mt-1">Draft Feedback Note</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* 2. Schedule Call (Calendly Style) */}
                {modalState === 'schedule' && (
                  <div>
                    <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                      <Calendar className="w-5 h-5 text-accent-cyan" />
                      <h3 className="text-2xl font-display text-white">Schedule Kickoff Call</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Fake Calendar Left */}
                      <div className="border-r border-white/10 pr-8">
                        <div className="flex justify-between items-center mb-6">
                          <button className="text-white/60 hover:text-white">&lt;</button>
                          <span className="font-medium text-white">October 2026</span>
                          <button className="text-white/60 hover:text-white">&gt;</button>
                        </div>
                        <div className="grid grid-cols-7 gap-2 text-center text-sm mb-2 text-white/40">
                          <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                        </div>
                        <div className="grid grid-cols-7 gap-2 text-center text-sm">
                          {Array.from({ length: 31 }).map((_, i) => (
                            <button key={i} className={`p-2 rounded-full ${i === 15 ? 'bg-accent-cyan text-black' : 'hover:bg-white/10 text-white'}`}>
                              {i + 1}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {/* Times Right */}
                      <div>
                        <span className="block text-sm font-medium text-white/80 mb-4">Available Times (GMT)</span>
                        <div className="space-y-3">
                          {['09:00', '11:30', '14:00', '16:00'].map(time => (
                            <button onClick={() => setModalState('proposal')} key={time} className="w-full py-3 rounded-lg border border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan hover:text-black transition-smooth font-medium">
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Decline Flow */}
                {modalState === 'decline' && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <XCircle className="w-5 h-5 text-accent-red" />
                      <h3 className="text-2xl font-display text-white">Decline & Feedback</h3>
                    </div>
                    <p className="text-white/60 mb-6">Send a personalized note to the founder explaining the rejection reason.</p>
                    <textarea 
                      className="w-full h-40 bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-accent-red/50 transition-smooth resize-none mb-6"
                      defaultValue={`Hi there,\n\nThanks for submitting ${selectedPitch.projectName}. After reviewing...`}
                    />
                    <div className="flex gap-4">
                      <button onClick={() => setModalState('decision')} className="px-6 py-3 rounded-xl border border-white/10 text-white/60 hover:text-white hover:bg-white/5">Back</button>
                      <button onClick={closeAll} className="flex-1 py-3 bg-white text-black rounded-xl font-medium hover:bg-white/90">Send Decline Email</button>
                    </div>
                  </div>
                )}

                {/* 4. Proposal Generator */}
                {modalState === 'proposal' && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <FileText className="w-5 h-5 text-accent-lime" />
                      <h3 className="text-2xl font-display text-white">Proposal Generator</h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-4">
                        <label className="text-sm font-medium text-white/80">Scope Lock (Inclusions)</label>
                        <div className="space-y-2">
                          <input type="text" defaultValue="Next.js Frontend Architecture" className="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-accent-lime/50 outline-none" />
                          <input type="text" defaultValue="Stripe Payment Integration" className="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-accent-lime/50 outline-none" />
                          <button className="text-xs text-accent-lime hover:underline">+ Add inclusion</button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                          <label className="text-sm font-medium text-white/80 block mb-3">Milestone Structure</label>
                          <div className="space-y-2 text-sm text-white/60">
                            <div className="flex justify-between p-2 rounded bg-black/30"><span>Deposit</span><span className="text-white">50%</span></div>
                            <div className="flex justify-between p-2 rounded bg-black/30"><span>Alpha Build</span><span className="text-white">25%</span></div>
                            <div className="flex justify-between p-2 rounded bg-black/30"><span>Handover</span><span className="text-white">25%</span></div>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex flex-col justify-center">
                          <label className="text-sm font-medium text-white/80 block mb-2">Total Base Price</label>
                          <div className="relative">
                            <span className="absolute left-3 top-[10px] text-white/40">$</span>
                            <input type="text" defaultValue="2,500" className="w-full bg-black/30 border border-white/10 rounded-lg pl-8 pr-3 py-2 text-2xl font-display text-white focus:border-accent-lime/50 outline-none" />
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4">
                        <button onClick={() => setModalState('schedule')} className="px-6 py-3 rounded-xl border border-white/10 text-white/60 hover:text-white hover:bg-white/5">Back</button>
                        <button onClick={closeAll} className="flex-1 py-3 bg-accent-lime text-black rounded-xl font-medium hover:bg-accent-lime/90 flex items-center justify-center gap-2">
                          <CheckCircle2 className="w-4 h-4" /> Generate & Send Proposal
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </GlassCard>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
