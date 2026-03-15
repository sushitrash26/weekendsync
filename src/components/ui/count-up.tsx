"use client";

import { useEffect, useRef } from "react";
import {
  useMotionValue,
  useTransform,
  animate,
  useInView,
  motion,
} from "motion/react";
import { cn } from "@/lib/utils";

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function CountUp({
  from = 0,
  to,
  duration = 2,
  prefix = "",
  suffix = "",
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(from);

  const display = useTransform(motionValue, (current) => {
    const rounded = Math.round(current);
    const formatted = rounded >= 1000 || rounded <= -1000
      ? rounded.toLocaleString()
      : String(rounded);
    return `${prefix}${formatted}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, to, {
        duration,
        ease: "easeOut",
      });
    }
  }, [isInView, motionValue, to, duration]);

  return <motion.span ref={ref} className={cn(className)}>{display}</motion.span>;
}
