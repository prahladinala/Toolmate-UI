import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const components = [
  {
    id: 'badge', title: 'Badge', description: 'Status indicators.', category: 'Data Display',
    variations: [
      { id: 'badge-default', title: 'Default Badge', html: `<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-primary text-primary-foreground">Default</span>` },
      { id: 'badge-secondary', title: 'Secondary Badge', html: `<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-muted text-muted-foreground">Secondary</span>` },
      { id: 'badge-outline', title: 'Outline Badge', html: `<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border border-input text-foreground">Outline</span>` },
      { id: 'badge-destructive', title: 'Destructive Badge', html: `<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-red-500 text-white">Destructive</span>` },
      { id: 'badge-success', title: 'Success Badge', html: `<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-green-500 text-white">Success</span>` },
    ]
  },
  {
    id: 'button', title: 'Button', description: 'Interactive element.', category: 'Forms',
    variations: [
      { id: 'button-primary', title: 'Primary Button', html: `<button class="h-10 px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90">Primary</button>` },
      { id: 'button-secondary', title: 'Secondary Button', html: `<button class="h-10 px-4 py-2 bg-muted text-muted-foreground rounded-md font-medium hover:bg-muted/80">Secondary</button>` },
      { id: 'button-outline', title: 'Outline Button', html: `<button class="h-10 px-4 py-2 border border-input bg-transparent rounded-md font-medium hover:bg-accent hover:text-accent-foreground">Outline</button>` },
      { id: 'button-ghost', title: 'Ghost Button', html: `<button class="h-10 px-4 py-2 bg-transparent rounded-md font-medium hover:bg-accent hover:text-accent-foreground">Ghost</button>` },
      { id: 'button-link', title: 'Link Button', html: `<button class="h-10 px-4 py-2 bg-transparent text-primary rounded-md font-medium underline-offset-4 hover:underline">Link</button>` },
    ]
  },
  {
    id: 'card', title: 'Card', description: 'Content containers.', category: 'Data Display',
    variations: [
      { id: 'card-simple', title: 'Simple Card', html: `<div class="rounded-xl border border-border bg-card text-card-foreground shadow w-[350px] p-6"><h3 class="font-semibold text-lg">Simple Card</h3><p class="text-sm text-muted-foreground mt-2">Just a basic card with some text.</p></div>` },
      { id: 'card-header-footer', title: 'Card with Header & Footer', html: `<div class="rounded-xl border border-border bg-card text-card-foreground shadow w-[350px]"><div class="p-6 pb-2"><h3 class="font-semibold text-lg">Header</h3></div><div class="p-6 pt-0"><p class="text-sm text-muted-foreground">Content area.</p></div><div class="p-6 pt-0 flex justify-end"><button class="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">Action</button></div></div>` },
      { id: 'card-image', title: 'Image Card', html: `<div class="rounded-xl border border-border bg-card text-card-foreground shadow w-[350px] overflow-hidden"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" class="w-full h-40 object-cover" /><div class="p-6"><h3 class="font-semibold">Image Card</h3></div></div>` },
      { id: 'card-interactive', title: 'Interactive Card', html: `<div class="rounded-xl border border-border bg-card text-card-foreground shadow w-[350px] p-6 cursor-pointer transition-colors hover:bg-muted/50"><h3 class="font-semibold">Hover me</h3></div>` },
      { id: 'card-colored', title: 'Colored Card', html: `<div class="rounded-xl border border-transparent bg-primary text-primary-foreground shadow w-[350px] p-6"><h3 class="font-semibold">Colored Card</h3><p class="text-sm opacity-90 mt-2">Primary background color.</p></div>` },
    ]
  },
  {
    id: 'alert', title: 'Alert', description: 'Status messages.', category: 'Feedback',
    variations: [
      { id: 'alert-default', title: 'Default Alert', html: `<div class="rounded-lg border border-border bg-background p-4 text-sm text-foreground">This is a default alert.</div>` },
      { id: 'alert-info', title: 'Info Alert', html: `<div class="rounded-lg border border-blue-500/50 bg-blue-500/10 p-4 text-sm text-blue-600 dark:text-blue-400">This is an info alert.</div>` },
      { id: 'alert-success', title: 'Success Alert', html: `<div class="rounded-lg border border-green-500/50 bg-green-500/10 p-4 text-sm text-green-600 dark:text-green-400">This is a success alert.</div>` },
      { id: 'alert-warning', title: 'Warning Alert', html: `<div class="rounded-lg border border-yellow-500/50 bg-yellow-500/10 p-4 text-sm text-yellow-600 dark:text-yellow-400">This is a warning alert.</div>` },
      { id: 'alert-destructive', title: 'Destructive Alert', html: `<div class="rounded-lg border border-red-500/50 bg-red-500/10 p-4 text-sm text-red-600 dark:text-red-400">This is a destructive alert.</div>` },
    ]
  },
  {
    id: 'avatar', title: 'Avatar', description: 'User images.', category: 'Data Display',
    variations: [
      { id: 'avatar-image', title: 'Image Avatar', html: `<span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"><img class="aspect-square h-full w-full" src="https://i.pravatar.cc/150?u=1" /></span>` },
      { id: 'avatar-initials', title: 'Initials Avatar', html: `<span class="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted font-medium text-muted-foreground">JD</span>` },
      { id: 'avatar-square', title: 'Square Avatar', html: `<span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-md"><img class="aspect-square h-full w-full" src="https://i.pravatar.cc/150?u=2" /></span>` },
      { id: 'avatar-large', title: 'Large Avatar', html: `<span class="relative flex h-16 w-16 shrink-0 overflow-hidden rounded-full"><img class="aspect-square h-full w-full" src="https://i.pravatar.cc/150?u=3" /></span>` },
      { id: 'avatar-group', title: 'Avatar Group', html: `<div class="flex -space-x-4"><img class="h-10 w-10 rounded-full border-2 border-background" src="https://i.pravatar.cc/150?u=4" /><img class="h-10 w-10 rounded-full border-2 border-background" src="https://i.pravatar.cc/150?u=5" /><img class="h-10 w-10 rounded-full border-2 border-background" src="https://i.pravatar.cc/150?u=6" /></div>` },
    ]
  },
  {
    id: 'input', title: 'Input', description: 'Text input fields.', category: 'Forms',
    variations: [
      { id: 'input-default', title: 'Default Input', html: `<input class="flex h-10 w-full max-w-sm rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" placeholder="Email" />` },
      { id: 'input-disabled', title: 'Disabled Input', html: `<input disabled class="flex h-10 w-full max-w-sm rounded-md border border-input bg-muted px-3 py-2 text-sm opacity-50 cursor-not-allowed" placeholder="Disabled" />` },
      { id: 'input-file', title: 'File Input', html: `<input type="file" class="flex h-10 w-full max-w-sm rounded-md border border-input bg-transparent px-3 py-1.5 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium text-muted-foreground" />` },
      { id: 'input-with-button', title: 'Input with Button', html: `<div class="flex w-full max-w-sm items-center space-x-2"><input class="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" placeholder="Email" /><button class="h-10 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium">Subscribe</button></div>` },
      { id: 'input-error', title: 'Error Input', html: `<input class="flex h-10 w-full max-w-sm rounded-md border border-red-500 bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Error state" />` },
    ]
  }
];

const sections = [
  {
    id: '404', title: '404 Pages', description: 'Not found pages.', category: 'Utility',
    variations: [
      { id: '404-standard', title: 'Standard 404', html: `<div class="flex flex-col items-center justify-center py-24 text-center"><h1 class="text-6xl font-bold">404</h1><p class="text-xl mt-4 text-muted-foreground">Page not found</p><button class="mt-8 bg-primary text-primary-foreground px-6 py-2 rounded-md">Go Home</button></div>` },
      { id: '404-split', title: 'Split 404', html: `<div class="grid md:grid-cols-2 gap-8 items-center py-24"><div class="px-8"><h1 class="text-6xl font-bold text-primary">Oops!</h1><h2 class="text-2xl font-semibold mt-4">We lost this page</h2><p class="mt-2 text-muted-foreground">We searched everywhere but couldn't find what you were looking for.</p></div><div class="h-64 bg-muted rounded-xl"></div></div>` },
      { id: '404-search', title: 'Search 404', html: `<div class="flex flex-col items-center justify-center py-24 text-center"><h1 class="text-4xl font-bold">Page missing</h1><p class="text-muted-foreground mt-4 mb-8">Try searching for what you need.</p><div class="flex w-full max-w-sm space-x-2"><input class="flex h-10 w-full rounded-md border border-input px-3" placeholder="Search..." /><button class="bg-primary text-primary-foreground px-4 rounded-md">Search</button></div></div>` },
      { id: '404-glitch', title: 'Glitch 404', html: `<div class="flex flex-col items-center justify-center py-24 text-center bg-black text-white"><h1 class="text-8xl font-black tracking-tighter" style="text-shadow: 2px 0 red, -2px 0 blue;">404</h1><p class="text-xl mt-4 font-mono">SYSTEM_ERROR_NOT_FOUND</p></div>` },
      { id: '404-minimal', title: 'Minimal 404', html: `<div class="py-24 max-w-md"><span class="text-sm font-semibold text-primary">Error 404</span><h1 class="text-3xl font-bold mt-2">Page not found</h1><p class="mt-4 text-muted-foreground">The requested URL was not found on this server.</p></div>` },
    ]
  },
  {
    id: 'maintenance', title: 'Maintenance Mode', description: 'Under construction pages.', category: 'Utility',
    variations: [
      { id: 'maint-standard', title: 'Standard Maintenance', html: `<div class="flex flex-col items-center justify-center py-24 text-center"><h1 class="text-4xl font-bold">We'll be back soon!</h1><p class="text-muted-foreground mt-4 max-w-md">Sorry for the inconvenience. We're performing some maintenance at the moment. We'll be back online shortly!</p></div>` },
      { id: 'maint-newsletter', title: 'Newsletter Subscribe', html: `<div class="flex flex-col items-center justify-center py-24 text-center"><h1 class="text-3xl font-bold">Coming Soon</h1><p class="text-muted-foreground mt-4 max-w-md mb-8">We are building something amazing. Get notified when we launch.</p><div class="flex w-full max-w-sm space-x-2"><input class="flex h-10 w-full rounded-md border border-input px-3" placeholder="Email address" /><button class="bg-primary text-primary-foreground px-4 rounded-md">Notify Me</button></div></div>` },
      { id: 'maint-progress', title: 'Progress Bar', html: `<div class="max-w-md mx-auto py-24"><h1 class="text-2xl font-bold mb-2">System Update</h1><p class="text-muted-foreground text-sm mb-6">Updating database schema...</p><div class="w-full bg-muted rounded-full h-2.5"><div class="bg-primary h-2.5 rounded-full" style="width: 45%"></div></div><p class="text-right text-xs text-muted-foreground mt-2">45% Complete</p></div>` },
      { id: 'maint-minimal', title: 'Minimal', html: `<div class="py-24 border-t-4 border-primary px-8 bg-muted/30"><h1 class="text-xl font-medium">Temporarily Unavailable</h1><p class="text-sm text-muted-foreground mt-2">Scheduled maintenance is currently in progress.</p></div>` },
      { id: 'maint-contact', title: 'With Contact', html: `<div class="flex flex-col items-center justify-center py-24 text-center"><h1 class="text-3xl font-bold">Down for Maintenance</h1><p class="text-muted-foreground mt-4">We are currently upgrading our systems.</p><p class="mt-8 text-sm">Need urgent help? <a href="#" class="text-primary underline">Contact Support</a></p></div>` },
    ]
  }
];

const templates = [
  { id: 'promotion', title: 'Promotion Page', category: 'Landing Pages' },
  { id: 'school', title: 'School Landing Page', category: 'Education' },
  { id: 'charity', title: 'Charity Page', category: 'Non-profit' },
  { id: 'gallery', title: 'Gallery Application', category: 'Portfolio' },
  { id: 'ai-project', title: 'AI Project', category: 'Tech' },
  { id: 'event', title: 'Event Landing Page', category: 'Events' },
  { id: 'mobile-app', title: 'Mobile App Launch', category: 'Product' },
  { id: 'project-launch', title: 'Project Launch Page', category: 'Product' }
];

const generateItem = (type, item) => {
  const contentDir = path.join(__dirname, 'src', 'content', type);
  ensureDir(contentDir);

  let mdxContent = `---
title: "${item.title}"
description: "${item.description || item.title}"
category: "${item.category}"
---

`;

  if (type === 'templates') {
    mdxContent += `import TemplatePreview from '../../components/mdx/TemplatePreview.astro';

<TemplatePreview url="/preview/${item.id}" />`;

    // Also generate a simple Astro preview file for the template
    const previewDir = path.join(__dirname, 'src', 'pages', 'preview');
    ensureDir(previewDir);
    fs.writeFileSync(path.join(previewDir, `${item.id}.astro`), `---
import '../../styles/global.css';
---
<html lang="en" class="dark">
<head>
  <title>${item.title}</title>
</head>
<body class="bg-background text-foreground min-h-screen flex items-center justify-center">
  <div class="text-center space-y-4">
    <h1 class="text-4xl font-bold">${item.title} Template</h1>
    <p class="text-muted-foreground">Full production-ready layout coming soon.</p>
  </div>
</body>
</html>`);

  } else {
    mdxContent += `import ComponentPreview from '../../components/mdx/ComponentPreview.astro';\n\n`;

    item.variations.forEach(variation => {
      const registryDir = path.join(__dirname, 'src', 'registry', type, variation.id);
      ensureDir(registryDir);

      // Write HTML
      fs.writeFileSync(path.join(registryDir, 'html.html'), variation.html);
      
      // Write React (simple transform)
      const reactCode = variation.html.replace(/class="/g, 'className="');
      fs.writeFileSync(path.join(registryDir, 'react.tsx'), reactCode);

      // Add to MDX
      mdxContent += `## ${variation.title}\n\n<ComponentPreview name="${variation.id}" registry="${type}" />\n\n`;
    });
  }

  fs.writeFileSync(path.join(contentDir, `${item.id}.mdx`), mdxContent);
};

components.forEach(c => generateItem('components', c));
sections.forEach(s => generateItem('sections', s));
templates.forEach(t => generateItem('templates', t));

console.log('Variations generated successfully!');
