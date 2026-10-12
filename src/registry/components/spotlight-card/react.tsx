import React from "react";

export function SpotlightCard({ title = "Next Gen Analytics", description = "Interactive cursor-following glow effect." }: { title?: string; description?: string }) {
  return (
    <div className="relative w-full max-w-sm rounded-2xl border border-border bg-card p-6 shadow-sm overflow-hidden group">
      <div className="relative z-10 space-y-2">
        <h3 className="font-bold text-base text-foreground">{title}</h3>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
