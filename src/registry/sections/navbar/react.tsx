import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center mx-auto px-4">
        {/* Desktop Nav */}
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2 font-bold" href="#">ToolMate UI</a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a className="transition-colors hover:text-foreground/80 text-foreground" href="#">Docs</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#">Components</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#">Templates</a>
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {/* Mobile Nav Trigger */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground h-9 py-2 px-2 md:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
          
          <a className="md:hidden flex items-center space-x-2 font-bold" href="#">ToolMate UI</a>
          
          <nav className="flex items-center space-x-2">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 px-3">Log in</button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4">Sign up</button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto flex flex-col p-4 space-y-4 text-sm font-medium">
            <a className="transition-colors hover:text-foreground/80 text-foreground" href="#">Docs</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#">Components</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#">Templates</a>
          </nav>
        </div>
      )}
    </header>
  );
}