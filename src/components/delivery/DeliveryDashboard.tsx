'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { GlassCard } from '@/components/ui/GlassCard'
import { 
  Lock, Unlock, ExternalLink, Github, CheckCircle2, 
  ShieldCheck, CreditCard, Play, MessageSquarePlus, Activity 
} from 'lucide-react'

export function DeliveryDashboard() {
  const [isPMDelivered, setIsPMDelivered] = useState(false)
  const [isPaid, setIsPaid] = useState(false)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  
  // 1. AWAITING DELIVERY STATE
  if (!isPMDelivered) {
    return (
      <div className="max-w-2xl mx-auto text-center mt-20">
        <GlassCard className="p-16 border-dashed border-2 border-white/20">
          <div className="w-20 h-20 mx-auto rounded-full border-4 border-white/10 border-t-accent-cyan animate-spin mb-8" />
          <h2 className="text-3xl font-display text-white mb-4">Sprint execution in progress.</h2>
          <p className="text-white/60 mb-10">Our elite engineering pod is finalizing your MVP architecture. The Project Manager will unlock this dashboard upon completion.</p>
          
          <button 
            onClick={() => setIsPMDelivered(true)}
            className="px-6 py-3 rounded-full border border-white/10 text-white/40 hover:text-white/80 transition-smooth text-sm"
          >
            [Demo: Simulate PM Handoff]
          </button>
        </GlassCard>
      </div>
    )
  }

  // 2. DELIVERED STATE
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
      <div className="lg:col-span-2 space-y-8">
        
        {/* Loom Embed Player Container */}
        <GlassCard className="p-0 overflow-hidden relative group">
          <div className="aspect-video bg-black/60 relative flex items-center justify-center border-b border-white/10">
            {/* Fake Loom Video Thumbnail */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-transparent" />
            <div className="w-20 h-20 rounded-full bg-accent-cyan/20 flex items-center justify-center backdrop-blur-md border border-accent-cyan/50 group-hover:scale-110 transition-transform cursor-pointer shadow-[0_0_30px_rgba(0,255,224,0.3)]">
              <Play className="w-8 h-8 text-white ml-2" />
            </div>
            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur px-4 py-2 rounded-lg border border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-mono text-white/80">Walkthrough_Recording.mp4</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-display text-white mb-2">Sprint Architecture Walkthrough</h3>
            <p className="text-white/60">Your dedicated PM explains the frontend routing logic, the database schema, and how to operate your new administrative backoffice.</p>
          </div>
        </GlassCard>

        {/* Action Links & Payment Gate */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard className="p-8 hover:bg-white/10 transition-smooth group cursor-pointer border-accent-lime/20 shadow-[0_0_20px_rgba(168,255,62,0.05)]">
            <ExternalLink className="w-8 h-8 text-accent-lime mb-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            <h4 className="text-xl font-medium text-white mb-2">Launch Live Staging</h4>
            <p className="text-sm text-white/50">Access the fully functioning MVP on your isolated staging domain.</p>
          </GlassCard>

          <GlassCard 
            className={`p-8 transition-smooth relative overflow-hidden ${isPaid ? 'hover:bg-white/10 cursor-pointer border-accent-cyan/20' : 'opacity-80'}`}
            onClick={() => !isPaid && setShowPaymentModal(true)}
          >
            {!isPaid && (
              <div className="absolute -right-12 top-6 bg-accent-red-dark text-white text-[10px] font-bold py-1 px-12 rotate-45 z-10 uppercase tracking-widest shadow-lg shadow-red-900/50">
                Payment Locked
              </div>
            )}
            
            <div className="mb-6 flex items-center justify-between">
              <Github className={`w-8 h-8 ${isPaid ? 'text-accent-cyan' : 'text-white/40'}`} />
              {isPaid ? <Unlock className="w-5 h-5 text-accent-cyan" /> : <Lock className="w-5 h-5 text-accent-red" />}
            </div>
            
            <h4 className={`text-xl font-medium mb-2 ${isPaid ? 'text-white' : 'text-white/60'}`}>Codebase & GitHub Repo</h4>
            <p className="text-sm text-white/50">
              {isPaid ? 'Your codebase has been cleanly transferred to your organizational GitHub account.' : 'Complete the final 25% milestone invoice to transfer repository ownership.'}
            </p>
          </GlassCard>
        </div>
      </div>

      {/* Right Column: Post Sprint Logic */}
      <div className="space-y-8">
        {/* Support Widget */}
        <GlassCard className="p-6 border-white/20 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-lime/20 blur-[50px] rounded-full" />
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <ShieldCheck className="w-6 h-6 text-accent-lime" />
            <h4 className="font-display text-xl text-white">Post-Sprint Guard</h4>
          </div>
          
          <div className="bg-black/40 rounded-xl p-4 mb-4 border border-white/5">
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-xs text-white/60 uppercase tracking-wide">Status</span>
              <span className="text-xs text-accent-lime font-medium px-2 py-0.5 rounded bg-accent-lime/10">ACTIVE</span>
            </div>
            <div className="text-3xl font-display text-white mb-1">30 <span className="text-sm text-white/40">Days</span></div>
            <p className="text-xs text-white/40">Remaining bug-fix & security warranty.</p>
          </div>
        </GlassCard>

        {/* Completion Control */}
        <GlassCard className="p-6">
          <h4 className="font-display text-lg text-white mb-4">Acknowledge Receipt</h4>
          <p className="text-sm text-white/60 mb-6">By completing the sprint, you confirm all requirements mapped in the proposal have been successfully delivered.</p>
          <button 
            disabled={!isPaid || isComplete}
            onClick={() => setIsComplete(true)}
            className={`w-full py-4 rounded-xl font-medium transition-smooth flex items-center justify-center gap-2 ${
              !isPaid 
                ? 'bg-white/5 text-white/30 border border-white/10 cursor-not-allowed' 
                : isComplete 
                  ? 'bg-accent-lime/20 text-accent-lime border border-accent-lime/30'
                  : 'bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.2)]'
            }`}
          >
            <CheckCircle2 className="w-5 h-5" />
            {isComplete ? 'Sprint Completed' : 'Sign Off & Complete Sprint'}
          </button>
        </GlassCard>
      </div>

      {/* Payment Modal (Mock) */}
      <AnimatePresence>
        {showPaymentModal && !isPaid && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowPaymentModal(false)} className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative z-10 w-full max-w-md">
              <GlassCard className="p-8">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-display text-white mb-2">Final Milestone Payment</h3>
                <p className="text-white/60 mb-6">Authenticate the final 25% payment hold to automatically transfer repository ownership.</p>
                
                <div className="p-4 rounded-lg bg-black/40 border border-white/10 mb-8 flex justify-between items-center">
                  <span className="text-white/80 font-medium">Remaining Balance</span>
                  <span className="text-2xl font-mono text-white">$625.00</span>
                </div>

                <div className="flex gap-4">
                  <button onClick={() => setShowPaymentModal(false)} className="px-6 py-3 rounded-xl border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-smooth">Cancel</button>
                  <button onClick={() => { setIsPaid(true); setShowPaymentModal(false); }} className="flex-1 py-3 bg-accent-lime text-black rounded-xl font-medium shadow-[0_0_15px_rgba(168,255,62,0.3)] hover:bg-accent-lime/90 transition-smooth">
                    Process Transaction
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        )}

        {/* Retainer/Referral Up-sell Modal (Triggers on Complete) */}
        {isComplete && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 30 }} animate={{ scale: 1, opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="relative z-10 w-full max-w-2xl">
              <GlassCard className="p-10 border-accent-cyan/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/10 blur-[80px] rounded-full" />
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent-cyan/10 rounded-full border border-accent-cyan/20">
                    <CheckCircle2 className="w-8 h-8 text-accent-cyan" />
                  </div>
                  <h3 className="text-3xl font-display text-white">Sprint Deployed. What's Next?</h3>
                </div>
                
                <p className="text-white/60 mb-8 max-w-xl text-lg">
                  You now own the repository. As your userbase scales, you can handle maintenance yourself, or lock us in for continuous iterative cycles.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-smooth cursor-pointer group">
                    <Activity className="w-8 h-8 text-white mb-4 group-hover:text-accent-cyan transition-smooth" />
                    <h4 className="text-xl font-medium text-white mb-2">Monthly Retainer</h4>
                    <p className="text-sm text-white/50 mb-6">Hire the exact same pod that built your MVP for scaled monthly feature deployment.</p>
                    <button className="w-full py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-smooth">View Packages</button>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-smooth cursor-pointer group">
                    <MessageSquarePlus className="w-8 h-8 text-white mb-4 group-hover:text-accent-lime transition-smooth" />
                    <h4 className="text-xl font-medium text-white mb-2">Leave a Review</h4>
                    <p className="text-sm text-white/50 mb-6">Drop a review on our delivery process and receive 10hrs of free maintenance credits.</p>
                    <button className="w-full py-3 rounded-lg bg-white/10 text-white font-medium group-hover:bg-accent-lime group-hover:text-black border border-white/10 group-hover:border-accent-lime transition-smooth">Rate Our Sprint</button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
