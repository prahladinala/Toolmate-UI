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

const colors = [
  { name: 'Primary', class: 'bg-primary text-primary-foreground' },
  { name: 'Secondary', class: 'bg-muted text-muted-foreground' },
  { name: 'Destructive', class: 'bg-red-500 text-white' },
  { name: 'Success', class: 'bg-green-500 text-white' },
  { name: 'Warning', class: 'bg-yellow-500 text-white' },
  { name: 'Info', class: 'bg-blue-500 text-white' },
  { name: 'Purple', class: 'bg-purple-500 text-white' },
  { name: 'Orange', class: 'bg-orange-500 text-white' },
  { name: 'Pink', class: 'bg-pink-500 text-white' },
  { name: 'Teal', class: 'bg-teal-500 text-white' },
];

const outlineColors = [
  { name: 'Primary', class: 'border-primary text-primary' },
  { name: 'Secondary', class: 'border-muted-foreground text-muted-foreground' },
  { name: 'Destructive', class: 'border-red-500 text-red-500' },
  { name: 'Success', class: 'border-green-500 text-green-500' },
  { name: 'Warning', class: 'border-yellow-500 text-yellow-500' },
  { name: 'Info', class: 'border-blue-500 text-blue-500' },
  { name: 'Purple', class: 'border-purple-500 text-purple-500' },
  { name: 'Orange', class: 'border-orange-500 text-orange-500' },
  { name: 'Pink', class: 'border-pink-500 text-pink-500' },
  { name: 'Teal', class: 'border-teal-500 text-teal-500' },
];

const checkboxColors = colors.map(c => ({
  name: c.name,
  class: c.name === 'Primary' ? 'border-primary checked:bg-primary checked:border-primary' : 
         c.name === 'Secondary' ? 'border-muted-foreground checked:bg-muted-foreground checked:border-muted-foreground' : 
         `border-${c.class.split(' ')[0].replace('bg-', '')} checked:${c.class.split(' ')[0]} checked:border-${c.class.split(' ')[0].replace('bg-', '')}`
}));

const radioColors = colors.map(c => ({
  name: c.name,
  class: c.name === 'Primary' ? 'border-primary text-primary' : 
         c.name === 'Secondary' ? 'border-muted-foreground text-muted-foreground' : 
         `border-${c.class.split(' ')[0].replace('bg-', '')} text-${c.class.split(' ')[0].replace('bg-', '')}`
}));

const components = [
  {
    id: 'badge', title: 'Badge', description: 'Status indicators.', category: 'Data Display',
    variations: colors.map((c, i) => ({ id: `badge-${c.name.toLowerCase()}`, title: `${c.name} Badge`, html: `<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${c.class}">${c.name}</span>` }))
      .concat(outlineColors.map((c, i) => ({ id: `badge-outline-${c.name.toLowerCase()}`, title: `${c.name} Outline Badge`, html: `<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border ${c.class}">${c.name} Outline</span>` })).slice(0, 5))
  },
  {
    id: 'button', title: 'Button', description: 'Interactive element.', category: 'Forms',
    variations: colors.map((c, i) => ({ id: `btn-${c.name.toLowerCase()}`, title: `${c.name} Button`, html: `<button class="h-10 px-4 py-2 rounded-md font-medium transition-colors hover:opacity-90 ${c.class}">${c.name}</button>` }))
      .concat(outlineColors.map((c, i) => ({ id: `btn-outline-${c.name.toLowerCase()}`, title: `${c.name} Outline Button`, html: `<button class="h-10 px-4 py-2 border bg-transparent rounded-md font-medium hover:bg-accent hover:text-accent-foreground ${c.class}">${c.name} Outline</button>` })).slice(0, 5))
  },
  {
    id: 'checkbox', title: 'Checkbox', description: 'Form checkboxes.', category: 'Forms',
    variations: checkboxColors.map((c, i) => ({ id: `check-${c.name.toLowerCase()}`, title: `${c.name} Checkbox`, html: `<div class="flex items-center space-x-2"><input type="checkbox" id="check-${i}" class="peer h-4 w-4 shrink-0 rounded-sm border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:text-white ${c.class}" checked /><label for="check-${i}" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">${c.name} Option</label></div>` }))
  },
  {
    id: 'radio', title: 'Radio', description: 'Form radio buttons.', category: 'Forms',
    variations: radioColors.map((c, i) => ({ id: `radio-${c.name.toLowerCase()}`, title: `${c.name} Radio`, html: `<div class="flex items-center space-x-2"><input type="radio" id="radio-${i}" name="radio-group" class="peer aspect-square h-4 w-4 rounded-full border ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${c.class}" checked /><label for="radio-${i}" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">${c.name} Option</label></div>` }))
  },
  {
    id: 'card', title: 'Card', description: 'Content containers.', category: 'Data Display',
    variations: [
      { id: 'card-simple', title: 'Simple Card', html: `<div class="rounded-xl border border-border bg-card text-card-foreground shadow w-[350px] p-6"><h3 class="font-semibold text-lg">Simple Card</h3><p class="text-sm text-muted-foreground mt-2">Just a basic card with some text.</p></div>` },
      { id: 'card-header', title: 'Card with Header', html: `<div class="rounded-xl border border-border bg-card text-card-foreground shadow w-[350px]"><div class="p-6 pb-2"><h3 class="font-semibold text-lg">Header</h3></div><div class="p-6 pt-0"><p class="text-sm text-muted-foreground">Content area.</p></div></div>` },
      { id: 'card-footer', title: 'Card with Footer', html: `<div class="rounded-xl border border-border bg-card text-card-foreground shadow w-[350px]"><div class="p-6"><h3 class="font-semibold text-lg">Main Content</h3></div><div class="p-6 pt-0 flex justify-end"><button class="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">Action</button></div></div>` },
      { id: 'card-image', title: 'Image Card', html: `<div class="rounded-xl border border-border bg-card text-card-foreground shadow w-[350px] overflow-hidden"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" class="w-full h-40 object-cover" /><div class="p-6"><h3 class="font-semibold">Image Card</h3></div></div>` },
      { id: 'card-interactive', title: 'Interactive Card', html: `<div class="rounded-xl border border-border bg-card text-card-foreground shadow w-[350px] p-6 cursor-pointer transition-colors hover:bg-muted/50"><h3 class="font-semibold">Hover me</h3></div>` },
      { id: 'card-colored', title: 'Colored Card', html: `<div class="rounded-xl border border-transparent bg-primary text-primary-foreground shadow w-[350px] p-6"><h3 class="font-semibold">Colored Card</h3><p class="text-sm opacity-90 mt-2">Primary background color.</p></div>` },
      { id: 'card-pricing', title: 'Pricing Card', html: `<div class="rounded-xl border border-border bg-card text-card-foreground shadow w-[350px] p-6 text-center"><h3 class="font-semibold text-lg">Pro Plan</h3><div class="mt-4 text-4xl font-bold">$29<span class="text-lg text-muted-foreground">/mo</span></div><button class="mt-6 w-full bg-primary text-primary-foreground px-4 py-2 rounded-md">Subscribe</button></div>` },
      { id: 'card-profile', title: 'Profile Card', html: `<div class="rounded-xl border border-border bg-card text-card-foreground shadow w-[350px] p-6 text-center"><img src="https://i.pravatar.cc/150?u=a" class="w-20 h-20 rounded-full mx-auto mb-4" /><h3 class="font-semibold text-lg">John Doe</h3><p class="text-sm text-muted-foreground">Software Engineer</p></div>` },
      { id: 'card-stats', title: 'Stats Card', html: `<div class="rounded-xl border border-border bg-card text-card-foreground shadow w-[350px] p-6 flex justify-between items-center"><div><p class="text-sm text-muted-foreground">Total Revenue</p><h3 class="text-2xl font-bold mt-1">$45,231.89</h3></div><div class="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div></div>` },
      { id: 'card-form', title: 'Form Card', html: `<div class="rounded-xl border border-border bg-card text-card-foreground shadow w-[350px] p-6"><h3 class="font-semibold text-lg mb-4">Login</h3><div class="space-y-4"><input class="w-full h-10 px-3 border rounded-md" placeholder="Email" /><input type="password" class="w-full h-10 px-3 border rounded-md" placeholder="Password" /><button class="w-full h-10 bg-primary text-primary-foreground rounded-md">Sign In</button></div></div>` },
    ]
  },
  {
    id: 'alert', title: 'Alert', description: 'Status messages.', category: 'Feedback',
    variations: colors.map((c, i) => ({ id: `alert-${c.name.toLowerCase()}`, title: `${c.name} Alert`, html: `<div class="rounded-lg border p-4 text-sm ${c.class} bg-opacity-10 text-opacity-90"><h5 class="mb-1 font-medium leading-none tracking-tight">${c.name}</h5><div class="text-sm opacity-90">This is a ${c.name.toLowerCase()} alert message.</div></div>` }))
  },
  {
    id: 'input', title: 'Input', description: 'Text input fields.', category: 'Forms',
    variations: [
      { id: 'input-default', title: 'Default Input', html: `<input class="flex h-10 w-full max-w-sm rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" placeholder="Email" />` },
      { id: 'input-disabled', title: 'Disabled Input', html: `<input disabled class="flex h-10 w-full max-w-sm rounded-md border border-input bg-muted px-3 py-2 text-sm opacity-50 cursor-not-allowed" placeholder="Disabled" />` },
      { id: 'input-file', title: 'File Input', html: `<input type="file" class="flex h-10 w-full max-w-sm rounded-md border border-input bg-transparent px-3 py-1.5 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium text-muted-foreground" />` },
      { id: 'input-with-button', title: 'Input with Button', html: `<div class="flex w-full max-w-sm items-center space-x-2"><input class="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" placeholder="Email" /><button class="h-10 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium">Subscribe</button></div>` },
      { id: 'input-error', title: 'Error Input', html: `<input class="flex h-10 w-full max-w-sm rounded-md border border-red-500 bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Error state" />` },
      { id: 'input-success', title: 'Success Input', html: `<input class="flex h-10 w-full max-w-sm rounded-md border border-green-500 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" value="valid@email.com" />` },
      { id: 'input-large', title: 'Large Input', html: `<input class="flex h-12 w-full max-w-sm rounded-md border border-input bg-transparent px-4 py-3 text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Large input" />` },
      { id: 'input-small', title: 'Small Input', html: `<input class="flex h-8 w-full max-w-sm rounded-md border border-input bg-transparent px-2 py-1 text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Small input" />` },
      { id: 'input-icon-left', title: 'Icon Left', html: `<div class="relative w-full max-w-sm"><svg class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg><input class="flex h-10 w-full rounded-md border border-input bg-transparent pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Search..." /></div>` },
      { id: 'input-icon-right', title: 'Icon Right', html: `<div class="relative w-full max-w-sm"><input class="flex h-10 w-full rounded-md border border-input bg-transparent pl-3 pr-9 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Password" /><svg class="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg></div>` },
    ]
  },
  {
    id: 'accordion', title: 'Accordion', description: 'Collapsible content sections.', category: 'Data Display',
    variations: [
      { id: 'acc-default', title: 'Default Accordion', html: `<div class="w-full max-w-md space-y-2 border-b border-border pb-4"><details class="group [&_summary::-webkit-details-marker]:hidden"><summary class="flex cursor-pointer items-center justify-between font-medium py-2"><span>Item 1</span><span class="transition group-open:rotate-180"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 9l6 6 6-6"></path></svg></span></summary><p class="text-muted-foreground mt-2">Content for item 1.</p></details></div>` },
      { id: 'acc-bordered', title: 'Bordered Accordion', html: `<div class="w-full max-w-md border border-border rounded-lg overflow-hidden"><details class="group [&_summary::-webkit-details-marker]:hidden border-b border-border last:border-0"><summary class="flex cursor-pointer items-center justify-between font-medium p-4 bg-muted/20 hover:bg-muted/50"><span>Item 1</span><span class="transition group-open:rotate-180"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 9l6 6 6-6"></path></svg></span></summary><p class="p-4 text-muted-foreground border-t border-border bg-background">Content for item 1.</p></details></div>` },
      { id: 'acc-separated', title: 'Separated Accordion', html: `<div class="w-full max-w-md space-y-4"><details class="group [&_summary::-webkit-details-marker]:hidden border border-border rounded-lg"><summary class="flex cursor-pointer items-center justify-between font-medium p-4"><span>Item 1</span><span class="transition group-open:rotate-180"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 9l6 6 6-6"></path></svg></span></summary><p class="px-4 pb-4 text-muted-foreground">Content for item 1.</p></details></div>` },
      { id: 'acc-plus-minus', title: 'Plus/Minus Icon', html: `<div class="w-full max-w-md border-b border-border pb-4"><details class="group [&_summary::-webkit-details-marker]:hidden"><summary class="flex cursor-pointer items-center justify-between font-medium py-2"><span>Item 1</span><span class="relative h-5 w-5 shrink-0"><svg class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 transition-opacity" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"></path></svg><svg class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 transition-opacity" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 12H4"></path></svg></span></summary><p class="text-muted-foreground mt-2">Content for item 1.</p></details></div>` },
      { id: 'acc-colored', title: 'Colored Accordion', html: `<div class="w-full max-w-md space-y-2"><details class="group [&_summary::-webkit-details-marker]:hidden rounded-lg bg-primary/5 text-primary"><summary class="flex cursor-pointer items-center justify-between font-medium p-4"><span>Item 1</span><span class="transition group-open:rotate-180"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 9l6 6 6-6"></path></svg></span></summary><p class="px-4 pb-4 opacity-80">Colored content for item 1.</p></details></div>` }
    ]
  },
  {
    id: 'avatar', title: 'Avatar', description: 'User profile images.', category: 'Data Display',
    variations: [
      { id: 'avatar-image', title: 'Image Avatar', html: `<span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"><img class="aspect-square h-full w-full" src="https://i.pravatar.cc/150?u=1" /></span>` },
      { id: 'avatar-initials', title: 'Initials Avatar', html: `<span class="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted font-medium text-muted-foreground">JD</span>` },
      { id: 'avatar-square', title: 'Square Avatar', html: `<span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-md"><img class="aspect-square h-full w-full" src="https://i.pravatar.cc/150?u=2" /></span>` },
      { id: 'avatar-large', title: 'Large Avatar', html: `<span class="relative flex h-16 w-16 shrink-0 overflow-hidden rounded-full"><img class="aspect-square h-full w-full" src="https://i.pravatar.cc/150?u=3" /></span>` },
      { id: 'avatar-small', title: 'Small Avatar', html: `<span class="relative flex h-6 w-6 shrink-0 overflow-hidden rounded-full"><img class="aspect-square h-full w-full" src="https://i.pravatar.cc/150?u=4" /></span>` },
      { id: 'avatar-group', title: 'Avatar Group', html: `<div class="flex -space-x-4"><img class="h-10 w-10 rounded-full border-2 border-background" src="https://i.pravatar.cc/150?u=4" /><img class="h-10 w-10 rounded-full border-2 border-background" src="https://i.pravatar.cc/150?u=5" /><img class="h-10 w-10 rounded-full border-2 border-background" src="https://i.pravatar.cc/150?u=6" /></div>` },
      { id: 'avatar-status-online', title: 'Online Status', html: `<div class="relative inline-block"><span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"><img class="aspect-square h-full w-full" src="https://i.pravatar.cc/150?u=7" /></span><span class="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-background"></span></div>` },
      { id: 'avatar-status-offline', title: 'Offline Status', html: `<div class="relative inline-block"><span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"><img class="aspect-square h-full w-full" src="https://i.pravatar.cc/150?u=8" /></span><span class="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-gray-500 ring-2 ring-background"></span></div>` },
      { id: 'avatar-status-busy', title: 'Busy Status', html: `<div class="relative inline-block"><span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"><img class="aspect-square h-full w-full" src="https://i.pravatar.cc/150?u=9" /></span><span class="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-background"></span></div>` },
      { id: 'avatar-ring', title: 'Avatar with Ring', html: `<span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-primary ring-offset-2 ring-offset-background"><img class="aspect-square h-full w-full" src="https://i.pravatar.cc/150?u=10" /></span>` }
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
    
    // Write React (simple transform)
    const reactCode = variation.html.replace(/class="/g, 'className="').replace(/for="/g, 'htmlFor="');
    fs.writeFileSync(path.join(registryDir, 'react.tsx'), reactCode);

    // Add to MDX
    mdxContent += `## ${variation.title}\n\n<ComponentPreview name="${variation.id}" registry="${type}" />\n\n`;
  });

  fs.writeFileSync(path.join(contentDir, `${item.id}.mdx`), mdxContent);
};

components.forEach(c => generateItem('components', c));

console.log('Phase 2 Components Generated Successfully!');
