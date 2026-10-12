"use client";

import React, { useState } from "react";

export interface PaginationProps {
  totalPages?: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
}

export default function Pagination({
  totalPages = 8,
  initialPage = 1,
  onPageChange,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const goTo = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange?.(page);
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Pagination Navigation" className="flex items-center space-x-1.5 p-2 rounded-xl border border-border bg-card shadow-2xs">
      {/* Prev Button */}
      <button
        type="button"
        onClick={() => goTo(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1.5 rounded-lg border border-border text-xs font-medium text-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
        aria-label="Go to previous page"
      >
        ‹ Prev
      </button>

      {/* Number Buttons */}
      <div className="flex items-center space-x-1">
        {pages.map((p) => {
          const isActive = currentPage === p;
          return (
            <button
              key={p}
              type="button"
              onClick={() => goTo(p)}
              aria-current={isActive ? "page" : undefined}
              className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-xs font-bold"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {p}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        type="button"
        onClick={() => goTo(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1.5 rounded-lg border border-border text-xs font-medium text-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
        aria-label="Go to next page"
      >
        Next ›
      </button>
    </nav>
  );
}
