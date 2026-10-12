import React from "react";

export function Switch({ checked = false, onChange, label, disabled = false }: { checked?: boolean; onChange?: (checked: boolean) => void; label?: string; disabled?: boolean }) {
  return (
    <label className={`flex items-center space-x-3 cursor-pointer select-none ${disabled ? "opacity-50 pointer-events-none" : ""}`}>
      <div className="relative inline-flex items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          disabled={disabled}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/40 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
      </div>
      {label && <span className="text-sm font-medium text-foreground">{label}</span>}
    </label>
  );
}
