"use client";

import React, { useState } from "react";

export interface BentoItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  span?: string;
  stat?: string;
}

const defaultItems: BentoItem[] = [
  {
    id: "speed",
    title: "Instant Edge Hydration",
    description: "Lightning-fast static HTML delivery with isolated island hydration where strictly necessary.",
    tag: "Performance",
    span: "md:col-span-2",
    stat: "100/100",
  },
  {
    id: "security",
    title: "Type Safety",
    description: "Strict TypeScript interfaces across all components.",
    tag: "Security",
    span: "md:col-span-1",
    stat: "100%",
  },
  {
    id: "design",
    title: "Tailwind CSS v4 Engine",
    description: "Native CSS variables, container queries, and zero-config utility classes.",
    tag: "Styling",
    span: "md:col-span-1",
    stat: "v4.3",
  },
  {
    id: "accessibility",
    title: "WCAG 2.2 AA Compliance",
    description: "Fully tested for screen readers, high contrast mode, and seamless keyboard navigation.",
    tag: "A11y",
    span: "md:col-span-2",
    stat: "AA+",
  },
];

export default function BentoGrid() {
  const [activeId, setActiveId] = useState<string | null>("speed");

  return (
    <div className="w-full max-w-2xl space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {defaultItems.map((item) => {
          const isSelected = activeId === item.id;
          return (
            <div
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`${item.span || "md:col-span-1"} p-5 sm:p-6 rounded-2xl border transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "border-primary bg-primary/5 ring-1 ring-primary/30 shadow-md"
                  : "border-border bg-card hover:border-border/80 hover:bg-muted/40 shadow-2xs"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                  {item.tag}
                </span>
                {item.stat && (
                  <span className="font-mono text-xs font-bold text-primary">
                    {item.stat}
                  </span>
                )}
              </div>

              <h4 className="font-bold text-sm text-foreground mb-1">
                {item.title}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
