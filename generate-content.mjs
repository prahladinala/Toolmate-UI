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
  { name: 'accordion', title: 'Accordion', description: 'Collapsible content sections.', category: 'Data Display', html: `<div class="w-full max-w-md space-y-2 border-b border-border pb-4">
  <details class="group [&_summary::-webkit-details-marker]:hidden">
    <summary class="flex cursor-pointer items-center justify-between font-medium py-2">
      <span>What is ToolMate UI?</span>
      <span class="transition group-open:rotate-180">
        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
      </span>
    </summary>
    <p class="text-muted-foreground mt-2">A comprehensive library of beautiful, fully responsive UI components and templates.</p>
  </details>
</div>` },
  { name: 'badge', title: 'Badge', description: 'Small status indicators.', category: 'Data Display', html: `<span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/80">Badge</span>` },
  { name: 'card', title: 'Card', description: 'Flexible content containers.', category: 'Data Display', html: `<div class="rounded-xl border border-border bg-card text-card-foreground shadow w-[350px]">
  <div class="flex flex-col space-y-1.5 p-6">
    <h3 class="font-semibold leading-none tracking-tight">Card Title</h3>
    <p class="text-sm text-muted-foreground">This is a description.</p>
  </div>
  <div class="p-6 pt-0">
    <p>Card content goes here.</p>
  </div>
  <div class="flex items-center p-6 pt-0">
    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none bg-primary text-primary-foreground h-9 px-4 py-2 w-full">Action</button>
  </div>
</div>` },
  { name: 'avatar', title: 'Avatar', description: 'User profile images with fallbacks.', category: 'Data Display', html: `<span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
  <img class="aspect-square h-full w-full" src="https://i.pravatar.cc/150?img=68" alt="Avatar" />
</span>` },
  { name: 'alert', title: 'Alert', description: 'Important status messages.', category: 'Feedback', html: `<div role="alert" class="relative w-full rounded-lg border border-border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground bg-background text-foreground">
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"><path d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8 4.50001C8 4.77615 7.77614 5.00001 7.5 5.00001C7.22386 5.00001 7 4.77615 7 4.50001C7 4.22387 7.22386 4.00001 7.5 4.00001C7.77614 4.00001 8 4.22387 8 4.50001ZM7.5 6.00001C7.77614 6.00001 8 6.22387 8 6.50001V10.5C8 10.7762 7.77614 11 7.5 11C7.22386 11 7 10.7762 7 10.5V6.50001C7 6.22387 7.22386 6.00001 7.5 6.00001Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
  <h5 class="mb-1 font-medium leading-none tracking-tight">Information</h5>
  <div class="text-sm [&_p]:leading-relaxed text-muted-foreground">This is an alert message providing important context.</div>
</div>` },
  { name: 'tabs', title: 'Tabs', description: 'Tabbed content switching.', category: 'Navigation', html: `<div class="w-full max-w-sm">
  <div class="flex space-x-1 rounded-xl border border-border bg-muted p-1">
    <button class="w-full rounded-lg bg-background py-1.5 text-sm font-medium text-foreground shadow">Tab 1</button>
    <button class="w-full rounded-lg py-1.5 text-sm font-medium text-muted-foreground hover:bg-background/50">Tab 2</button>
  </div>
  <div class="mt-4 rounded-xl border border-border p-4 bg-card text-card-foreground">
    Content for Tab 1
  </div>
</div>` },
  { name: 'dialog', title: 'Dialog / Modal', description: 'Modal windows with overlay.', category: 'Overlay', html: `<div class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
  <div class="w-full max-w-lg rounded-xl border border-border bg-card text-card-foreground shadow-lg p-6">
    <h3 class="font-semibold text-lg mb-2">Edit Profile</h3>
    <p class="text-sm text-muted-foreground mb-4">Make changes to your profile here. Click save when you're done.</p>
    <div class="flex justify-end space-x-2 mt-6">
      <button class="px-4 py-2 text-sm font-medium rounded-md border border-input bg-background shadow-sm hover:bg-accent">Cancel</button>
      <button class="px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground shadow hover:bg-primary/90">Save Changes</button>
    </div>
  </div>
</div>` },
  { name: 'label', title: 'Label', description: 'Accessible form labels.', category: 'Forms', html: `<label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email Address</label>` },
  { name: 'textarea', title: 'Textarea', description: 'Multi-line inputs.', category: 'Forms', html: `<textarea class="flex min-h-[80px] w-full max-w-sm rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="Type your message here."></textarea>` },
  { name: 'checkbox', title: 'Checkbox', description: 'Form checkboxes.', category: 'Forms', html: `<div class="flex items-center space-x-2">
  <input type="checkbox" id="terms" class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-primary checked:text-primary-foreground" />
  <label for="terms" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
    Accept terms and conditions
  </label>
</div>` },
  { name: 'radio', title: 'Radio Buttons', description: 'Form radio selection groups.', category: 'Forms', html: `<div class="flex flex-col space-y-2">
  <div class="flex items-center space-x-2">
    <input type="radio" id="r1" name="radio-group" class="peer aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" checked />
    <label for="r1" class="text-sm font-medium leading-none">Option One</label>
  </div>
  <div class="flex items-center space-x-2">
    <input type="radio" id="r2" name="radio-group" class="peer aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
    <label for="r2" class="text-sm font-medium leading-none">Option Two</label>
  </div>
</div>` },
  { name: 'image', title: 'Image', description: 'Responsive image components with fallbacks.', category: 'Media', html: `<img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Beautiful landscape" class="rounded-md object-cover h-64 w-full" />` },
  { name: 'link', title: 'Link', description: 'Styled anchor links with hover effects.', category: 'Navigation', html: `<a href="#" class="font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary">Explore our documentation</a>` },
];

const sections = [
  { name: 'navbar', title: 'Header / Navbar', description: 'Top navigation with logo, links, and fully responsive mobile list view with hamburger icon.', category: 'Navigation', html: `<header class="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div class="container flex h-14 items-center mx-auto px-4">
    <div class="mr-4 hidden md:flex">
      <a class="mr-6 flex items-center space-x-2 font-bold" href="#">ToolMate UI</a>
      <nav class="flex items-center space-x-6 text-sm font-medium">
        <a class="transition-colors hover:text-foreground/80 text-foreground" href="#">Docs</a>
        <a class="transition-colors hover:text-foreground/80 text-foreground/60" href="#">Components</a>
        <a class="transition-colors hover:text-foreground/80 text-foreground/60" href="#">Templates</a>
      </nav>
    </div>
    <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
      <!-- Mobile Nav Trigger -->
      <button class="inline-flex items-center justify-center rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground h-9 py-2 px-2 md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      </button>
      <a class="md:hidden flex items-center space-x-2 font-bold" href="#">ToolMate UI</a>
      <div class="w-full flex-1 md:w-auto md:flex-none">
        <!-- Search placeholder -->
      </div>
      <nav class="flex items-center">
        <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 px-3">Log in</button>
        <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 ml-2">Sign up</button>
      </nav>
    </div>
  </div>
</header>` },
  { name: 'footer', title: 'Footer', description: 'Bottom site links and copyright.', category: 'Navigation', html: `<footer class="border-t border-border bg-background py-8 md:py-12">
  <div class="container mx-auto px-4 md:px-6">
    <div class="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
      <div class="col-span-2 lg:col-span-2">
        <a href="#" class="font-bold text-lg mb-4 inline-block">ToolMate UI</a>
        <p class="text-sm text-muted-foreground mt-2 max-w-xs">Building the web faster with beautiful, accessible, and customizable components.</p>
      </div>
      <div>
        <h3 class="font-semibold mb-4">Product</h3>
        <ul class="space-y-2 text-sm text-muted-foreground">
          <li><a href="#" class="hover:text-foreground">Features</a></li>
          <li><a href="#" class="hover:text-foreground">Pricing</a></li>
          <li><a href="#" class="hover:text-foreground">Changelog</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold mb-4">Resources</h3>
        <ul class="space-y-2 text-sm text-muted-foreground">
          <li><a href="#" class="hover:text-foreground">Documentation</a></li>
          <li><a href="#" class="hover:text-foreground">Blog</a></li>
          <li><a href="#" class="hover:text-foreground">Community</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold mb-4">Legal</h3>
        <ul class="space-y-2 text-sm text-muted-foreground">
          <li><a href="#" class="hover:text-foreground">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-foreground">Terms of Service</a></li>
        </ul>
      </div>
    </div>
    <div class="mt-8 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
      <p>© 2026 ToolMate UI. All rights reserved.</p>
      <div class="flex space-x-4 mt-4 md:mt-0">
        <a href="#" class="hover:text-foreground">Twitter</a>
        <a href="#" class="hover:text-foreground">GitHub</a>
      </div>
    </div>
  </div>
</footer>` },
  { name: 'contact-form', title: 'Contact Form', description: 'Functional layout for user inquiries.', category: 'Forms', html: `<section class="py-12 md:py-24 max-w-md mx-auto w-full">
  <div class="space-y-6">
    <div class="space-y-2 text-center">
      <h2 class="text-3xl font-bold tracking-tighter">Contact Us</h2>
      <p class="text-muted-foreground">We'll get back to you as soon as possible.</p>
    </div>
    <form class="space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <div class="space-y-2">
          <label class="text-sm font-medium" for="first-name">First name</label>
          <input id="first-name" class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm" placeholder="John" />
        </div>
        <div class="space-y-2">
          <label class="text-sm font-medium" for="last-name">Last name</label>
          <input id="last-name" class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm" placeholder="Doe" />
        </div>
      </div>
      <div class="space-y-2">
        <label class="text-sm font-medium" for="email">Email</label>
        <input id="email" type="email" class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm" placeholder="john@example.com" />
      </div>
      <div class="space-y-2">
        <label class="text-sm font-medium" for="message">Message</label>
        <textarea id="message" class="flex min-h-[100px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm" placeholder="How can we help you?"></textarea>
      </div>
      <button class="w-full inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 h-9">Send Message</button>
    </form>
  </div>
</section>` },
  { name: 'pricing', title: 'Pricing', description: 'Tiered pricing tables.', category: 'Marketing', html: `<section class="py-12 md:py-24 max-w-5xl mx-auto w-full px-4">
  <div class="text-center mb-10">
    <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, transparent pricing</h2>
    <p class="text-muted-foreground md:text-xl mt-4">No hidden fees. Cancel anytime.</p>
  </div>
  <div class="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
    <!-- Free Tier -->
    <div class="rounded-xl border border-border bg-card text-card-foreground shadow flex flex-col p-6">
      <h3 class="font-bold text-2xl">Starter</h3>
      <p class="text-muted-foreground text-sm mt-2">Perfect for side projects.</p>
      <div class="mt-4 flex items-baseline text-4xl font-extrabold">
        $0 <span class="ml-1 text-xl font-medium text-muted-foreground">/mo</span>
      </div>
      <ul class="mt-6 space-y-3 flex-1">
        <li class="flex items-center text-sm"><svg class="mr-2 h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>1 Project</li>
        <li class="flex items-center text-sm"><svg class="mr-2 h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Community Support</li>
      </ul>
      <button class="mt-8 w-full inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground h-10">Get Started</button>
    </div>
    <!-- Pro Tier -->
    <div class="rounded-xl border-2 border-primary bg-card text-card-foreground shadow flex flex-col p-6 relative">
      <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
        <span class="inline-flex items-center rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">Popular</span>
      </div>
      <h3 class="font-bold text-2xl">Pro</h3>
      <p class="text-muted-foreground text-sm mt-2">For professional developers.</p>
      <div class="mt-4 flex items-baseline text-4xl font-extrabold">
        $29 <span class="ml-1 text-xl font-medium text-muted-foreground">/mo</span>
      </div>
      <ul class="mt-6 space-y-3 flex-1">
        <li class="flex items-center text-sm"><svg class="mr-2 h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Unlimited Projects</li>
        <li class="flex items-center text-sm"><svg class="mr-2 h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Priority Support</li>
        <li class="flex items-center text-sm"><svg class="mr-2 h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Advanced Analytics</li>
      </ul>
      <button class="mt-8 w-full inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 h-10">Subscribe</button>
    </div>
  </div>
</section>` },
  { name: 'features', title: 'Features', description: 'Grid layout highlighting product benefits.', category: 'Marketing', html: `<section class="py-12 md:py-24 max-w-6xl mx-auto px-4">
  <div class="text-center mb-12">
    <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl">Everything you need</h2>
    <p class="text-muted-foreground mt-4 max-w-2xl mx-auto">Discover the powerful features that make our platform the best choice for your next project.</p>
  </div>
  <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    <div class="p-6 bg-muted/50 rounded-xl">
      <div class="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
      </div>
      <h3 class="font-bold text-xl mb-2">Clean Code</h3>
      <p class="text-muted-foreground text-sm">Built with modern tools and best practices, ensuring your project scales beautifully.</p>
    </div>
    <div class="p-6 bg-muted/50 rounded-xl">
      <div class="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="16.5" y1="16.5" y2="12"/></svg>
      </div>
      <h3 class="font-bold text-xl mb-2">Fast Setup</h3>
      <p class="text-muted-foreground text-sm">Get up and running in minutes, not hours. Save time and focus on your business logic.</p>
    </div>
    <div class="p-6 bg-muted/50 rounded-xl">
      <div class="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
      </div>
      <h3 class="font-bold text-xl mb-2">Fully Responsive</h3>
      <p class="text-muted-foreground text-sm">Looks perfect on desktops, tablets, and mobile devices right out of the box.</p>
    </div>
  </div>
</section>` },
  { name: 'cta', title: 'CTA', description: 'Call to Action banners.', category: 'Marketing', html: `<section class="py-12 md:py-24">
  <div class="bg-primary text-primary-foreground rounded-2xl mx-4 md:mx-auto max-w-5xl p-8 md:p-16 text-center shadow-xl relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-50"></div>
    <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl relative z-10">Ready to boost your productivity?</h2>
    <p class="mt-4 text-primary-foreground/80 md:text-xl max-w-2xl mx-auto relative z-10">Join thousands of developers building better web experiences faster.</p>
    <div class="mt-8 flex flex-col sm:flex-row justify-center gap-4 relative z-10">
      <button class="inline-flex h-10 items-center justify-center rounded-md bg-background px-8 py-2 text-sm font-medium text-foreground shadow transition-colors hover:bg-background/90">Start for free</button>
    </div>
  </div>
</section>` },
  { name: 'stats', title: 'Stats/Counter', description: 'Animated data highlights.', category: 'Marketing', html: `<section class="py-12 border-y border-border bg-muted/30">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div class="space-y-2">
        <h4 class="text-4xl font-extrabold tracking-tighter text-primary">100+</h4>
        <p class="text-sm text-muted-foreground font-medium">Components</p>
      </div>
      <div class="space-y-2">
        <h4 class="text-4xl font-extrabold tracking-tighter text-primary">50k</h4>
        <p class="text-sm text-muted-foreground font-medium">Downloads</p>
      </div>
      <div class="space-y-2">
        <h4 class="text-4xl font-extrabold tracking-tighter text-primary">4.9</h4>
        <p class="text-sm text-muted-foreground font-medium">Star Rating</p>
      </div>
      <div class="space-y-2">
        <h4 class="text-4xl font-extrabold tracking-tighter text-primary">24/7</h4>
        <p class="text-sm text-muted-foreground font-medium">Support</p>
      </div>
    </div>
  </div>
</section>` },
  { name: 'testimonials', title: 'Testimonials', description: 'Customer reviews.', category: 'Marketing', html: `<section class="py-12 md:py-24 max-w-6xl mx-auto px-4">
  <div class="text-center mb-12">
    <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl">Loved by developers</h2>
  </div>
  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <div class="rounded-xl border border-border bg-card p-6 shadow-sm">
      <div class="flex items-center space-x-4 mb-4">
        <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <img class="aspect-square h-full w-full" src="https://i.pravatar.cc/150?u=a" alt="User" />
        </span>
        <div>
          <p class="text-sm font-semibold">Sarah Jenkins</p>
          <p class="text-xs text-muted-foreground">Frontend Lead</p>
        </div>
      </div>
      <p class="text-sm text-muted-foreground">"ToolMate UI has completely transformed how our team builds interfaces. The components are gorgeous and incredibly easy to customize."</p>
    </div>
    <!-- Add more cards as needed -->
    <div class="rounded-xl border border-border bg-card p-6 shadow-sm">
      <div class="flex items-center space-x-4 mb-4">
        <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <img class="aspect-square h-full w-full" src="https://i.pravatar.cc/150?u=b" alt="User" />
        </span>
        <div>
          <p class="text-sm font-semibold">David Chen</p>
          <p class="text-xs text-muted-foreground">Indie Hacker</p>
        </div>
      </div>
      <p class="text-sm text-muted-foreground">"I launched my SaaS in record time thanks to these templates. The code quality is top-notch."</p>
    </div>
  </div>
</section>` },
  { name: 'faq', title: 'FAQ', description: 'Frequently asked questions layout.', category: 'Marketing', html: `<section class="py-12 md:py-24 max-w-3xl mx-auto px-4 w-full">
  <div class="text-center mb-10">
    <h2 class="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
  </div>
  <div class="space-y-4">
    <details class="group rounded-lg border border-border p-4 bg-card [&_summary::-webkit-details-marker]:hidden" open>
      <summary class="flex cursor-pointer items-center justify-between font-semibold">
        <span>Is it compatible with Tailwind v4?</span>
        <span class="transition group-open:rotate-180 text-muted-foreground">
          <svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
        </span>
      </summary>
      <p class="text-muted-foreground text-sm mt-4 leading-relaxed">Yes! All components are fully compatible with Tailwind CSS v4 out of the box.</p>
    </details>
    <details class="group rounded-lg border border-border p-4 bg-card [&_summary::-webkit-details-marker]:hidden">
      <summary class="flex cursor-pointer items-center justify-between font-semibold">
        <span>Do I need to install any heavy dependencies?</span>
        <span class="transition group-open:rotate-180 text-muted-foreground">
          <svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
        </span>
      </summary>
      <p class="text-muted-foreground text-sm mt-4 leading-relaxed">No, ToolMate UI is a copy-paste library. You own the code completely.</p>
    </details>
  </div>
</section>` }
];

const templates = [
  { name: 'portfolio', title: 'Portfolio / Personal Site', description: 'A sleek template for developers/designers.', category: 'Portfolio' },
  { name: 'ecommerce', title: 'E-commerce Storefront', description: 'A product listing and showcase page.', category: 'E-commerce' },
  { name: 'product-page', title: 'Product Page', description: 'A comprehensive page detailing everything about a specific product.', category: 'Landing Pages' }
];

// Helper to write to src/registry/ and src/content/
const generateItem = (type, item) => {
  const contentDir = path.join(__dirname, 'src', 'content', type);
  const registryDir = path.join(__dirname, 'src', 'registry', type, item.name);
  
  ensureDir(contentDir);
  if (item.html) {
    ensureDir(registryDir);
  }

  // Write MDX Document
  const mdxPath = path.join(contentDir, `${item.name}.mdx`);
  const mdxContent = `---
title: ${item.title}
description: ${item.description}
category: ${item.category}
---

${item.html ? `import ComponentPreview from '../../components/mdx/ComponentPreview.astro';

<ComponentPreview name="${item.name}" registry="${type}" />` : `import TemplatePreview from '../../components/mdx/TemplatePreview.astro';

<TemplatePreview url="/preview/${item.name}" />`}
`;
  fs.writeFileSync(mdxPath, mdxContent);

  // Write Snippets
  if (item.html) {
    fs.writeFileSync(path.join(registryDir, 'html.html'), item.html);
    // React snippet is the same but with className
    const reactCode = item.html.replace(/class="/g, 'className="').replace(/for="/g, 'htmlFor="').replace(/clip-rule="/g, 'clipRule="').replace(/fill-rule="/g, 'fillRule="').replace(/stroke-linecap="/g, 'strokeLinecap="').replace(/stroke-linejoin="/g, 'strokeLinejoin="').replace(/stroke-width="/g, 'strokeWidth="');
    fs.writeFileSync(path.join(registryDir, 'react.tsx'), reactCode);
  }
};

components.forEach(c => generateItem('components', c));
sections.forEach(s => generateItem('sections', s));
templates.forEach(t => generateItem('templates', t));

console.log('Successfully generated all components, sections, and template docs!');
