"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface BlurTextProps {
  text: string;
  animateBy?: "words" | "chars";
  direction?: "top" | "bottom";
  className?: string;
  delay?: number;
}

export function BlurText({
  text,
  animateBy = "words",
  direction = "bottom",
  className,
  delay = 0,
}: BlurTextProps) {
  const yOffset = direction === "top" ? -20 : 20;

  if (animateBy === "words") {
    const words = text.split(" ");
    return (
      <span className={cn("inline-flex flex-wrap justify-center", className)}>
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            initial={{ opacity: 0, y: yOffset, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: delay + i * 0.04,
              ease: "easeOut",
            }}
            className="inline-block mr-[0.3em]"
          >
            {word}
          </motion.span>
        ))}
      </span>
    );
  }

  /* chars mode — keep characters grouped by word so they don't line-break mid-word */
  const words = text.split(" ");
  let charIndex = 0;

  return (
    <span className={cn("inline-flex flex-wrap justify-center", className)}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-flex mr-[0.3em]">
          {word.split("").map((char) => {
            const ci = charIndex++;
            return (
              <motion.span
                key={ci}
                initial={{ opacity: 0, y: yOffset, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: delay + ci * 0.025,
                  ease: "easeOut",
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </span>
  );
}
