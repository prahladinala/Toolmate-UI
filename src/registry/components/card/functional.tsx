"use client";

import React, { useState } from "react";

interface CardProps {
  title?: string;
  description?: string;
  category?: string;
}

export default function Card({
  title = "Design Token System",
  description = "A unified palette and spacing scale configured with standard CSS variables.",
  category = "Architecture",
}: CardProps) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-6 shadow-xs transition-all hover:border-primary/50 flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-muted border border-border text-muted-foreground">
            {category}
          </span>
          <button
            type="button"
            onClick={() => setIsSaved(!isSaved)}
            className="text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            title={isSaved ? "Saved" : "Save card"}
          >
            {isSaved ? "★ Saved" : "☆ Save"}
          </button>
        </div>
        <h3 className="font-bold text-lg text-foreground">{title}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
      </div>

      <div className="mt-6 pt-4 border-t border-border/50 flex justify-end">
        <button
          type="button"
          className="text-xs font-semibold text-primary hover:underline cursor-pointer"
        >
          Explore Details →
        </button>
      </div>
    </div>
  );
}
