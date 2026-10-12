import React from "react";

export function Slider({ value = 50, onChange }: { value?: number; onChange?: (val: number) => void }) {
  return (
    <div className="w-full max-w-sm space-y-2">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => onChange?.(Number(e.target.value))}
        className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
      />
    </div>
  );
}
