"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  children: string;
  animateBy?: "chars" | "words";
  delay?: number;
  className?: string;
}

export function SplitText({
  children,
  animateBy = "chars",
  delay = 20,
  className,
}: SplitTextProps) {
  const delaySeconds = delay / 1000;
  const words = children.split(" ");

  if (animateBy === "words") {
    return (
      <span className={cn("inline-flex flex-wrap", className)}>
        {words.map((word, wi) => (
          <span key={`${word}-${wi}`} style={{ display: "inline-block", whiteSpace: "pre" }}>
            <motion.span
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: wi * delaySeconds,
                ease: "easeOut",
              }}
              style={{ display: "inline-block" }}
            >
              {word}
            </motion.span>
            {wi < words.length - 1 ? "\u00A0" : ""}
          </span>
        ))}
      </span>
    );
  }

  let charIndex = 0;

  return (
    <span className={cn("inline-flex flex-wrap", className)}>
      {words.map((word, wi) => (
        <span key={`${word}-${wi}`} style={{ display: "inline-block", whiteSpace: "pre" }}>
          {word.split("").map((char) => {
            const ci = charIndex++;
            return (
              <motion.span
                key={`${char}-${ci}`}
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: ci * delaySeconds,
                  ease: "easeOut",
                }}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            );
          })}
          {wi < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
}
