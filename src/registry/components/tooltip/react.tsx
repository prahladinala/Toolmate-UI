import React from "react";

export function Tooltip({ text = "Tooltip details", children }: { text?: string; children?: React.ReactNode }) {
  return (
    <div className="relative inline-block group">
      {children || <button className="px-4 py-2 text-xs rounded-lg border border-border">Hover Me</button>}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center z-50">
        <div className="px-2.5 py-1 text-[11px] font-medium text-white bg-zinc-900 rounded-lg shadow-md whitespace-nowrap">
          {text}
        </div>
      </div>
    </div>
  );
}
