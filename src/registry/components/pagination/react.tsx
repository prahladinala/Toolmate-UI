import React from "react";

export function Pagination({ currentPage = 1, totalPages = 10, onPageChange }: { currentPage?: number; totalPages?: number; onPageChange?: (p: number) => void }) {
  return (
    <nav aria-label="Pagination" className="flex items-center space-x-1">
      <button onClick={() => onPageChange?.(currentPage - 1)} disabled={currentPage <= 1} className="px-2.5 py-1.5 text-xs rounded-lg border">Prev</button>
      <span className="text-xs px-2">{currentPage} of {totalPages}</span>
      <button onClick={() => onPageChange?.(currentPage + 1)} disabled={currentPage >= totalPages} className="px-2.5 py-1.5 text-xs rounded-lg border">Next</button>
    </nav>
  );
}
