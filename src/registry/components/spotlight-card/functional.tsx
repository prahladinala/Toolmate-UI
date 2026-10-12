"use client";

import React, { useState, useRef } from "react";

export interface SpotlightCardProps {
  title?: string;
  description?: string;
  badge?: string;
  spotlightColor?: string;
}

export default function SpotlightCard({
  title = "Intelligent Autopilot",
  description = "Autonomous task orchestration powered by multi-agent consensus and deterministic validation.",
  badge = "Feature Spotlight",
  spotlightColor = "rgba(99, 102, 241, 0.2)",
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="relative w-full max-w-sm rounded-3xl border border-border bg-card/60 backdrop-blur-md p-6 sm:p-7 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/40 group cursor-pointer"
    >
      {/* Dynamic Cursor Spotlight Radial Overlay */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
        }}
      />

      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-between">
          <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-semibold tracking-wide uppercase">
            {badge}
          </span>
          <span className="text-xs text-muted-foreground font-mono">01</span>
        </div>

        <div className="space-y-1.5">
          <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        <div className="pt-2 flex items-center text-xs font-semibold text-primary gap-1 group-hover:translate-x-1 transition-transform">
          <span>Explore Architecture</span>
          <span>→</span>
        </div>
      </div>
    </div>
  );
}
