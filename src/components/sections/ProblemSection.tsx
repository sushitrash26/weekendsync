"use client";

import { motion } from "motion/react";
import { problemCards } from "@/lib/data";
import { BlurText } from "@/components/ui/blur-text";
import { TiltedCard } from "@/components/ui/tilted-card";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { CountUp } from "@/components/ui/count-up";
import {
  Clock,
  AlertTriangle,
  DollarSign,
  Users,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Clock,
  AlertTriangle,
  DollarSign,
  Users,
  TrendingUp,
  Zap,
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const;

export default function ProblemSection() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto relative overflow-hidden">
      {/* Giant ghost text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display text-[20vw] text-base-800/20 leading-none">
          BROKEN
        </span>
      </div>

      {/* Headline */}
      <BlurText
        text="Building an MVP is broken."
        animateBy="words"
        direction="top"
        className="font-display text-4xl md:text-5xl font-bold text-text-primary"
      />

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 relative z-10">
        {problemCards.map((card, i) => {
          const Icon = iconMap[card.icon];
          return (
            <motion.div
              key={card.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1 }}
            >
              <TiltedCard rotateAmplitude={10} scaleOnHover={1.04}>
                <CardSpotlight>
                  <div
                    className="p-6 border-l-2"
                    style={{ borderColor: card.accentColor }}
                  >
                    {/* Icon top-right */}
                    <div className="relative">
                      {Icon && (
                        <Icon className="absolute top-0 right-0 w-5 h-5 text-text-muted" />
                      )}

                      {/* Stat */}
                      <div
                        className="font-mono text-5xl font-bold"
                        style={{ color: card.accentColor }}
                      >
                        <CountUp from={0} to={card.stat} suffix={card.suffix} />
                      </div>

                      {/* Unit label */}
                      <div className="font-mono text-xs text-text-muted uppercase tracking-wider mt-1">
                        {card.unit}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-lg text-text-primary mt-4">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-text-secondary mt-1">
                      {card.desc}
                    </p>
                  </div>
                </CardSpotlight>
              </TiltedCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
