"use client";

import { Marquee } from "@/components/ui/marquee";
import { tickerRow1, tickerRow2 } from "@/lib/data";

export default function TickerSection() {
  return (
    <section className="py-4 border-y border-base-700/40">
      <div className="flex flex-col gap-3">
        {/* Row 1 — normal direction */}
        <Marquee
          className="[mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]"
        >
          {tickerRow1.map((item, idx) => (
            <span
              key={idx}
              className="mx-3 flex items-center gap-3 bg-base-800 border border-base-600 px-4 py-2 rounded-full font-mono text-sm text-text-secondary hover:border-accent-cyan/40 transition-colors"
            >
              <span className="text-accent-cyan">&diams;</span>
              {item}
            </span>
          ))}
        </Marquee>

        {/* Row 2 — reverse, slightly slower */}
        <Marquee
          reverse={true}
          className="[--duration:45s] [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]"
        >
          {tickerRow2.map((item, idx) => (
            <span
              key={idx}
              className="mx-3 flex items-center gap-3 bg-base-800 border border-base-600 px-4 py-2 rounded-full font-mono text-sm text-text-secondary hover:border-accent-cyan/40 transition-colors"
            >
              <span className="text-accent-cyan">&diams;</span>
              {item}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
