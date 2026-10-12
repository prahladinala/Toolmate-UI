import React from "react";

export function Toast({ title = "Saved", description = "Your data has been updated." }: { title?: string; description?: string }) {
  return (
    <div className="flex items-center justify-between w-full max-w-sm p-4 rounded-xl border border-border bg-card text-card-foreground shadow-lg">
      <div className="space-y-0.5">
        <p class="text-xs font-semibold text-foreground">{title}</p>
        <p class="text-[11px] text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
