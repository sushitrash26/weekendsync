"use client";

import { cn } from "@/lib/utils";

interface BorderBeamProps {
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  className?: string;
}

export function BorderBeam({
  size = 200,
  duration = 5,
  borderWidth = 1.5,
  colorFrom = "#00FFE0",
  colorTo = "#A8FF3E",
  className,
}: BorderBeamProps) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @property --border-beam-angle {
              syntax: "<angle>";
              initial-value: 0deg;
              inherits: false;
            }
            @keyframes border-beam-spin {
              from { --border-beam-angle: 0deg; }
              to { --border-beam-angle: 360deg; }
            }
          `,
        }}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden",
          className
        )}
        style={
          {
            "--border-beam-size": `${size}px`,
            "--border-beam-duration": `${duration}s`,
            "--border-beam-width": `${borderWidth}px`,
            "--border-beam-color-from": colorFrom,
            "--border-beam-color-to": colorTo,
          } as React.CSSProperties
        }
      >
        <div
          className="absolute inset-0"
          style={{
            borderRadius: "inherit",
            padding: "var(--border-beam-width)",
            background: `conic-gradient(from var(--border-beam-angle), transparent 0%, transparent 75%, ${colorFrom} 85%, ${colorTo} 92%, transparent 100%)`,
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            animation: `border-beam-spin var(--border-beam-duration) linear infinite`,
          }}
        />
      </div>
    </>
  );
}
