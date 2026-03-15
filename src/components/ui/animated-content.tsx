"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedContentProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  blur?: boolean;
  duration?: number;
  className?: string;
}

const directionOffsets = {
  up: { x: 0, y: 30 },
  down: { x: 0, y: -30 },
  left: { x: 30, y: 0 },
  right: { x: -30, y: 0 },
};

export function AnimatedContent({
  children,
  direction = "up",
  delay = 0,
  blur = true,
  duration = 600,
  className,
}: AnimatedContentProps) {
  const offset = directionOffsets[direction];
  const durationSec = duration / 1000;
  const delaySec = delay / 1000;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
        filter: blur ? "blur(4px)" : "blur(0px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: durationSec,
        delay: delaySec,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
