'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { GlassCard } from '@/components/ui/GlassCard'
import { 
  FileText, CreditCard, CheckCircle2, MessageCircle, 
  Rocket, Server, FlaskConical, Wrench, ShieldCheck, ArrowRight
} from 'lucide-react'

type PortalState = 'proposal' | 'onboarding' | 'active_sprint'

export function ClientPortal() {
  const [portalState, setPortalState] = useState<PortalState>('proposal')
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePayment = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setPortalState('onboarding')
    }, 1500)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        
        {/* 1. PROPOSAL & DEPOSIT (n-proposal / n-pay-deposit) */}
        {portalState === 'proposal' && (
          <motion.div key="proposal" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <GlassCard className="p-8 md:p-12 border-accent-cyan/20">
              <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-6">
                <FileText className="w-6 h-6 text-accent-cyan" />
                <h2 className="text-3xl font-display text-white">Sprint Proposal</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-white/60 uppercase tracking-widest mb-3">Locked Scope Inclusions</h3>
                    <ul className="space-y-3">
                      {['Next.js Frontend Architecture', 'Stripe Payment Integration', 'PostgreSQL DB Schema', 'User Auth (Clerk)'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/90">
                          <CheckCircle2 className="w-4 h-4 text-accent-lime" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white/60 uppercase tracking-widest mb-3">Sprint Rules</h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      Scope is strictly locked for 7 days. Feature creep is barred until post-sprint delivery. Communication restricted to asynchronous Slack updates to ensure hyper-focus.
                    </p>
                  </div>
                </div>

                <div className="bg-black/40 rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="block text-sm font-medium text-white/60 mb-4">Milestone Structure</span>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between text-white/90"><span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" /> 50% Deposit (Due Now)</span> <span>$1,250</span></div>
                      <div className="flex justify-between text-white/50"><span>25% Alpha Build</span> <span>$625</span></div>
                      <div className="flex justify-between text-white/50"><span>25% Final Handoff</span> <span>$625</span></div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex justify-between items-baseline mb-6">
                      <span className="text-white/80 font-medium">Total Base Price</span>
                      <span className="text-3xl font-display text-white">$2,500</span>
                    </div>

                    <button 
                      onClick={handlePayment}
                      disabled={isProcessing}
                      className="w-full py-4 bg-accent-lime text-black rounded-xl font-medium hover:bg-accent-lime/90 transition-smooth flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(168,255,62,0.2)]"
                    >
                      {isProcessing ? (
                        <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                      ) : (
                        <><CreditCard className="w-5 h-5" /> Accept Proposal & Pay Deposit</>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        )}

        {/* 2. ONBOARDING (n-onboarding) */}
        {portalState === 'onboarding' && (
          <motion.div key="onboarding" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
            <GlassCard className="p-12 text-center border-accent-lime/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-lime/10 blur-[80px] rounded-full pointer-events-none" />
              <div className="w-20 h-20 mx-auto bg-accent-lime/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-accent-lime" />
              </div>
              <h2 className="text-4xl font-display text-white mb-4">Deposit Secured.</h2>
              <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto">
                Your 7-Day Sprint is officially authorized. Before the clock starts, we need to wire you into our comms network.
              </p>
              
              <div className="max-w-md mx-auto p-6 rounded-2xl bg-white/5 border border-white/10 mb-8">
                <MessageCircle className="w-8 h-8 text-accent-cyan mx-auto mb-4" />
                <h3 className="text-white font-medium mb-2">Join Your Dedicated Slack Connect</h3>
                <p className="text-sm text-white/50 mb-6">This is where your PM will drop daily Loom updates and flag any blockers.</p>
                <button className="w-full py-3 bg-[#4A154B] text-white rounded-lg font-medium hover:bg-[#3E113F] transition-smooth border border-white/10">
                  Connect to Slack
                </button>
              </div>

              <button 
                onClick={() => setPortalState('active_sprint')}
                className="text-white/60 hover:text-white transition-smooth flex items-center gap-2 mx-auto"
              >
                Skip & View Sprint Tracker <ArrowRight className="w-4 h-4" />
              </button>
            </GlassCard>
          </motion.div>
        )}

        {/* 3. SPRINT PORTAL TRACKER (n-sprint-portal) */}
        {portalState === 'active_sprint' && (
          <motion.div key="sprint" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-between mb-8 pr-4">
              <div>
                <h2 className="text-3xl font-display text-white flex items-center gap-3">
                  <Rocket className="w-6 h-6 text-accent-cyan" />
                  Active Sprint
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
                  <span className="text-sm font-medium text-accent-lime">Live Execution</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-display text-white tracking-tight">Day 3 <span className="text-lg text-white/40">/ 7</span></div>
                <div className="text-sm text-white/40">Sprint concludes in 96 hours</div>
              </div>
            </div>

            <GlassCard className="p-8 relative">
              <div className="absolute left-[45px] top-12 bottom-12 w-0.5 bg-white/10 z-0 hidden md:block" />
              
              <div className="space-y-10 relative z-10">
                {/* Day 1 */}
                <div className="flex flex-col md:flex-row gap-6 opacity-50">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent-cyan/20 border border-accent-cyan text-accent-cyan shrink-0">
                    <Server className="w-6 h-6" />
                  </div>
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-medium text-white">Day 1: Genesis & Staging</h4>
                      <CheckCircle2 className="w-5 h-5 text-accent-cyan" />
                    </div>
                    <p className="text-sm text-white/60">Repository generation, environment variables mapped, Vercel staging pipelines connected, and database orchestrated.</p>
                  </div>
                </div>

                {/* Day 3 (Active) */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent-lime/20 border-2 border-accent-lime text-accent-lime shrink-0 shadow-[0_0_20px_rgba(168,255,62,0.3)]">
                    <FlaskConical className="w-6 h-6" />
                  </div>
                  <div className="flex-1 bg-gradient-to-r from-accent-lime/5 to-transparent border border-accent-lime/20 rounded-2xl p-6 relative overflow-hidden">
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-accent-lime" />
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-medium text-white">Day 3: Alpha Build</h4>
                      <span className="text-xs font-medium text-accent-lime bg-accent-lime/10 px-2 py-1 rounded">IN PROGRESS</span>
                    </div>
                    <p className="text-sm text-white/60 mb-4">Core business logic mapped. Authentication flows active. Primary UI components drafted and injected into the staging envelope.</p>
                    
                    {/* Simulated PM Update */}
                    <div className="p-3 bg-black/40 rounded-lg border border-white/10 flex items-start gap-3">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="w-8 h-8 rounded-full bg-white/10" alt="PM" />
                      <div>
                        <span className="block text-xs font-medium text-white/80 mb-1">PM Update • 2 hours ago</span>
                        <p className="text-xs text-white/60">"Alpha routing is stable. We hit a slight blocker with the Stripe webhook, but resolved it by shifting to serverless functions. Dropping a Loom in Slack shortly."</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Day 5 */}
                <div className="flex flex-col md:flex-row gap-6 opacity-30">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 text-white/40 shrink-0">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h4 className="text-xl font-medium text-white mb-2">Day 5: Adjustments & Polish</h4>
                    <p className="text-sm text-white/60">Pixel-perfecting the UI against Figma constraints. Edge-case bug hunting. Performance optimization and lighthouse audits.</p>
                  </div>
                </div>

                {/* Day 7 */}
                <div className="flex flex-col md:flex-row gap-6 opacity-30">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 text-white/40 shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6">
                    <div className="flex justify-between items-start mb-2">
                       <h4 className="text-xl font-medium text-white">Day 7: Final QA & Delivery</h4>
                       <span className="text-xs text-white/40">Due Date</span>
                    </div>
                    <p className="text-sm text-white/60">Final security pass. Production build deployed. The repository is packaged and prepared for the final handoff sequence.</p>
                  </div>
                </div>

              </div>
              
              <div className="mt-12 text-center">
                 <button 
                  onClick={() => window.location.href = '/delivery'}
                  className="px-6 py-3 border border-white/10 rounded-full text-white/40 hover:text-white hover:bg-white/5 transition-smooth text-sm mx-auto"
                 >
                   [Demo: Jump to '/delivery' Finish Line]
                 </button>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
