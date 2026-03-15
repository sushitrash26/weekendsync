"use client";

import { useMemo, useRef, useState, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
}

interface ParticlesBgProps {
  particleCount?: number;
  particleColors?: string[];
  moveParticlesOnHover?: boolean;
  className?: string;
}

export function ParticlesBg({
  particleCount = 60,
  particleColors = ["#00FFE0", "#A8FF3E"],
  moveParticlesOnHover = false,
  className,
}: ParticlesBgProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });

  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2,
      opacity: 0.2 + Math.random() * 0.4,
      color: particleColors[Math.floor(Math.random() * particleColors.length)],
      duration: 10 + Math.random() * 20,
      delay: Math.random() * -30,
      driftX: (Math.random() - 0.5) * 20,
      driftY: (Math.random() - 0.5) * 20,
    }));
  }, [particleCount, particleColors]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!moveParticlesOnHover || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMouse({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    },
    [moveParticlesOnHover]
  );

  const handleMouseLeave = useCallback(() => {
    setMouse({ x: -9999, y: -9999 });
  }, []);

  const getRepulsion = (px: number, py: number) => {
    if (!moveParticlesOnHover || mouse.x === -9999) return { tx: 0, ty: 0 };
    const dx = px - mouse.x;
    const dy = py - mouse.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > 15) return { tx: 0, ty: 0 };
    const force = (15 - dist) / 15;
    const angle = Math.atan2(dy, dx);
    return {
      tx: Math.cos(angle) * force * 8,
      ty: Math.sin(angle) * force * 8,
    };
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        moveParticlesOnHover && "pointer-events-auto",
        className
      )}
    >
      {particles.map((p) => {
        const repulsion = getRepulsion(p.x, p.y);
        const animName = `particleDrift${p.id}`;

        return (
          <div
            key={p.id}
            style={{
              position: "absolute",
              left: `${p.x + repulsion.tx}%`,
              top: `${p.y + repulsion.ty}%`,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              backgroundColor: p.color,
              opacity: p.opacity,
              animation: `${animName} ${p.duration}s ease-in-out ${p.delay}s infinite`,
              transition: moveParticlesOnHover
                ? "left 0.3s ease-out, top 0.3s ease-out"
                : undefined,
            }}
          />
        );
      })}
      <style jsx>{`
        ${particles
          .map(
            (p) => `
          @keyframes particleDrift${p.id} {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(${p.driftX}px, ${p.driftY}px); }
          }
        `
          )
          .join("\n")}
      `}</style>
    </div>
  );
}
