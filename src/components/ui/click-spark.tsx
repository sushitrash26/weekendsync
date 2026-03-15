"use client";

import { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface Spark {
  id: number;
  x: number;
  y: number;
  angle: number;
}

interface ClickSparkProps {
  children: React.ReactNode;
  sparkColor?: string;
  sparkCount?: number;
  className?: string;
}

export function ClickSpark({
  children,
  sparkColor = "#00FFE0",
  sparkCount = 8,
  className,
}: ClickSparkProps) {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const idRef = useRef(0);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newSparks: Spark[] = Array.from({ length: sparkCount }, (_, i) => ({
        id: ++idRef.current,
        x,
        y,
        angle: (360 / sparkCount) * i + (Math.random() * 30 - 15),
      }));

      setSparks((prev) => [...prev, ...newSparks]);

      setTimeout(() => {
        setSparks((prev) =>
          prev.filter((s) => !newSparks.some((ns) => ns.id === s.id))
        );
      }, 600);
    },
    [sparkCount]
  );

  return (
    <div className={cn("relative", className)} onClick={handleClick}>
      {children}
      {sparks.map((spark) => {
        const rad = (spark.angle * Math.PI) / 180;
        const distance = 30 + Math.random() * 20;
        const tx = Math.cos(rad) * distance;
        const ty = Math.sin(rad) * distance;

        return (
          <div
            key={spark.id}
            style={{
              position: "absolute",
              left: spark.x,
              top: spark.y,
              width: 3,
              height: 2,
              backgroundColor: sparkColor,
              borderRadius: 1,
              pointerEvents: "none",
              zIndex: 50,
              animation: "clickSparkMove 600ms ease-out forwards",
              ["--spark-tx" as string]: `${tx}px`,
              ["--spark-ty" as string]: `${ty}px`,
            }}
          />
        );
      })}
      <style jsx>{`
        @keyframes clickSparkMove {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--spark-tx), var(--spark-ty)) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
