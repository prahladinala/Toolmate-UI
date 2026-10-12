"use client";

import React, { useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  showClearButton?: boolean;
}

export default function Input({
  label = "Work Email",
  helperText = "We'll never share your email with third parties.",
  error,
  showClearButton = true,
  className = "",
  ...props
}: InputProps) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="w-full max-w-sm space-y-1.5">
      {label && (
        <label className="text-xs font-semibold text-foreground flex items-center justify-between">
          <span>{label}</span>
          {value && <span className="text-[10px] text-muted-foreground font-mono">{value.length} chars</span>}
        </label>
      )}
      <div className="relative">
        <input
          {...props}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full px-3.5 py-2.5 text-xs rounded-xl border bg-background text-foreground transition-all focus:outline-hidden ${
            isFocused
              ? "border-primary ring-2 ring-primary/20"
              : "border-input hover:border-border"
          } ${error ? "border-destructive ring-destructive/20" : ""} ${className}`}
          placeholder="name@company.com"
        />
        {showClearButton && value && (
          <button
            type="button"
            onClick={() => setValue("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-xs p-0.5 rounded cursor-pointer"
            aria-label="Clear input"
          >
            ✕
          </button>
        )}
      </div>
      {error ? (
        <p className="text-[11px] text-destructive font-medium">{error}</p>
      ) : helperText ? (
        <p className="text-[11px] text-muted-foreground leading-relaxed">{helperText}</p>
      ) : null}
    </div>
  );
}
