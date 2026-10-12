import React from "react";

export function Combobox({ options = ["Next.js", "Astro", "React", "Vue", "Svelte"] }: { options?: string[] }) {
  return (
    <div className="relative w-full max-w-xs">
      <input
        type="text"
        placeholder="Select framework..."
        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-input bg-background text-foreground shadow-2xs focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
      />
    </div>
  );
}
