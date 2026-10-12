"use client";

import React, { useState } from "react";

export interface TooltipProps {
  content?: string;
  children?: React.ReactNode;
  side?: "top" | "bottom";
}

export default function Tooltip({
  content = "Copy API token to clipboard",
  children,
  side = "top",
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-flex items-center justify-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
      onKeyDown={(e) => {
        if (e.key === "Escape") setIsVisible(false);
      }}
    >
      {children || (
        <button
          type="button"
          aria-describedby="tooltip-content"
          className="px-4 py-2 text-xs font-semibold rounded-xl border border-border bg-card text-foreground shadow-2xs hover:bg-muted transition-colors cursor-pointer"
        >
          Hover or Focus Me
        </button>
      )}

      {isVisible && (
        <div
          id="tooltip-content"
          role="tooltip"
          className={`absolute ${
            side === "top" ? "bottom-full mb-2" : "top-full mt-2"
          } left-1/2 -translate-x-1/2 z-50 flex flex-col items-center pointer-events-none animate-in fade-in zoom-in-95 duration-150`}
        >
          <div className="px-3 py-1.5 text-[11px] font-medium text-zinc-100 bg-zinc-950 dark:bg-zinc-100 dark:text-zinc-950 rounded-lg shadow-xl whitespace-nowrap">
            {content}
          </div>
          <div
            className={`w-2 h-2 bg-zinc-950 dark:bg-zinc-100 rotate-45 ${
              side === "top" ? "-mt-1" : "-mb-1 order-first"
            }`}
          />
        </div>
      )}
    </div>
  );
}
