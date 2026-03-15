"use client";

import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";

interface ScrambleHoverProps {
  children: string;
  className?: string;
}

export function ScrambleHover({ children, className }: ScrambleHoverProps) {
  const [displayText, setDisplayText] = useState(children);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scramble = useCallback(() => {
    const original = children;
    let resolved = 0;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    const totalIterations = original.length;
    const iterationTime = 400 / totalIterations;

    intervalRef.current = setInterval(() => {
      resolved++;
      const next = original
        .split("")
        .map((char, i) => {
          if (i < resolved) return char;
          if (char === " ") return " ";
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplayText(next);

      if (resolved >= totalIterations) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(original);
      }
    }, iterationTime);
  }, [children]);

  return (
    <span
      className={cn("inline-block", className)}
      onMouseEnter={scramble}
    >
      {displayText}
    </span>
  );
}
