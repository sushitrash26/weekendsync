"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { Rocket, Target, DollarSign, type LucideIcon } from "lucide-react";
import { BlurText } from "@/components/ui/blur-text";
import { GradientText } from "@/components/ui/gradient-text";
import { MagicCard } from "@/components/ui/magic-card";

const ParticlesBg = dynamic(
  () =>
    import("@/components/ui/particles-bg").then((m) => m.ParticlesBg),
  { ssr: false }
);

const pillars = [
  {
    icon: Rocket,
    accent: "accent-cyan",
    number: "01",
    title: "Speed",
    headline: "7 days. Not 7 months.",
    description:
      "We compress the entire MVP lifecycle into a single focused sprint. No endless roadmaps, no scope creep — just relentless execution from day one to launch.",
  },
  {
    icon: Target,
    accent: "accent-lime",
    number: "02",
    title: "Execution",
    headline: "A full team, not a solo freelancer.",
    description:
      "Design, engineering, QA, and deployment — all coordinated under one roof. You get a dedicated squad that operates like a founding team.",
  },
  {
    icon: DollarSign,
    accent: "accent-amber",
    number: "03",
    title: "Value",
    headline: "$2,500-$8,500. Not $50,000+.",
    description:
      "Enterprise-grade output at a fraction of agency pricing. Fixed cost, no surprises, no hourly billing games.",
  },
] as const;

const pillarVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const;

function PillarContent({
  index,
  activeRaw,
  pillar,
}: {
  index: number;
  activeRaw: MotionValue<number>;
  pillar: (typeof pillars)[number];
}) {
  const borderColor = useTransform(activeRaw, (v: number) =>
    Math.round(v) === index ? "var(--color-accent-cyan)" : "transparent"
  );

  const Icon: LucideIcon = pillar.icon;

  return (
    <motion.div
      variants={pillarVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="flex gap-8 items-start"
    >
      {/* Ghost number */}
      <span className="font-mono text-[8rem] leading-none text-base-700/30 font-bold hidden md:block">
        {pillar.number}
      </span>

      {/* Content */}
      <motion.div
        className="border-l-3 border-transparent pl-6 transition-colors"
        style={{ borderColor }}
      >
        <h3 className="font-display text-3xl md:text-4xl font-bold text-text-primary">
          {pillar.title}
        </h3>
        <p className="text-xl text-text-secondary mt-2">{pillar.headline}</p>
        <p className="text-text-secondary mt-4">{pillar.description}</p>
      </motion.div>
    </motion.div>
  );
}

export default function SolutionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to active pillar index: 0, 1, 2
  const activeRaw = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.6, 0.8],
    [0, 0, 1, 2]
  );

  return (
    <section ref={sectionRef} className="py-32 px-6 relative">
      {/* Particles background */}
      <div className="absolute inset-0 pointer-events-none">
        <ParticlesBg
          particleCount={60}
          particleColors={["#00FFE0", "#A8FF3E"]}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Headline */}
        <BlurText
          text="The WeekendSync Advantage"
          animateBy="words"
          direction="top"
          className="font-display text-4xl md:text-5xl font-bold"
        />

        {/* Three pillars — vertical stack */}
        <div className="space-y-16 mt-16">
          {pillars.map((pillar, i) => (
            <PillarContent
              key={pillar.title}
              index={i}
              activeRaw={activeRaw}
              pillar={pillar}
            />
          ))}
        </div>

        {/* Pull quote */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <MagicCard>
            <div className="p-8 text-center">
              <GradientText colors={["#00FFE0", "#A8FF3E", "#F0F4FF"]}>
                <span className="font-display italic text-xl md:text-2xl">
                  &ldquo;WeekendSync exists for one reason: to collapse the time
                  between idea and execution.&rdquo;
                </span>
              </GradientText>
            </div>
          </MagicCard>
        </motion.div>
      </div>
    </section>
  );
}
