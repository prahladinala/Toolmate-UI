import React from "react";

export function PinInput({ length = 6 }: { length?: number }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          inputMode="numeric"
          pattern="[0-9]*"
          className="w-11 h-13 text-center text-lg font-bold rounded-xl border border-input bg-background text-foreground shadow-2xs focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
      ))}
    </div>
  );
}
