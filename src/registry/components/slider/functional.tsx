"use client";

import React, { useState } from "react";

export interface SliderProps {
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  unit?: string;
  onChange?: (val: number) => void;
}

export default function Slider({
  label = "Brightness Level",
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 70,
  unit = "%",
  onChange,
}: SliderProps) {
  const [val, setVal] = useState(defaultValue);

  const percentage = ((val - min) / (max - min)) * 100;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = Number(e.target.value);
    setVal(next);
    onChange?.(next);
  };

  return (
    <div className="w-full max-w-sm space-y-3.5 p-4 rounded-2xl border border-border bg-card shadow-2xs">
      <div className="flex justify-between items-center text-xs font-semibold text-foreground">
        <span>{label}</span>
        <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-mono font-bold text-xs">
          {val}
          {unit}
        </span>
      </div>

      <div className="relative flex items-center">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={val}
          onChange={handleChange}
          style={{
            background: `linear-gradient(to right, var(--color-primary, #6366f1) ${percentage}%, var(--color-muted, #e4e4e7) ${percentage}%)`,
          }}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="flex justify-between text-[11px] text-muted-foreground font-mono">
        <span>
          {min}
          {unit}
        </span>
        <span>
          {max / 2}
          {unit}
        </span>
        <span>
          {max}
          {unit}
        </span>
      </div>
    </div>
  );
}
