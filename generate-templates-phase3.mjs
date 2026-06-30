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

// Common Layout Elements
const nav = `<header class="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-50">
  <div class="container mx-auto flex h-16 items-center justify-between px-4">
    <a href="#" class="font-bold text-xl flex items-center gap-2">
      <div class="h-8 w-8 rounded bg-primary text-primary-foreground flex items-center justify-center font-bold">T</div>
      ToolMate
    </a>
    <nav class="hidden md:flex space-x-6 text-sm font-medium">
      <a href="#" class="text-foreground hover:text-primary">Home</a>
      <a href="#" class="text-muted-foreground hover:text-foreground">Features</a>
      <a href="#" class="text-muted-foreground hover:text-foreground">Pricing</a>
      <a href="#" class="text-muted-foreground hover:text-foreground">Contact</a>
    </nav>
    <div class="flex items-center space-x-4">
      <button class="text-sm font-medium hover:text-primary">Log In</button>
      <button class="bg-primary text-primary-foreground h-9 px-4 rounded-md text-sm font-medium hidden md:block">Sign Up</button>
      <button class="md:hidden">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
    </div>
  </div>
</header>`;

const footer = `<footer class="border-t border-border bg-muted/20 py-12">
  <div class="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
    <div class="col-span-2">
      <a href="#" class="font-bold text-xl flex items-center gap-2 mb-4">
        <div class="h-6 w-6 rounded bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">T</div>
        ToolMate
      </a>
      <p class="text-muted-foreground max-w-xs text-sm">Building the web faster with beautiful templates and components.</p>
    </div>
    <div>
      <h3 class="font-semibold mb-3">Links</h3>
      <ul class="space-y-2 text-sm text-muted-foreground">
        <li><a href="#" class="hover:text-primary">Home</a></li>
        <li><a href="#" class="hover:text-primary">Pricing</a></li>
      </ul>
    </div>
    <div>
      <h3 class="font-semibold mb-3">Legal</h3>
      <ul class="space-y-2 text-sm text-muted-foreground">
        <li><a href="#" class="hover:text-primary">Privacy</a></li>
        <li><a href="#" class="hover:text-primary">Terms</a></li>
      </ul>
    </div>
  </div>
  <div class="container mx-auto px-4 mt-12 pt-8 border-t border-border text-sm text-muted-foreground text-center">
    © 2026 ToolMate UI. All rights reserved.
  </div>
</footer>`;

const templates = [
  {
    id: 'gallery',
    title: 'Gallery Application',
    html: `${nav}
    <main class="py-12 bg-background min-h-screen">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4">Art Gallery</h1>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">Explore our curated collection of stunning visual artwork from artists around the world.</p>
          <div class="flex justify-center gap-2 mt-6">
            <button class="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">All</button>
            <button class="bg-muted text-muted-foreground hover:bg-muted/80 px-4 py-2 rounded-full text-sm font-medium">Photography</button>
            <button class="bg-muted text-muted-foreground hover:bg-muted/80 px-4 py-2 rounded-full text-sm font-medium">Abstract</button>
            <button class="bg-muted text-muted-foreground hover:bg-muted/80 px-4 py-2 rounded-full text-sm font-medium">Digital</button>
          </div>
        </div>
        <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <div class="relative group rounded-xl overflow-hidden break-inside-avoid">
            <img src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&q=80" class="w-full h-auto object-cover" />
            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button class="bg-white text-black px-4 py-2 rounded-full text-sm font-bold">View Art</button>
            </div>
          </div>
          <div class="relative group rounded-xl overflow-hidden break-inside-avoid">
            <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80" class="w-full h-auto object-cover" />
          </div>
          <div class="relative group rounded-xl overflow-hidden break-inside-avoid">
            <img src="https://images.unsplash.com/photo-1501472312651-726afe119ff1?w=800&q=80" class="w-full h-auto object-cover" />
          </div>
          <div class="relative group rounded-xl overflow-hidden break-inside-avoid">
            <img src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80" class="w-full h-auto object-cover" />
          </div>
          <div class="relative group rounded-xl overflow-hidden break-inside-avoid">
            <img src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80" class="w-full h-auto object-cover" />
          </div>
          <div class="relative group rounded-xl overflow-hidden break-inside-avoid">
            <img src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=800&q=80" class="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </main>
    ${footer}`
  },
  {
    id: 'ecommerce',
    title: 'Modern eCommerce',
    html: `${nav}
    <main>
      <section class="bg-muted/30 py-20">
        <div class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div class="md:w-1/2">
            <h1 class="text-5xl font-bold tracking-tight mb-6">Summer Collection 2026</h1>
            <p class="text-xl text-muted-foreground mb-8">Discover our new arrivals featuring lightweight materials and vibrant colors.</p>
            <button class="bg-primary text-primary-foreground h-12 px-8 rounded-md font-medium text-lg">Shop Now</button>
          </div>
          <div class="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80" class="rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>
      <section class="py-20">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-10">Trending Products</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div class="group cursor-pointer">
              <div class="overflow-hidden rounded-xl bg-muted aspect-[3/4] mb-4">
                <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 class="font-medium text-lg">Essential Cotton Tee</h3>
              <p class="text-muted-foreground">$29.00</p>
            </div>
            <div class="group cursor-pointer">
              <div class="overflow-hidden rounded-xl bg-muted aspect-[3/4] mb-4 relative">
                <span class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded font-bold z-10">SALE</span>
                <img src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 class="font-medium text-lg">Classic Hoodie</h3>
              <p class="text-muted-foreground"><span class="line-through mr-2">$89.00</span>$59.00</p>
            </div>
            <div class="group cursor-pointer">
              <div class="overflow-hidden rounded-xl bg-muted aspect-[3/4] mb-4">
                <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 class="font-medium text-lg">Denim Jacket</h3>
              <p class="text-muted-foreground">$129.00</p>
            </div>
            <div class="group cursor-pointer">
              <div class="overflow-hidden rounded-xl bg-muted aspect-[3/4] mb-4 relative">
                <span class="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded font-bold z-10">NEW</span>
                <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 class="font-medium text-lg">Leather Backpack</h3>
              <p class="text-muted-foreground">$149.00</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    ${footer}`
  },
  {
    id: 'school',
    title: 'University/School Landing',
    html: `${nav}
    <main>
      <section class="relative bg-slate-900 text-white overflow-hidden py-32">
        <div class="absolute inset-0 opacity-40 mix-blend-overlay">
          <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80" class="w-full h-full object-cover" />
        </div>
        <div class="container mx-auto px-4 relative z-10 text-center">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 font-serif tracking-tight">Shape Your Future</h1>
          <p class="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto font-light">Join a global community of scholars dedicated to excellence in research, innovation, and leadership.</p>
          <div class="flex justify-center gap-4">
            <button class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">Apply Now</button>
            <button class="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">Virtual Tour</button>
          </div>
        </div>
      </section>
      <section class="py-20 bg-background">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-3 gap-10">
            <div class="border border-border p-8 rounded-2xl text-center bg-card shadow-sm hover:shadow-md transition-shadow">
              <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/></svg>
              </div>
              <h3 class="text-2xl font-bold mb-3 font-serif">Academics</h3>
              <p class="text-muted-foreground">Over 200 programs of study taught by world-renowned faculty members.</p>
            </div>
            <div class="border border-border p-8 rounded-2xl text-center bg-card shadow-sm hover:shadow-md transition-shadow">
              <div class="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
              </div>
              <h3 class="text-2xl font-bold mb-3 font-serif">Campus Life</h3>
              <p class="text-muted-foreground">A vibrant community with over 500 student organizations and clubs.</p>
            </div>
            <div class="border border-border p-8 rounded-2xl text-center bg-card shadow-sm hover:shadow-md transition-shadow">
              <div class="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <h3 class="text-2xl font-bold mb-3 font-serif">Admissions</h3>
              <p class="text-muted-foreground">Find out how to apply, financial aid options, and schedule a visit.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    ${footer}`
  },
  {
    id: 'charity',
    title: 'Non-profit & Charity',
    html: `${nav}
    <main>
      <section class="py-24 bg-green-50">
        <div class="container mx-auto px-4 flex flex-col items-center text-center">
          <span class="text-green-600 font-bold tracking-wider uppercase mb-4 text-sm">Together we can make a difference</span>
          <h1 class="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 max-w-4xl">Help Provide Clean Water to Communities in Need</h1>
          <p class="text-xl text-slate-600 mb-10 max-w-2xl">Your donation today ensures that families have access to safe, clean drinking water for generations to come.</p>
          <div class="bg-white p-8 rounded-3xl shadow-xl w-full max-w-2xl border border-green-100">
            <h3 class="text-2xl font-bold mb-6 text-slate-800">Make a Donation</h3>
            <div class="grid grid-cols-4 gap-4 mb-6">
              <button class="border-2 border-green-200 hover:border-green-500 rounded-xl py-3 text-lg font-bold text-slate-700 transition-colors">$25</button>
              <button class="border-2 border-green-500 bg-green-50 rounded-xl py-3 text-lg font-bold text-green-700">$50</button>
              <button class="border-2 border-green-200 hover:border-green-500 rounded-xl py-3 text-lg font-bold text-slate-700 transition-colors">$100</button>
              <button class="border-2 border-green-200 hover:border-green-500 rounded-xl py-3 text-lg font-bold text-slate-700 transition-colors">Other</button>
            </div>
            <button class="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-green-200">Donate Now</button>
            <p class="text-sm text-slate-500 mt-4">100% of your donation funds clean water projects.</p>
          </div>
        </div>
      </section>
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80" class="rounded-3xl shadow-lg" />
            </div>
            <div>
              <h2 class="text-4xl font-bold mb-6 text-slate-900">The Global Water Crisis</h2>
              <p class="text-lg text-slate-600 mb-6 leading-relaxed">771 million people lack access to safe water. The water crisis is a health crisis, an education crisis, and an economic crisis.</p>
              <p class="text-lg text-slate-600 mb-8 leading-relaxed">But it's a crisis we can solve together. Every $50 invested in clean water yields $200 in economic return.</p>
              <button class="text-green-600 font-bold flex items-center hover:text-green-800 transition-colors">Learn about our mission <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></button>
            </div>
          </div>
        </div>
      </section>
    </main>
    ${footer}`
  },
  {
    id: 'portfolio',
    title: 'Creative Portfolio',
    html: `${nav}
    <main class="bg-background min-h-screen font-sans">
      <section class="py-32 container mx-auto px-4 max-w-4xl text-center">
        <div class="inline-block p-1 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-8">
          <img src="https://i.pravatar.cc/150?u=12" class="w-24 h-24 rounded-full border-4 border-background" />
        </div>
        <h1 class="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Creative Developer & Digital Designer</h1>
        <p class="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">Hi, I'm Alex. I craft beautiful, accessible, and high-performance web experiences.</p>
        <button class="bg-foreground text-background px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">Say Hello</button>
      </section>
      <section class="py-20 bg-muted/30">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-12 text-center tracking-tight">Selected Works</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted cursor-pointer">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <h3 class="text-white text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Fintech Dashboard</h3>
                <p class="text-white/80 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">UI/UX Design & React Development</p>
              </div>
            </div>
            <div class="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted cursor-pointer">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <h3 class="text-white text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">E-Commerce Platform</h3>
                <p class="text-white/80 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Full-stack Next.js</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    ${footer}`
  },
  {
    id: 'saas-landing',
    title: 'SaaS Startup',
    html: `${nav}
    <main>
      <section class="py-32 bg-background relative overflow-hidden">
        <div class="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>
        <div class="container mx-auto px-4 text-center relative z-10">
          <div class="inline-block border border-border rounded-full px-4 py-1.5 text-sm font-medium bg-muted/50 text-muted-foreground mb-8">
            🎉 Announcing our $10M Series A Round
          </div>
          <h1 class="text-6xl md:text-8xl font-bold tracking-tight mb-8">The modern way to <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">build software.</span></h1>
          <p class="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">Streamline your development workflow with our intelligent platform that automates the tedious parts of coding.</p>
          <div class="flex justify-center gap-4">
            <button class="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:-translate-y-1">Start Building Free</button>
            <button class="bg-card border border-border hover:bg-muted text-foreground px-8 py-4 rounded-xl font-bold text-lg transition-all">Book Demo</button>
          </div>
          <p class="text-sm text-muted-foreground mt-4">No credit card required. 14-day free trial.</p>
          
          <div class="mt-20 relative mx-auto max-w-5xl">
            <div class="rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
              <div class="h-10 bg-muted/50 border-b border-border flex items-center px-4 gap-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" class="w-full object-cover opacity-90" />
            </div>
          </div>
        </div>
      </section>
      
      <section class="py-24 bg-muted/30 border-y border-border">
        <div class="container mx-auto px-4 text-center">
          <p class="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-8">Trusted by innovative teams worldwide</p>
          <div class="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
            <h3 class="text-2xl font-bold">Acme Corp</h3>
            <h3 class="text-2xl font-bold font-serif">Globex</h3>
            <h3 class="text-2xl font-bold italic">Initech</h3>
            <h3 class="text-2xl font-black">Umbrella</h3>
            <h3 class="text-2xl font-bold tracking-widest">SOYUZ</h3>
          </div>
        </div>
      </section>
    </main>
    ${footer}`
  },
  {
    id: 'project-launch',
    title: 'Product Launch/Waitlist',
    html: `${nav}
    <main class="min-h-screen bg-black text-white flex items-center relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-black to-black"></div>
      <div class="container mx-auto px-4 relative z-10 py-32 text-center">
        <div class="w-24 h-24 bg-indigo-600 rounded-3xl rotate-12 mx-auto mb-10 flex items-center justify-center shadow-[0_0_50px_rgba(79,70,229,0.5)]">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        </div>
        <h1 class="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">Something incredible<br/>is coming.</h1>
        <p class="text-xl text-white/60 mb-12 max-w-2xl mx-auto">We're building a revolutionary tool that will change how teams collaborate. Join the waitlist to get early access.</p>
        
        <form class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-12">
          <input type="email" placeholder="name@company.com" class="flex-1 h-14 px-6 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 backdrop-blur" required />
          <button type="submit" class="h-14 px-8 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-colors shadow-lg">Join Waitlist</button>
        </form>
        
        <div class="flex items-center justify-center gap-4 text-sm text-white/50">
          <div class="flex -space-x-2">
            <img class="w-8 h-8 rounded-full border-2 border-black" src="https://i.pravatar.cc/100?u=a" />
            <img class="w-8 h-8 rounded-full border-2 border-black" src="https://i.pravatar.cc/100?u=b" />
            <img class="w-8 h-8 rounded-full border-2 border-black" src="https://i.pravatar.cc/100?u=c" />
          </div>
          <p>Join 10,000+ others already on the list.</p>
        </div>
      </div>
    </main>`
  },
  {
    id: 'event',
    title: 'Event/Conference',
    html: `${nav}
    <main>
      <section class="relative py-32 bg-indigo-950 overflow-hidden text-white">
        <div class="absolute right-0 top-0 w-1/2 h-full bg-indigo-900 skew-x-12 translate-x-32 hidden md:block"></div>
        <div class="container mx-auto px-4 relative z-10">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-indigo-200 mb-8 backdrop-blur">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            October 15-17, 2026 • San Francisco, CA
          </div>
          <h1 class="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-none">Design<br/><span class="text-indigo-400">Futures</span><br/>Summit</h1>
          <p class="text-xl text-indigo-200 max-w-xl mb-10">Three days of talks, workshops, and networking with the brightest minds in digital product design.</p>
          <div class="flex gap-4">
            <button class="bg-white text-indigo-950 px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-50 transition-colors">Buy Tickets</button>
            <button class="bg-indigo-800/50 hover:bg-indigo-800 border border-indigo-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors backdrop-blur">View Schedule</button>
          </div>
        </div>
      </section>
      <section class="py-24 bg-background">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-end mb-12">
            <h2 class="text-4xl font-bold">Featured Speakers</h2>
            <a href="#" class="text-primary font-bold hover:underline hidden md:block">View all speakers &rarr;</a>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div class="group cursor-pointer">
              <div class="overflow-hidden rounded-2xl mb-4 bg-muted aspect-square">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" />
              </div>
              <h3 class="text-xl font-bold">Sarah Jenkins</h3>
              <p class="text-muted-foreground">VP Design, TechCorp</p>
            </div>
            <div class="group cursor-pointer">
              <div class="overflow-hidden rounded-2xl mb-4 bg-muted aspect-square">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" />
              </div>
              <h3 class="text-xl font-bold">Marcus Chen</h3>
              <p class="text-muted-foreground">Founder, DesignStudio</p>
            </div>
            <div class="group cursor-pointer">
              <div class="overflow-hidden rounded-2xl mb-4 bg-muted aspect-square">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" />
              </div>
              <h3 class="text-xl font-bold">Elena Rodriguez</h3>
              <p class="text-muted-foreground">Lead UX, StartupInc</p>
            </div>
            <div class="group cursor-pointer">
              <div class="overflow-hidden rounded-2xl mb-4 bg-muted aspect-square">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" />
              </div>
              <h3 class="text-xl font-bold">David Kim</h3>
              <p class="text-muted-foreground">Author, "The Future UI"</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    ${footer}`
  },
  {
    id: 'product-page',
    title: 'Product Information',
    html: `${nav}
    <main class="bg-background">
      <div class="container mx-auto px-4 py-12">
        <div class="text-sm text-muted-foreground mb-8">
          <a href="#" class="hover:text-foreground">Home</a> / <a href="#" class="hover:text-foreground">Electronics</a> / <span class="text-foreground">Premium Wireless Headphones</span>
        </div>
        
        <div class="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div class="space-y-4">
            <div class="rounded-2xl overflow-hidden bg-muted aspect-square">
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80" class="w-full h-full object-cover mix-blend-multiply" />
            </div>
            <div class="grid grid-cols-4 gap-4">
              <div class="rounded-lg overflow-hidden bg-muted aspect-square cursor-pointer border-2 border-primary">
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80" class="w-full h-full object-cover" />
              </div>
              <div class="rounded-lg overflow-hidden bg-muted aspect-square cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                <img src="https://images.unsplash.com/photo-1524143986875-3b098d78b363?w=200&q=80" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          
          <div class="flex flex-col">
            <h1 class="text-4xl font-bold mb-2">Premium Noise-Cancelling Headphones</h1>
            <div class="flex items-center gap-2 mb-6">
              <div class="flex text-yellow-400">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
              <span class="text-sm font-medium">(128 Reviews)</span>
            </div>
            <div class="text-3xl font-bold mb-6">$349.00</div>
            <p class="text-muted-foreground mb-8">Experience industry-leading active noise cancellation with immersive spatial audio. Designed for all-day comfort with up to 30 hours of battery life.</p>
            
            <div class="mb-8">
              <h3 class="font-semibold mb-3">Color: Matte Black</h3>
              <div class="flex gap-3">
                <button class="w-10 h-10 rounded-full bg-black ring-2 ring-primary ring-offset-2 ring-offset-background"></button>
                <button class="w-10 h-10 rounded-full bg-slate-200 border"></button>
                <button class="w-10 h-10 rounded-full bg-blue-900 border"></button>
              </div>
            </div>
            
            <div class="flex gap-4 mt-auto">
              <div class="border border-input rounded-md flex items-center">
                <button class="px-4 py-2 hover:bg-muted">-</button>
                <span class="px-4 font-medium">1</span>
                <button class="px-4 py-2 hover:bg-muted">+</button>
              </div>
              <button class="flex-1 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 transition-colors">Add to Cart</button>
              <button class="w-12 h-12 border border-input rounded-md flex items-center justify-center hover:bg-muted">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    ${footer}`
  }
];

const generateTemplates = () => {
  const pagesDir = path.join(__dirname, 'src', 'pages', 'preview');
  ensureDir(pagesDir);

  const mdxDir = path.join(__dirname, 'src', 'content', 'templates');
  ensureDir(mdxDir);

  templates.forEach(t => {
    // Write Astro Page
    const astroContent = `---
import '../../styles/global.css';
---
<!DOCTYPE html>
<html lang="en" class="antialiased">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t.title} | ToolMate UI</title>
</head>
<body class="bg-background text-foreground min-h-screen">
  ${t.html}
</body>
</html>`;

    fs.writeFileSync(path.join(pagesDir, `${t.id}.astro`), astroContent);

    // Update MDX file
    const mdxContent = `---
title: "${t.title}"
description: "Production ready ${t.title.toLowerCase()}."
category: "Landing Pages"
---

import TemplatePreview from '../../components/mdx/TemplatePreview.astro';

## Preview

<TemplatePreview url="/preview/${t.id}" />

## Overview
This is a full-page production-ready template that you can copy and deploy immediately. It uses pure Tailwind CSS.

## Features
- Fully responsive design
- Accessible semantic HTML
- Tailwind CSS utility classes
- Modern aesthetic

## Installation

You can implement this template simply by copying the source code from the Preview block above.
`;
    fs.writeFileSync(path.join(mdxDir, `${t.id}.mdx`), mdxContent);
  });

  console.log('Templates Phase 3 generated successfully!');
};

generateTemplates();
