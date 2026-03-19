'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { GlassCard } from '@/components/ui/GlassCard'
import { X, ArrowRight, User, Briefcase, Building2, Loader2, CheckCircle2 } from 'lucide-react'

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FounderType = 'Solo' | 'Startup' | 'Agency' | null;

export function OnboardingModal({ isOpen, onClose }: OnboardingModalProps) {
  const [step, setStep] = useState(1);
  const [founderType, setFounderType] = useState<FounderType>(null);
  const [timeline, setTimeline] = useState<'ASAP' | 'Flexible' | null>(null);

  // Simulated submission delay
  const handleFinalSubmit = () => {
    setStep(4);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl z-10"
        >
          <GlassCard className="p-8 md:p-12 overflow-hidden border-white/20 shadow-2xl shadow-black/80">
            {/* Close Button if not in final step */}
            {step < 4 && (
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-smooth text-white/60 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            )}

            {/* Step Progress Bar */}
            {step < 4 && (
              <div className="flex gap-2 mb-10">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`h-1 flex-1 rounded-full transition-smooth ${step >= i ? 'bg-accent-cyan' : 'bg-white/10'}`} />
                ))}
              </div>
            )}

            {/* Step 1: Sign Up */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-3xl font-display text-white mb-2">Let's get started.</h2>
                <p className="text-white/60 mb-8">Tell us who you are. We respect your inbox—no spam.</p>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Full Name</label>
                      <input type="text" placeholder="Jane Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent-cyan/50 focus:bg-white/10 transition-smooth" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Work Email</label>
                      <input type="email" placeholder="jane@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent-cyan/50 focus:bg-white/10 transition-smooth" />
                    </div>
                  </div>

                  <div className="space-y-2 mt-4">
                    <label className="text-sm font-medium text-white/80">Founder Type</label>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { id: 'Solo', icon: <User className="w-5 h-5" /> },
                        { id: 'Startup', icon: <Briefcase className="w-5 h-5" /> },
                        { id: 'Agency', icon: <Building2 className="w-5 h-5" /> },
                      ].map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setFounderType(type.id as FounderType)}
                          className={`flex flex-col items-center justify-center gap-3 py-6 px-2 rounded-xl border transition-smooth ${
                            founderType === type.id 
                              ? 'bg-accent-cyan/10 border-accent-cyan text-accent-cyan shadow-[0_0_15px_rgba(0,255,224,0.1)]' 
                              : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          {type.icon}
                          <span className="text-sm font-medium">{type.id}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => setStep(2)}
                    className="w-full mt-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-white/90 transition-smooth flex items-center justify-center gap-2 group"
                  >
                    Continue to Pitch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Pitch Details */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="text-3xl font-display text-white mb-2">The Pitch</h2>
                <p className="text-white/60 mb-8">What are we building in the next 7 days?</p>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Project Name</label>
                    <input type="text" placeholder="e.g. Acme SaaS Redesign" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent-cyan/50 transition-smooth" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Success Criteria (MVP Definition)</label>
                    <textarea 
                      rows={4} 
                      placeholder="What exactly needs to be delivered for this sprint to be a success?" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent-cyan/50 transition-smooth resize-none"
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button 
                      onClick={() => setStep(1)}
                      className="px-6 py-4 rounded-xl border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-smooth"
                    >
                      Back
                    </button>
                    <button 
                      onClick={() => setStep(3)}
                      className="flex-1 py-4 bg-white text-black rounded-xl font-medium hover:bg-white/90 transition-smooth flex items-center justify-center gap-2 group"
                    >
                      Next Step <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Logistics */}
            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="text-3xl font-display text-white mb-2">Logistics</h2>
                <p className="text-white/60 mb-8">Final details to align our teams.</p>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Timeline Sensitivity</label>
                    <div className="grid grid-cols-2 gap-4">
                      {['ASAP', 'Flexible'].map((t) => (
                        <button
                          key={t}
                          onClick={() => setTimeline(t as 'ASAP' | 'Flexible')}
                          className={`py-4 px-4 rounded-xl border transition-smooth text-center font-medium ${
                            timeline === t 
                              ? 'bg-accent-cyan/10 border-accent-cyan text-accent-cyan' 
                              : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Plan Interest</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan/50 appearance-none cursor-pointer">
                      <option value="" disabled selected className="text-black">Select a path...</option>
                      <option value="predefined" className="text-black">Predefined Team (SaaS/Ecom/AI)</option>
                      <option value="custom" className="text-black">Custom Built Pod</option>
                      <option value="undecided" className="text-black">I need advice</option>
                    </select>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button 
                      onClick={() => setStep(2)}
                      className="px-6 py-4 rounded-xl border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-smooth"
                    >
                      Back
                    </button>
                    <button 
                      onClick={handleFinalSubmit}
                      className="flex-1 py-4 bg-accent-lime text-black rounded-xl font-medium hover:bg-accent-lime/90 transition-smooth flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(168,255,62,0.3)]"
                    >
                      Submit Pitch <CheckCircle2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: CEO Reviewing */}
            {step === 4 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="text-center py-12"
              >
                <div className="relative w-24 h-24 mx-auto mb-8">
                  {/* Radar/Spinner animation */}
                  <div className="absolute inset-0 rounded-full border-[3px] border-accent-cyan/20 border-t-accent-cyan animate-spin" style={{ animationDuration: '3s' }} />
                  <div className="absolute inset-2 rounded-full border-[3px] border-white/10 border-l-white animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-white/80 animate-pulse" />
                  </div>
                </div>
                
                <h2 className="text-4xl font-display text-white mb-4">CEO Reviewing...</h2>
                <p className="text-white/60 max-w-sm mx-auto mb-10 text-lg">
                  Your pitch has been securely routed directly to our executive layer. We will evaluate feasibility and timeline matches within 12 hours.
                </p>
                
                <button 
                  onClick={onClose}
                  className="px-8 py-3 rounded-full border border-white/10 text-white/80 hover:text-white hover:bg-white/5 transition-smooth"
                >
                  Return to Site
                </button>
              </motion.div>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
