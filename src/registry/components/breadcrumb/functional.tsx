"use client";

import React from "react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

const defaultItems: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Design System", href: "/docs" },
  { label: "Navigation", href: "/components" },
  { label: "Breadcrumb" },
];

export interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  separator?: "slash" | "chevron";
}

export default function Breadcrumb({
  items = defaultItems,
  separator = "chevron",
}: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumbs" className="w-full max-w-md p-3.5 rounded-xl border border-border bg-card shadow-2xs">
      <ol className="flex items-center space-x-1.5 sm:space-x-2 text-xs">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center space-x-1.5 sm:space-x-2">
              {idx > 0 && (
                <span className="text-muted-foreground/50 select-none">
                  {separator === "chevron" ? (
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  ) : (
                    "/"
                  )}
                </span>
              )}

              {isLast ? (
                <span
                  aria-current="page"
                  className="font-semibold text-foreground truncate max-w-[140px]"
                >
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href || "#"}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium truncate max-w-[120px]"
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
