"use client";

import React, { useState } from "react";

const defaultBadges = [
  { icon: "⚡", label: "Ultra Responsive" },
  { icon: "🎨", label: "Tailwind CSS v4" },
  { icon: "💎", label: "Production Ready" },
  { icon: "🛡️", label: "Enterprise Security" },
  { icon: "🚀", label: "Sub-second Builds" },
  { icon: "🌐", label: "WCAG 2.2 AA Compliant" },
];

export interface MarqueeProps {
  speed?: number; // seconds
  pauseOnHover?: boolean;
}

export default function Marquee({
  speed = 25,
  pauseOnHover = true,
}: MarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isReversed, setIsReversed] = useState(false);

  return (
    <div className="w-full max-w-xl space-y-4">
      {/* Controls Bar */}
      <div className="flex items-center justify-between text-xs px-2">
        <span className="text-muted-foreground font-medium">Infinite Ribbon Carousel</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            className="px-2.5 py-1 rounded-lg border border-border bg-card hover:bg-muted text-foreground font-medium cursor-pointer"
          >
            {isPaused ? "▶ Resume" : "⏸ Pause"}
          </button>
          <button
            type="button"
            onClick={() => setIsReversed(!isReversed)}
            className="px-2.5 py-1 rounded-lg border border-border bg-card hover:bg-muted text-foreground font-medium cursor-pointer"
          >
            ⇄ Reverse
          </button>
        </div>
      </div>

      {/* Marquee Track with Horizontal Edge Masks */}
      <div
        className="relative w-full overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div
          className="flex w-max gap-4"
          style={{
            animation: `marquee ${speed}s linear infinite ${isReversed ? "reverse" : "normal"}`,
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {defaultBadges.concat(defaultBadges).map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl border border-border bg-card text-foreground font-semibold text-xs shadow-2xs hover:border-primary/50 transition-colors shrink-0"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
