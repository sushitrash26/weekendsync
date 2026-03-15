"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  colors?: string[];
  className?: string;
}

export function GradientText({
  children,
  colors = ["#00FFE0", "#A8FF3E", "#F0F4FF"],
  className,
}: GradientTextProps) {
  const gradient = `linear-gradient(90deg, ${colors.join(", ")})`;

  return (
    <motion.span
      className={cn("bg-clip-text text-transparent", className)}
      style={{
        backgroundImage: gradient,
        backgroundSize: "200% auto",
      }}
      animate={{ backgroundPosition: ["0% center", "200% center"] }}
      transition={{
        duration: 3,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {children}
    </motion.span>
  );
}
