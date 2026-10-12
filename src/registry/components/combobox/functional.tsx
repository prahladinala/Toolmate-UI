"use client";

import React, { useState, useRef, useEffect } from "react";

export interface ComboboxOption {
  value: string;
  label: string;
  category?: string;
}

const defaultOptions: ComboboxOption[] = [
  { value: "next", label: "Next.js", category: "React Framework" },
  { value: "astro", label: "Astro", category: "Content-Driven" },
  { value: "react", label: "React", category: "UI Library" },
  { value: "vue", label: "Vue.js", category: "Progressive Framework" },
  { value: "svelte", label: "Svelte", category: "Compiler" },
  { value: "tailwind", label: "Tailwind CSS", category: "Styling Engine" },
];

export interface ComboboxProps {
  options?: ComboboxOption[];
  placeholder?: string;
  defaultValue?: string;
  onChange?: (val: string) => void;
}

export default function Combobox({
  options = defaultOptions,
  placeholder = "Select technology...",
  defaultValue = "",
  onChange,
}: ComboboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<ComboboxOption | null>(
    options.find((o) => o.value === defaultValue) || null
  );
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter(
    (opt) =>
      opt.label.toLowerCase().includes(query.toLowerCase()) ||
      opt.category?.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: ComboboxOption) => {
    setSelected(option);
    setQuery("");
    setIsOpen(false);
    onChange?.(option.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) {
      if (e.key === "ArrowDown" || e.key === "Enter") {
        setIsOpen(true);
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev + 1) % filteredOptions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev - 1 + filteredOptions.length) % filteredOptions.length);
    } else if (e.key === "Enter" && filteredOptions[highlightedIndex]) {
      e.preventDefault();
      handleSelect(filteredOptions[highlightedIndex]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-sm">
      <div className="relative">
        <input
          type="text"
          value={isOpen ? query : selected ? selected.label : ""}
          placeholder={selected ? selected.label : placeholder}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
            setHighlightedIndex(0);
          }}
          onKeyDown={handleKeyDown}
          className="w-full px-4 py-2.5 pr-10 text-xs sm:text-sm rounded-xl border border-input bg-background text-foreground shadow-2xs focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground"
        />

        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-muted-foreground">
          {selected && (
            <button
              type="button"
              onClick={() => {
                setSelected(null);
                setQuery("");
                onChange?.("");
              }}
              className="hover:text-foreground p-0.5"
            >
              ✕
            </button>
          )}
          <svg className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 z-50 max-h-60 overflow-y-auto rounded-xl border border-border bg-card p-1 shadow-xl animate-in fade-in zoom-in-95 duration-150">
          {filteredOptions.length === 0 ? (
            <p className="p-3 text-xs text-center text-muted-foreground">No matches found</p>
          ) : (
            filteredOptions.map((opt, idx) => {
              const isHighlighted = idx === highlightedIndex;
              const isChosen = selected?.value === opt.value;
              return (
                <div
                  key={opt.value}
                  onClick={() => handleSelect(opt)}
                  onMouseEnter={() => setHighlightedIndex(idx)}
                  className={`flex items-center justify-between px-3 py-2 text-xs rounded-lg cursor-pointer transition-colors ${
                    isHighlighted ? "bg-muted text-foreground" : "text-muted-foreground"
                  } ${isChosen ? "font-bold text-primary" : ""}`}
                >
                  <div className="flex flex-col">
                    <span>{opt.label}</span>
                    {opt.category && (
                      <span className="text-[10px] text-muted-foreground font-normal">{opt.category}</span>
                    )}
                  </div>
                  {isChosen && <span className="text-primary font-bold">✓</span>}
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
