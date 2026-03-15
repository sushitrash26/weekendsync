"use client";

import { cn } from "@/lib/utils";

interface AuroraProps {
  colorStops?: string[];
  blend?: number;
  speed?: number;
  className?: string;
}

export function Aurora({
  colorStops = ["#00FFE0", "#0A0E1A", "#050810"],
  blend = 0.12,
  speed = 0.4,
  className,
}: AuroraProps) {
  const duration = 20 / speed;

  const blobs = [
    { size: "60%", x1: "10%", y1: "10%", x2: "70%", y2: "60%", x3: "30%", y3: "80%", delay: 0 },
    { size: "50%", x1: "60%", y1: "70%", x2: "20%", y2: "30%", x3: "80%", y3: "20%", delay: duration * 0.25 },
    { size: "55%", x1: "40%", y1: "50%", x2: "80%", y2: "80%", x3: "10%", y3: "40%", delay: duration * 0.5 },
    { size: "45%", x1: "70%", y1: "20%", x2: "30%", y2: "60%", x3: "60%", y3: "90%", delay: duration * 0.75 },
  ];

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
    >
      {blobs.map((blob, i) => {
        const color = colorStops[i % colorStops.length];
        const animName = `auroraBlob${i}`;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              width: blob.size,
              height: blob.size,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
              opacity: blend,
              filter: "blur(80px)",
              animation: `${animName} ${duration}s ease-in-out ${blob.delay}s infinite`,
              left: blob.x1,
              top: blob.y1,
            }}
          />
        );
      })}
      <style jsx>{`
        @keyframes auroraBlob0 {
          0%, 100% { left: ${blobs[0].x1}; top: ${blobs[0].y1}; transform: scale(1); }
          33% { left: ${blobs[0].x2}; top: ${blobs[0].y2}; transform: scale(1.2); }
          66% { left: ${blobs[0].x3}; top: ${blobs[0].y3}; transform: scale(0.9); }
        }
        @keyframes auroraBlob1 {
          0%, 100% { left: ${blobs[1].x1}; top: ${blobs[1].y1}; transform: scale(1); }
          33% { left: ${blobs[1].x2}; top: ${blobs[1].y2}; transform: scale(1.1); }
          66% { left: ${blobs[1].x3}; top: ${blobs[1].y3}; transform: scale(1.3); }
        }
        @keyframes auroraBlob2 {
          0%, 100% { left: ${blobs[2].x1}; top: ${blobs[2].y1}; transform: scale(1.1); }
          33% { left: ${blobs[2].x2}; top: ${blobs[2].y2}; transform: scale(0.9); }
          66% { left: ${blobs[2].x3}; top: ${blobs[2].y3}; transform: scale(1.2); }
        }
        @keyframes auroraBlob3 {
          0%, 100% { left: ${blobs[3].x1}; top: ${blobs[3].y1}; transform: scale(1); }
          33% { left: ${blobs[3].x2}; top: ${blobs[3].y2}; transform: scale(1.3); }
          66% { left: ${blobs[3].x3}; top: ${blobs[3].y3}; transform: scale(0.8); }
        }
      `}</style>
    </div>
  );
}
