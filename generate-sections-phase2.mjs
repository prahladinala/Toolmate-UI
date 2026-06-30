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

const sections = [
  {
    id: 'navbar', title: 'Navbar', description: 'Top navigation bars.', category: 'Marketing',
    variations: [
      { id: 'nav-simple', title: 'Simple Navbar', html: `<header class="border-b bg-background w-full"><div class="container mx-auto flex h-16 items-center justify-between px-4"><div class="font-bold text-xl">Logo</div><nav class="hidden md:flex gap-6"><a href="#" class="text-sm font-medium hover:text-primary">Home</a><a href="#" class="text-sm font-medium hover:text-primary">About</a></nav><button class="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">Sign In</button></div></header>` },
      { id: 'nav-centered', title: 'Centered Navbar', html: `<header class="border-b bg-background w-full"><div class="container mx-auto flex h-16 items-center px-4"><nav class="hidden md:flex gap-6 flex-1"><a href="#" class="text-sm font-medium hover:text-primary">Home</a></nav><div class="font-bold text-xl flex-1 text-center">Logo</div><div class="flex-1 flex justify-end"><button class="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">Sign In</button></div></div></header>` },
      { id: 'nav-search', title: 'Navbar with Search', html: `<header class="border-b bg-background w-full"><div class="container mx-auto flex h-16 items-center gap-4 px-4"><div class="font-bold text-xl">Logo</div><div class="flex-1 max-w-md mx-auto hidden md:block"><input class="w-full h-10 px-3 rounded-md border" placeholder="Search..." /></div><button class="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">Sign In</button></div></header>` },
      { id: 'nav-dark', title: 'Dark Navbar', html: `<header class="bg-slate-900 text-white w-full"><div class="container mx-auto flex h-16 items-center justify-between px-4"><div class="font-bold text-xl">Logo</div><nav class="hidden md:flex gap-6"><a href="#" class="text-sm font-medium hover:text-blue-400">Home</a><a href="#" class="text-sm font-medium hover:text-blue-400">About</a></nav><button class="bg-white text-slate-900 px-4 py-2 rounded-md text-sm">Sign In</button></div></header>` },
      { id: 'nav-floating', title: 'Floating Navbar', html: `<div class="p-4 bg-muted/20 w-full"><header class="bg-background rounded-full shadow-lg border w-full max-w-4xl mx-auto"><div class="px-6 flex h-14 items-center justify-between"><div class="font-bold">Logo</div><nav class="hidden md:flex gap-6"><a href="#" class="text-sm font-medium">Home</a><a href="#" class="text-sm font-medium">About</a></nav><button class="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm">Sign In</button></div></header></div>` }
    ]
  },
  {
    id: 'footer', title: 'Footer', description: 'Bottom footers.', category: 'Marketing',
    variations: [
      { id: 'footer-simple', title: 'Simple Footer', html: `<footer class="border-t py-8 text-center text-muted-foreground"><p>© 2026 Logo Inc. All rights reserved.</p></footer>` },
      { id: 'footer-columns', title: '4-Column Footer', html: `<footer class="border-t py-12"><div class="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8"><div><h4 class="font-semibold mb-4">Product</h4><ul class="space-y-2 text-sm text-muted-foreground"><li><a href="#">Features</a></li><li><a href="#">Pricing</a></li></ul></div><div><h4 class="font-semibold mb-4">Company</h4><ul class="space-y-2 text-sm text-muted-foreground"><li><a href="#">About</a></li><li><a href="#">Careers</a></li></ul></div><div><h4 class="font-semibold mb-4">Resources</h4><ul class="space-y-2 text-sm text-muted-foreground"><li><a href="#">Blog</a></li><li><a href="#">Docs</a></li></ul></div><div><h4 class="font-semibold mb-4">Legal</h4><ul class="space-y-2 text-sm text-muted-foreground"><li><a href="#">Privacy</a></li><li><a href="#">Terms</a></li></ul></div></div></footer>` },
      { id: 'footer-newsletter', title: 'Newsletter Footer', html: `<footer class="border-t py-12"><div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6"><div class="max-w-sm"><h3 class="font-bold text-lg">Subscribe to our newsletter</h3><p class="text-sm text-muted-foreground mt-2">Get the latest news directly to your inbox.</p></div><div class="flex w-full max-w-sm gap-2"><input class="flex-1 h-10 px-3 border rounded-md" placeholder="Email" /><button class="bg-primary text-primary-foreground px-4 rounded-md">Subscribe</button></div></div></footer>` },
      { id: 'footer-social', title: 'Social Footer', html: `<footer class="border-t py-8"><div class="container mx-auto px-4 flex justify-between items-center"><p class="text-sm text-muted-foreground">© 2026 Logo Inc.</p><div class="flex gap-4"><a href="#" class="text-muted-foreground hover:text-foreground">Twitter</a><a href="#" class="text-muted-foreground hover:text-foreground">GitHub</a></div></div></footer>` },
      { id: 'footer-large', title: 'Large Footer', html: `<footer class="bg-slate-900 text-white py-16"><div class="container mx-auto px-4 text-center"><h2 class="text-3xl font-bold mb-6">Ready to get started?</h2><button class="bg-white text-slate-900 px-8 py-3 rounded-md font-bold">Sign up for free</button><p class="mt-8 text-slate-400 text-sm">© 2026 Logo Inc.</p></div></footer>` }
    ]
  },
  {
    id: 'pricing', title: 'Pricing', description: 'Pricing tables and cards.', category: 'Marketing',
    variations: [
      { id: 'pricing-3tier', title: '3-Tier Pricing', html: `<div class="grid md:grid-cols-3 gap-8 py-12"><div class="border rounded-xl p-8"><h3 class="font-bold text-xl">Basic</h3><div class="text-3xl font-bold mt-4">$9<span class="text-sm text-muted-foreground">/mo</span></div><button class="w-full mt-6 border border-input py-2 rounded-md hover:bg-accent">Get Started</button></div><div class="border-2 border-primary rounded-xl p-8 relative"><div class="absolute top-0 right-4 -translate-y-1/2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">Popular</div><h3 class="font-bold text-xl">Pro</h3><div class="text-3xl font-bold mt-4">$29<span class="text-sm text-muted-foreground">/mo</span></div><button class="w-full mt-6 bg-primary text-primary-foreground py-2 rounded-md">Get Started</button></div><div class="border rounded-xl p-8"><h3 class="font-bold text-xl">Enterprise</h3><div class="text-3xl font-bold mt-4">$99<span class="text-sm text-muted-foreground">/mo</span></div><button class="w-full mt-6 border border-input py-2 rounded-md hover:bg-accent">Contact Sales</button></div></div>` },
      { id: 'pricing-simple', title: 'Simple Pricing', html: `<div class="max-w-md mx-auto border rounded-xl p-8 text-center py-12"><h3 class="font-bold text-2xl">One Simple Price</h3><p class="text-muted-foreground mt-2">No hidden fees or complex tiers.</p><div class="text-5xl font-bold mt-8">$199<span class="text-lg text-muted-foreground">/lifetime</span></div><button class="w-full mt-8 bg-primary text-primary-foreground py-3 rounded-md font-bold">Buy Now</button></div>` },
      { id: 'pricing-comparison', title: 'Comparison Table', html: `<div class="overflow-x-auto py-12"><table class="w-full text-left border-collapse"><thead><tr><th class="p-4 border-b">Features</th><th class="p-4 border-b">Basic</th><th class="p-4 border-b">Pro</th></tr></thead><tbody><tr><td class="p-4 border-b">Users</td><td class="p-4 border-b">1</td><td class="p-4 border-b">Unlimited</td></tr><tr><td class="p-4 border-b">Storage</td><td class="p-4 border-b">5GB</td><td class="p-4 border-b">100GB</td></tr></tbody></table></div>` },
      { id: 'pricing-toggle', title: 'Monthly/Yearly Toggle', html: `<div class="text-center py-12"><div class="inline-flex items-center gap-2 bg-muted p-1 rounded-lg mb-8"><button class="px-4 py-1.5 rounded-md bg-background shadow-sm text-sm font-medium">Monthly</button><button class="px-4 py-1.5 rounded-md text-sm font-medium text-muted-foreground">Yearly</button></div><div class="max-w-sm mx-auto border rounded-xl p-8"><div class="text-4xl font-bold">$19<span class="text-sm text-muted-foreground">/mo</span></div><p class="text-sm text-green-500 mt-2">Billed annually ($228)</p><button class="w-full mt-6 bg-primary text-primary-foreground py-2 rounded-md">Subscribe</button></div></div>` },
      { id: 'pricing-contact', title: 'Contact Sales', html: `<div class="bg-muted rounded-xl p-12 text-center flex flex-col items-center py-12"><h3 class="text-2xl font-bold">Enterprise Needs?</h3><p class="text-muted-foreground mt-4 max-w-md">We offer custom solutions for large organizations. Let's talk about how we can help.</p><button class="mt-8 bg-primary text-primary-foreground px-6 py-2 rounded-md">Contact Us</button></div>` }
    ]
  },
  {
    id: 'features', title: 'Features', description: 'Feature highlights.', category: 'Marketing',
    variations: [
      { id: 'feature-grid', title: 'Grid Features', html: `<div class="grid md:grid-cols-3 gap-8 py-12"><div class="p-6 border rounded-xl"><div class="w-10 h-10 bg-primary/10 rounded-lg mb-4"></div><h3 class="font-bold text-lg mb-2">Fast</h3><p class="text-muted-foreground text-sm">Lightning fast performance out of the box.</p></div><div class="p-6 border rounded-xl"><div class="w-10 h-10 bg-primary/10 rounded-lg mb-4"></div><h3 class="font-bold text-lg mb-2">Secure</h3><p class="text-muted-foreground text-sm">Enterprise grade security protocols.</p></div><div class="p-6 border rounded-xl"><div class="w-10 h-10 bg-primary/10 rounded-lg mb-4"></div><h3 class="font-bold text-lg mb-2">Scalable</h3><p class="text-muted-foreground text-sm">Grows with your business seamlessly.</p></div></div>` },
      { id: 'feature-zigzag', title: 'Zig-zag Features', html: `<div class="space-y-24 py-12"><div class="flex flex-col md:flex-row gap-12 items-center"><div class="flex-1"><h3 class="text-3xl font-bold mb-4">Feature One</h3><p class="text-muted-foreground">This is a great feature that does amazing things for your productivity and happiness.</p></div><div class="flex-1 h-64 bg-muted rounded-xl w-full"></div></div><div class="flex flex-col md:flex-row-reverse gap-12 items-center"><div class="flex-1"><h3 class="text-3xl font-bold mb-4">Feature Two</h3><p class="text-muted-foreground">Another incredible capability that will completely change how you work forever.</p></div><div class="flex-1 h-64 bg-muted rounded-xl w-full"></div></div></div>` },
      { id: 'feature-list', title: 'List Features', html: `<div class="max-w-2xl mx-auto py-12 space-y-8"><div class="flex gap-4"><div class="w-12 h-12 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">1</div><div><h3 class="text-xl font-bold mb-2">Sign Up</h3><p class="text-muted-foreground">Create your account in seconds using Google or Github.</p></div></div><div class="flex gap-4"><div class="w-12 h-12 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">2</div><div><h3 class="text-xl font-bold mb-2">Configure</h3><p class="text-muted-foreground">Set up your preferences and invite your team members.</p></div></div><div class="flex gap-4"><div class="w-12 h-12 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">3</div><div><h3 class="text-xl font-bold mb-2">Launch</h3><p class="text-muted-foreground">Deploy your application to production instantly.</p></div></div></div>` },
      { id: 'feature-hero', title: 'Hero Feature', html: `<div class="text-center py-20 px-4 bg-primary text-primary-foreground rounded-3xl my-12"><h2 class="text-4xl font-bold mb-6">Built for performance</h2><p class="max-w-2xl mx-auto text-xl opacity-90 mb-10">We obsess over every millisecond so your users don't have to wait.</p><button class="bg-white text-primary px-8 py-3 rounded-md font-bold">See benchmarks</button></div>` },
      { id: 'feature-cards', title: 'Card Grid', html: `<div class="grid grid-cols-2 md:grid-cols-4 gap-4 py-12"><div class="bg-muted p-6 rounded-xl text-center"><h3 class="font-bold">Analytics</h3></div><div class="bg-muted p-6 rounded-xl text-center"><h3 class="font-bold">Reporting</h3></div><div class="bg-muted p-6 rounded-xl text-center"><h3 class="font-bold">Dashboard</h3></div><div class="bg-muted p-6 rounded-xl text-center"><h3 class="font-bold">Exports</h3></div></div>` }
    ]
  }
];

const generateItem = (type, item) => {
  const contentDir = path.join(__dirname, 'src', 'content', type);
  ensureDir(contentDir);

  let mdxContent = `---
title: "${item.title}"
description: "${item.description || item.title}"
category: "${item.category}"
---

import ComponentPreview from '../../components/mdx/ComponentPreview.astro';

`;

  item.variations.forEach(variation => {
    const registryDir = path.join(__dirname, 'src', 'registry', type, variation.id);
    ensureDir(registryDir);

    // Write HTML
    fs.writeFileSync(path.join(registryDir, 'html.html'), variation.html);
    
    // Write React
    const reactCode = variation.html.replace(/class="/g, 'className="');
    fs.writeFileSync(path.join(registryDir, 'react.tsx'), reactCode);

    // Add to MDX
    mdxContent += `## ${variation.title}\n\n<ComponentPreview name="${variation.id}" registry="${type}" />\n\n`;
  });

  fs.writeFileSync(path.join(contentDir, `${item.id}.mdx`), mdxContent);
};

sections.forEach(s => generateItem('sections', s));

console.log('Phase 2 Sections Generated Successfully!');
