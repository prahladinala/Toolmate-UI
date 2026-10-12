import React from "react";

export function Marquee({ items = ["React", "Next.js", "Astro", "Tailwind", "TypeScript"] }: { items?: string[] }) {
  return (
    <div className="relative w-full max-w-lg overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      <div className="flex items-center gap-4 w-max">
        {items.concat(items).map((item, idx) => (
          <div key={idx} className="px-4 py-2 rounded-xl border border-border bg-card text-xs font-semibold">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
