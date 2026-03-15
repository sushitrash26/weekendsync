"use client";

import { cn } from "@/lib/utils";

interface ShineBorderProps {
  children: React.ReactNode;
  borderWidth?: number;
  color?: string;
  duration?: number;
  className?: string;
}

export function ShineBorder({
  children,
  borderWidth = 1,
  color = "#00FFE0",
  duration = 8,
  className,
}: ShineBorderProps) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @property --shine-border-angle {
              syntax: "<angle>";
              initial-value: 0deg;
              inherits: false;
            }
            @keyframes shine-border-rotate {
              from { --shine-border-angle: 0deg; }
              to { --shine-border-angle: 360deg; }
            }
          `,
        }}
      />
      <div
        className={cn("relative rounded-xl", className)}
        style={
          {
            padding: `${borderWidth}px`,
            background: `linear-gradient(var(--shine-border-angle), transparent 20%, ${color} 50%, transparent 80%)`,
            animation: `shine-border-rotate ${duration}s linear infinite`,
          } as React.CSSProperties
        }
      >
        <div className="h-full w-full rounded-[inherit] bg-base-900">
          {children}
        </div>
      </div>
    </>
  );
}
