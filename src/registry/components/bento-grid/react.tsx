import React from "react";

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
      <div className="md:col-span-2 rounded-2xl border border-border bg-card p-6 shadow-2xs space-y-2">
        <h4 className="font-bold text-sm text-foreground">Next-Gen Architecture</h4>
        <p className="text-xs text-muted-foreground">High performance modular layout container.</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6 shadow-2xs space-y-2">
        <h4 className="font-bold text-sm text-foreground">Responsive</h4>
        <p className="text-xs text-muted-foreground">Adapts seamlessly to every screen.</p>
      </div>
    </div>
  );
}
