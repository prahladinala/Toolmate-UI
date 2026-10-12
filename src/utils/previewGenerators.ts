import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

// Helper to safely read a file from the registry directory
function readRegistryFile(registry: string, name: string, fileName: string): string | null {
  try {
    const fullPath = resolve(process.cwd(), `src/registry/${registry}/${name}/${fileName}`);
    if (existsSync(fullPath)) {
      return readFileSync(fullPath, 'utf-8');
    }
  } catch (e) {}
  return null;
}

/**
 * Returns the interactive Functional Preview HTML with client-side state handling.
 */
export function getFunctionalPreviewHtml(name: string, defaultHtml: string, registry = 'components'): string {
  // Check if a handcrafted functional-preview.html exists
  const customPreview = readRegistryFile(registry, name, 'functional-preview.html');
  if (customPreview) return customPreview;

  const n = name.toLowerCase();

  // 1. Switch
  if (n.includes('switch')) {
    return `
      <div class="functional-switch-demo w-full max-w-sm p-4 rounded-2xl border border-border bg-card shadow-sm space-y-3">
        <div class="flex items-center justify-between">
          <div class="space-y-0.5">
            <label class="text-xs sm:text-sm font-semibold text-foreground cursor-pointer select-none">Push Notifications</label>
            <p class="text-[11px] text-muted-foreground">Receive instant desktop & mobile alerts</p>
          </div>
          <button type="button" role="switch" aria-checked="true" class="functional-switch-btn relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 bg-primary focus:outline-none">
            <span class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition duration-200 translate-x-5"></span>
          </button>
        </div>
        <div class="pt-2 border-t border-border/50 flex items-center justify-between text-[11px] font-mono">
          <span class="text-muted-foreground">Live State:</span>
          <span class="functional-switch-status font-bold text-green-500">enabled (true)</span>
        </div>
      </div>
    `;
  }

  // 2. PIN Input / OTP
  if (n.includes('pin') || n.includes('otp')) {
    return `
      <div class="functional-pin-demo w-full max-w-sm p-5 rounded-2xl border border-border bg-card shadow-sm text-center space-y-4">
        <div class="space-y-1">
          <h4 class="text-xs sm:text-sm font-bold text-foreground">6-Digit Verification Code</h4>
          <p class="text-[11px] text-muted-foreground">Type digits to auto-advance, backspace to reverse</p>
        </div>
        <div class="flex items-center justify-center gap-2">
          <input type="text" maxlength="1" inputmode="numeric" class="pin-digit w-10 h-13 sm:w-11 sm:h-14 text-center text-lg font-bold rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" value="4" />
          <input type="text" maxlength="1" inputmode="numeric" class="pin-digit w-10 h-13 sm:w-11 sm:h-14 text-center text-lg font-bold rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" value="8" />
          <input type="text" maxlength="1" inputmode="numeric" class="pin-digit w-10 h-13 sm:w-11 sm:h-14 text-center text-lg font-bold rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" value="2" />
          <span class="text-muted-foreground font-semibold px-0.5">-</span>
          <input type="text" maxlength="1" inputmode="numeric" class="pin-digit w-10 h-13 sm:w-11 sm:h-14 text-center text-lg font-bold rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="•" />
          <input type="text" maxlength="1" inputmode="numeric" class="pin-digit w-10 h-13 sm:w-11 sm:h-14 text-center text-lg font-bold rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="•" />
          <input type="text" maxlength="1" inputmode="numeric" class="pin-digit w-10 h-13 sm:w-11 sm:h-14 text-center text-lg font-bold rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="•" />
        </div>
        <div class="flex items-center justify-between text-[11px] pt-1">
          <span class="pin-status text-muted-foreground font-mono">Status: 3 of 6 digits</span>
          <button type="button" class="pin-reset-btn text-primary hover:underline font-semibold cursor-pointer">Reset</button>
        </div>
      </div>
    `;
  }

  // 3. Combobox / Searchable Select
  if (n.includes('combobox') || n.includes('select')) {
    return `
      <div class="functional-combobox-demo relative w-full max-w-xs space-y-2">
        <label class="text-xs font-semibold text-foreground">Select Tech Stack</label>
        <div class="relative">
          <input type="text" placeholder="Type to filter..." value="Next.js" class="combobox-input w-full px-3.5 py-2 pl-9 pr-8 text-xs sm:text-sm rounded-xl border border-input bg-background text-foreground shadow-2xs focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <button type="button" class="combobox-clear absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-xs p-1">✕</button>
        </div>
        <div class="combobox-dropdown hidden absolute left-0 right-0 top-full mt-1.5 z-50 rounded-xl border border-border bg-card p-1 shadow-xl text-xs space-y-0.5">
          <div class="combobox-item px-3 py-1.5 rounded-lg hover:bg-muted cursor-pointer flex justify-between font-bold text-primary"><span>Next.js</span><span>✓</span></div>
          <div class="combobox-item px-3 py-1.5 rounded-lg hover:bg-muted cursor-pointer flex justify-between"><span>Astro</span></div>
          <div class="combobox-item px-3 py-1.5 rounded-lg hover:bg-muted cursor-pointer flex justify-between"><span>React 19</span></div>
          <div class="combobox-item px-3 py-1.5 rounded-lg hover:bg-muted cursor-pointer flex justify-between"><span>Vue 3</span></div>
          <div class="combobox-item px-3 py-1.5 rounded-lg hover:bg-muted cursor-pointer flex justify-between"><span>Svelte 5</span></div>
          <div class="combobox-item px-3 py-1.5 rounded-lg hover:bg-muted cursor-pointer flex justify-between"><span>Tailwind CSS</span></div>
        </div>
        <p class="text-[11px] text-muted-foreground font-mono">Live state: <span class="combobox-selected text-primary font-semibold">Next.js</span></p>
      </div>
    `;
  }

  // 4. Slider / Range
  if (n.includes('slider') || n.includes('range')) {
    return `
      <div class="functional-slider-demo w-full max-w-sm space-y-3 p-4 rounded-2xl border border-border bg-card shadow-2xs">
        <div class="flex justify-between items-center text-xs font-semibold text-foreground">
          <span>Audio Master Output</span>
          <span class="slider-badge px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-mono font-bold text-xs">68%</span>
        </div>
        <input type="range" min="0" max="100" value="68" class="functional-range-input w-full h-2 rounded-lg appearance-none cursor-pointer accent-primary bg-muted focus:outline-none" />
        <div class="flex justify-between text-[11px] text-muted-foreground font-mono">
          <button type="button" class="slider-preset hover:text-foreground cursor-pointer" data-val="0">Mute (0%)</button>
          <button type="button" class="slider-preset hover:text-foreground cursor-pointer" data-val="50">50%</button>
          <button type="button" class="slider-preset hover:text-foreground cursor-pointer" data-val="100">Max (100%)</button>
        </div>
      </div>
    `;
  }

  // 5. Toast / Notification
  if (n.includes('toast') || n.includes('notification')) {
    return `
      <div class="functional-toast-demo w-full max-w-sm space-y-3 text-center">
        <div class="flex flex-wrap items-center justify-center gap-2">
          <button type="button" class="spawn-toast-btn px-3 py-1.5 text-xs font-semibold rounded-lg bg-green-500/15 text-green-700 dark:text-green-300 border border-green-500/30 hover:bg-green-500/25 transition-all cursor-pointer" data-type="success">
            + Success Toast
          </button>
          <button type="button" class="spawn-toast-btn px-3 py-1.5 text-xs font-semibold rounded-lg bg-destructive/15 text-destructive border border-destructive/30 hover:bg-destructive/25 transition-all cursor-pointer" data-type="error">
            + Error Toast
          </button>
        </div>
        <div class="toast-stack space-y-2 text-left pt-2">
          <div class="toast-item flex items-center justify-between p-3.5 rounded-xl border border-border bg-card shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <div class="flex items-center gap-2.5">
              <span class="w-2 h-2 rounded-full bg-green-500"></span>
              <div>
                <h5 class="text-xs font-bold text-foreground">Database Synced</h5>
                <p class="text-[11px] text-muted-foreground">All schema migrations completed.</p>
              </div>
            </div>
            <button type="button" class="toast-dismiss text-muted-foreground hover:text-foreground text-xs p-1">✕</button>
          </div>
        </div>
      </div>
    `;
  }

  // 6. Drawer / Sheet
  if (n.includes('drawer') || n.includes('sheet')) {
    return `
      <div class="functional-drawer-demo text-center">
        <button type="button" class="open-drawer-btn px-4 py-2.5 text-xs font-semibold rounded-xl bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 transition-all cursor-pointer">
          Open Drawer Panel
        </button>
        <div class="drawer-overlay hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
          <div class="drawer-panel w-full max-w-sm h-full bg-card text-card-foreground border-l border-border p-6 shadow-2xl flex flex-col justify-between text-left animate-in slide-in-from-right duration-200">
            <div class="space-y-4">
              <div class="flex items-center justify-between pb-3 border-b border-border">
                <h3 class="font-bold text-sm text-foreground">Drawer Configuration</h3>
                <button type="button" class="close-drawer-btn p-1 text-muted-foreground hover:text-foreground">✕</button>
              </div>
              <p class="text-xs text-muted-foreground">Interactive drawer panel with escape key dismissal and focus preservation.</p>
              <div class="space-y-2">
                <label class="text-xs font-semibold">Instance Name</label>
                <input type="text" value="prod-edge-worker-01" class="w-full px-3 py-1.5 text-xs rounded-lg border bg-background" />
              </div>
            </div>
            <button type="button" class="close-drawer-btn w-full py-2 text-xs font-semibold rounded-lg bg-primary text-primary-foreground">Done</button>
          </div>
        </div>
      </div>
    `;
  }

  // 7. Dialog / Modal
  if (n.includes('dialog') || n.includes('modal')) {
    return `
      <div class="functional-dialog-demo text-center">
        <button type="button" class="open-dialog-btn px-4 py-2 text-xs font-semibold rounded-xl bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 transition-all cursor-pointer">
          Open Interactive Dialog
        </button>
        <div class="dialog-overlay hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div class="dialog-box w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl text-left space-y-4 animate-in zoom-in-95 duration-150">
            <div class="flex items-center justify-between">
              <h3 class="font-bold text-base text-foreground">Confirm Deployment</h3>
              <button type="button" class="close-dialog-btn text-muted-foreground hover:text-foreground text-xs p-1">✕</button>
            </div>
            <p class="text-xs text-muted-foreground leading-relaxed">
              Are you sure you want to promote build #492 to production? This will instantly switch live CDN traffic.
            </p>
            <div class="flex justify-end gap-2 pt-2">
              <button type="button" class="close-dialog-btn px-3 py-1.5 text-xs font-medium rounded-lg border border-border hover:bg-muted">Cancel</button>
              <button type="button" class="confirm-dialog-btn px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-primary text-primary-foreground">Confirm & Deploy</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 8. Tabs
  if (n.includes('tab')) {
    return `
      <div class="functional-tabs-demo w-full max-w-md space-y-3">
        <div class="flex space-x-1 rounded-xl border border-border bg-muted/60 p-1">
          <button type="button" class="functional-tab-item active flex-1 rounded-lg py-1.5 text-xs font-semibold transition-all bg-background text-foreground shadow-xs cursor-pointer" data-tab-id="1">Overview</button>
          <button type="button" class="functional-tab-item flex-1 rounded-lg py-1.5 text-xs font-medium transition-all text-muted-foreground hover:text-foreground cursor-pointer" data-tab-id="2">Analytics</button>
          <button type="button" class="functional-tab-item flex-1 rounded-lg py-1.5 text-xs font-medium transition-all text-muted-foreground hover:text-foreground cursor-pointer" data-tab-id="3">Settings</button>
        </div>
        <div class="tab-panel-box rounded-xl border border-border p-4 bg-card text-xs text-muted-foreground leading-relaxed">
          <span class="font-bold text-foreground block mb-1">Overview Dashboard</span>
          Real-time metrics, active cloud nodes, and edge worker health telemetry.
        </div>
      </div>
    `;
  }

  // 9. Accordion
  if (n.includes('acc') || n.includes('accordion')) {
    return `
      <div class="functional-accordion-demo w-full max-w-md space-y-2">
        <div class="accordion-row rounded-xl border border-border bg-card overflow-hidden transition-all">
          <button type="button" class="w-full flex items-center justify-between p-3.5 text-left font-semibold text-xs text-foreground hover:text-primary transition-colors cursor-pointer">
            <span>What makes ToolMate UI different?</span>
            <span class="acc-chevron text-muted-foreground transition-transform duration-200 rotate-180">▼</span>
          </button>
          <div class="acc-body px-3.5 pb-3.5 text-xs text-muted-foreground leading-relaxed border-t border-border/40 pt-2">
            No bloated npm dependencies. Copy production-grade TypeScript components directly into your codebase.
          </div>
        </div>
        <div class="accordion-row rounded-xl border border-border bg-card overflow-hidden transition-all">
          <button type="button" class="w-full flex items-center justify-between p-3.5 text-left font-semibold text-xs text-foreground hover:text-primary transition-colors cursor-pointer">
            <span>Are React hooks supported?</span>
            <span class="acc-chevron text-muted-foreground transition-transform duration-200">▼</span>
          </button>
          <div class="acc-body hidden px-3.5 pb-3.5 text-xs text-muted-foreground leading-relaxed border-t border-border/40 pt-2">
            Yes! Every component includes functional React variants with useState, useEffect, and strict TypeScript types.
          </div>
        </div>
      </div>
    `;
  }

  // 10. Button
  if (n.includes('btn') || n.includes('button')) {
    return `
      <div class="functional-button-demo flex flex-wrap items-center justify-center gap-3">
        <button type="button" class="async-btn inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-xs cursor-pointer active:scale-95">
          <span>Click to Simulate Async Action</span>
        </button>
        <button type="button" class="counter-btn px-4 py-2 text-xs font-semibold rounded-xl border border-border bg-card text-foreground hover:bg-muted transition-all cursor-pointer">
          Clicks: <span class="click-count font-bold text-primary">0</span>
        </button>
      </div>
    `;
  }

  // 11. Tooltip
  if (n.includes('tooltip')) {
    return `
      <div class="functional-tooltip-demo relative inline-flex items-center justify-center py-4">
        <button type="button" class="tooltip-trigger px-4 py-2 text-xs font-semibold rounded-xl border border-border bg-card text-foreground hover:bg-muted transition-colors cursor-pointer">
          Hover or Focus Me
        </button>
        <div class="tooltip-popup hidden absolute bottom-full mb-2 z-50 flex-col items-center pointer-events-none">
          <div class="px-2.5 py-1 text-[11px] font-semibold text-zinc-100 bg-zinc-950 rounded-lg shadow-xl whitespace-nowrap">
            Interactive Tooltip Active! ⚡
          </div>
          <div class="w-2 h-2 bg-zinc-950 rotate-45 -mt-1"></div>
        </div>
      </div>
    `;
  }

  // 12. Pagination
  if (n.includes('pagination')) {
    return `
      <div class="functional-pagination-demo flex items-center space-x-1 p-2 rounded-xl border border-border bg-card shadow-2xs">
        <button type="button" class="page-prev px-2.5 py-1 rounded-lg border border-border text-xs text-muted-foreground hover:text-foreground cursor-pointer disabled:opacity-30">‹ Prev</button>
        <div class="flex items-center space-x-1 page-numbers">
          <button type="button" class="page-num active w-7 h-7 rounded-lg bg-primary text-primary-foreground font-bold text-xs" data-page="1">1</button>
          <button type="button" class="page-num w-7 h-7 rounded-lg text-muted-foreground hover:text-foreground text-xs" data-page="2">2</button>
          <button type="button" class="page-num w-7 h-7 rounded-lg text-muted-foreground hover:text-foreground text-xs" data-page="3">3</button>
          <button type="button" class="page-num w-7 h-7 rounded-lg text-muted-foreground hover:text-foreground text-xs" data-page="4">4</button>
        </div>
        <button type="button" class="page-next px-2.5 py-1 rounded-lg border border-border text-xs text-muted-foreground hover:text-foreground cursor-pointer">Next ›</button>
        <span class="text-[11px] font-mono text-muted-foreground ml-2">Page: <b class="current-page-text text-foreground">1</b> of 4</span>
      </div>
    `;
  }

  // 13. Checkbox
  if (n.includes('check')) {
    return `
      <div class="functional-checkbox-demo w-full max-w-xs space-y-2.5 p-4 rounded-xl border border-border bg-card shadow-2xs">
        <div class="text-xs font-semibold text-foreground flex justify-between">
          <span>Task Checklist</span>
          <span class="chk-counter text-primary font-mono font-bold">1 / 3 done</span>
        </div>
        <label class="flex items-center space-x-2.5 text-xs text-foreground cursor-pointer">
          <input type="checkbox" checked class="chk-item rounded border-input accent-primary w-4 h-4 cursor-pointer" />
          <span>Setup Tailwind CSS v4</span>
        </label>
        <label class="flex items-center space-x-2.5 text-xs text-foreground cursor-pointer">
          <input type="checkbox" class="chk-item rounded border-input accent-primary w-4 h-4 cursor-pointer" />
          <span>Integrate Framer Motion physics</span>
        </label>
        <label class="flex items-center space-x-2.5 text-xs text-foreground cursor-pointer">
          <input type="checkbox" class="chk-item rounded border-input accent-primary w-4 h-4 cursor-pointer" />
          <span>Validate WCAG 2.2 accessibility</span>
        </label>
      </div>
    `;
  }

  // 14. Input / Textarea
  if (n.includes('input') || n.includes('textarea')) {
    return `
      <div class="functional-input-demo w-full max-w-xs space-y-2">
        <label class="text-xs font-semibold text-foreground">Live Validated Input</label>
        <div class="relative">
          <input type="text" placeholder="Enter email address..." class="live-input w-full px-3.5 py-2 text-xs rounded-xl border border-input bg-background text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
          <button type="button" class="clear-input-btn hidden absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-xs">✕</button>
        </div>
        <div class="flex justify-between text-[11px] font-mono">
          <span class="input-val-status text-muted-foreground">Type to validate</span>
          <span class="input-char-count text-muted-foreground">0 chars</span>
        </div>
      </div>
    `;
  }

  // General fallback: wrapped interactive card
  return `
    <div class="functional-generic-demo w-full max-w-sm p-4 rounded-2xl border border-border bg-card shadow-sm space-y-3 text-center">
      <div class="flex items-center justify-between text-xs">
        <span class="font-semibold text-foreground">Interactive Preview</span>
        <span class="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono text-[10px] font-bold">useState Active</span>
      </div>
      <div class="py-2">${defaultHtml}</div>
      <p class="text-[11px] text-muted-foreground">Click element to toggle state</p>
    </div>
  `;
}

/**
 * Returns the Animated Preview HTML with CSS animations, transforms, and motion styles.
 */
export function getAnimatedPreviewHtml(name: string, defaultHtml: string, registry = 'components'): string {
  // Check if a handcrafted animated-preview.html exists
  const customPreview = readRegistryFile(registry, name, 'animated-preview.html');
  if (customPreview) return customPreview;

  const n = name.toLowerCase();

  // 1. Spotlight Card
  if (n.includes('spotlight')) {
    return `
      <div class="animated-spotlight-card relative w-full max-w-sm rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xl p-7 shadow-lg overflow-hidden group cursor-pointer transition-all hover:-translate-y-1">
        <div class="spotlight-glow pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style="background: radial-gradient(350px circle at 50% 50%, rgba(168, 85, 247, 0.25), transparent 75%);"></div>
        <div class="relative z-10 space-y-3">
          <div class="flex justify-between items-center">
            <span class="p-2 rounded-xl bg-purple-500/10 text-purple-500 text-xs font-bold">⚡ Motion GPU</span>
            <span class="text-[10px] font-mono text-purple-400 font-semibold cursor-coords">Hover to track</span>
          </div>
          <h4 class="font-bold text-base text-foreground group-hover:text-purple-400 transition-colors">Cursor Spotlight Effect</h4>
          <p class="text-xs text-muted-foreground leading-relaxed">Move your mouse across this card to experience 60 FPS GPU radial illumination.</p>
        </div>
      </div>
    `;
  }

  // 2. Marquee
  if (n.includes('marquee')) {
    return `
      <div class="animated-marquee-demo relative w-full max-w-lg overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div class="flex items-center gap-4 w-max marquee-track" style="animation: tm-marquee 20s linear infinite;">
          <div class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card text-foreground font-semibold text-xs shadow-2xs hover:scale-105 transition-transform">🚀 Fast Edge</div>
          <div class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card text-foreground font-semibold text-xs shadow-2xs hover:scale-105 transition-transform">🛡️ Enterprise</div>
          <div class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card text-foreground font-semibold text-xs shadow-2xs hover:scale-105 transition-transform">✨ Framer Motion</div>
          <div class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card text-foreground font-semibold text-xs shadow-2xs hover:scale-105 transition-transform">🎨 Tailwind v4</div>
          <div class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card text-foreground font-semibold text-xs shadow-2xs hover:scale-105 transition-transform">💎 Strict TS</div>
          <div class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card text-foreground font-semibold text-xs shadow-2xs hover:scale-105 transition-transform">🚀 Fast Edge</div>
          <div class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card text-foreground font-semibold text-xs shadow-2xs hover:scale-105 transition-transform">🛡️ Enterprise</div>
          <div class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card text-foreground font-semibold text-xs shadow-2xs hover:scale-105 transition-transform">✨ Framer Motion</div>
          <div class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card text-foreground font-semibold text-xs shadow-2xs hover:scale-105 transition-transform">🎨 Tailwind v4</div>
        </div>
        <style>
          @keyframes tm-marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        </style>
      </div>
    `;
  }

  // 3. Switch (Animated)
  if (n.includes('switch')) {
    return `
      <div class="animated-switch-demo w-full max-w-sm p-4 rounded-2xl border border-border bg-card/70 backdrop-blur shadow-sm space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-sm font-semibold text-foreground">Airplane Mode</span>
          <button type="button" class="anim-switch-btn relative inline-flex h-7 w-13 shrink-0 cursor-pointer rounded-full p-1 transition-colors duration-300 bg-primary hover:opacity-90 active:scale-90">
            <span class="anim-switch-thumb flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-md text-zinc-900 transition-all duration-300 ml-auto">
              <span class="text-[10px] text-primary font-bold">✓</span>
            </span>
          </button>
        </div>
        <p class="text-[11px] text-purple-400 font-mono">Framer Motion spring physics & layoutId</p>
      </div>
    `;
  }

  // 4. Tabs (Animated layout indicator)
  if (n.includes('tab')) {
    return `
      <div class="animated-tabs-demo w-full max-w-md space-y-3">
        <div class="relative flex space-x-1 rounded-xl border border-border bg-muted/60 p-1">
          <button type="button" class="anim-tab-item relative z-10 flex-1 py-1.5 text-xs font-semibold text-primary-foreground transition-colors cursor-pointer" data-pos="0">Overview</button>
          <button type="button" class="anim-tab-item relative z-10 flex-1 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-pos="1">Settings</button>
          <button type="button" class="anim-tab-item relative z-10 flex-1 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-pos="2">Billing</button>
          <div class="anim-pill-indicator absolute inset-y-1 left-1 w-[calc(33.33%-4px)] bg-primary rounded-lg transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-xs"></div>
        </div>
        <div class="anim-tab-content p-4 rounded-xl border border-border bg-card text-xs text-muted-foreground transition-all">
          <b class="text-foreground block mb-0.5">Overview Panel</b>
          Watch the background pill glide with physical spring inertia when you switch tabs!
        </div>
      </div>
    `;
  }

  // 5. Button (Animated)
  if (n.includes('btn') || n.includes('button')) {
    return `
      <div class="animated-button-demo flex flex-wrap items-center justify-center gap-3">
        <button type="button" class="relative group overflow-hidden px-5 py-2.5 text-xs font-bold rounded-xl text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 shadow-md hover:shadow-purple-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer">
          <span class="relative z-10 flex items-center gap-1.5">
            <span>Gradient Beam Button</span>
            <span class="group-hover:translate-x-1 transition-transform">→</span>
          </span>
          <div class="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
        <button type="button" class="px-4 py-2.5 text-xs font-semibold rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer">
          Spring Pulse ⚡
        </button>
      </div>
    `;
  }

  // 6. Pagination (Animated sliding pill)
  if (n.includes('pagination')) {
    return `
      <div class="animated-pagination-demo relative flex items-center gap-1 p-2 rounded-2xl border border-border bg-card/70 backdrop-blur shadow-xs">
        <div class="relative flex items-center gap-1">
          <button type="button" class="anim-page-num relative z-10 w-9 h-9 rounded-xl text-xs font-bold text-primary-foreground flex items-center justify-center cursor-pointer" data-idx="0">1</button>
          <button type="button" class="anim-page-num relative z-10 w-9 h-9 rounded-xl text-xs font-semibold text-muted-foreground hover:text-foreground flex items-center justify-center cursor-pointer" data-idx="1">2</button>
          <button type="button" class="anim-page-num relative z-10 w-9 h-9 rounded-xl text-xs font-semibold text-muted-foreground hover:text-foreground flex items-center justify-center cursor-pointer" data-idx="2">3</button>
          <button type="button" class="anim-page-num relative z-10 w-9 h-9 rounded-xl text-xs font-semibold text-muted-foreground hover:text-foreground flex items-center justify-center cursor-pointer" data-idx="3">4</button>
          <div class="anim-page-pill absolute inset-y-0 left-0 w-9 h-9 bg-primary rounded-xl transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-sm"></div>
        </div>
      </div>
    `;
  }

  // 7. Bento Grid
  if (n.includes('bento')) {
    return `
      <div class="animated-bento-demo grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-md">
        <div class="p-4 rounded-2xl border border-border bg-card/80 hover:border-purple-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer space-y-1">
          <div class="flex justify-between items-center text-xs font-bold text-purple-400">
            <span>01</span>
            <span class="animate-pulse">✨</span>
          </div>
          <h5 class="text-xs font-bold text-foreground">Interactive Bento 1</h5>
          <p class="text-[11px] text-muted-foreground">Physics-based elevation transitions on hover.</p>
        </div>
        <div class="p-4 rounded-2xl border border-border bg-card/80 hover:border-cyan-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer space-y-1">
          <div class="flex justify-between items-center text-xs font-bold text-cyan-400">
            <span>02</span>
            <span class="animate-pulse">⚡</span>
          </div>
          <h5 class="text-xs font-bold text-foreground">Interactive Bento 2</h5>
          <p class="text-[11px] text-muted-foreground">Smooth hardware-accelerated transforms.</p>
        </div>
      </div>
    `;
  }

  // 8. Dialog
  if (n.includes('dialog') || n.includes('modal')) {
    return `
      <div class="animated-dialog-demo text-center">
        <button type="button" class="anim-open-dialog-btn px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer">
          Open Animated Spring Modal ✨
        </button>
        <div class="anim-dialog-overlay hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300">
          <div class="anim-dialog-box w-full max-w-md rounded-2xl border border-purple-500/30 bg-card p-6 shadow-2xl text-left space-y-4 scale-95 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
            <h3 class="font-bold text-base text-foreground">Spring Animated Modal</h3>
            <p class="text-xs text-muted-foreground">Smooth entrance with spring physics and backdrop blur.</p>
            <div class="flex justify-end gap-2 pt-2">
              <button type="button" class="anim-close-dialog-btn px-3 py-1.5 text-xs font-medium rounded-lg border hover:bg-muted">Close</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // General fallback: Motion wrapped card with spring hover lift
  return `
    <div class="animated-generic-demo group relative w-full max-w-sm rounded-2xl border border-border/80 bg-card/80 backdrop-blur p-5 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-purple-500/40 transition-all duration-300 cursor-pointer">
      <div class="flex items-center justify-between text-xs mb-3">
        <span class="text-[10px] font-mono text-purple-400 font-bold uppercase tracking-wider">Motion Physics</span>
        <span class="text-purple-400">✨</span>
      </div>
      <div class="py-1">${defaultHtml}</div>
      <div class="mt-3 pt-2 border-t border-border/50 text-[10px] text-muted-foreground font-mono">
        Hover to trigger spring elevation lift
      </div>
    </div>
  `;
}
