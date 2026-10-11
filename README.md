# ToolMate UI

<p align="center">
  <strong>Production-Ready Tailwind CSS Component & Template Library</strong>
</p>

<p align="center">
  Free, open-source, accessible, and copy-and-paste UI components, section layouts, and full-page templates.
  Zero npm dependencies. No runtime bloat. Full source code ownership.
</p>

---

## ⚡ Features

- **Copy, Paste & Own**: Delivered as clean source code. No third-party npm runtime lock-in.
- **Multi-Framework Native**: Ready-to-use snippets for **React**, **Next.js**, **Astro**, **Vue 3**, **Svelte**, and plain **HTML**.
- **100% Tailwind CSS**: Styled entirely using modern utility classes and CSS variables. Fully compatible with Tailwind CSS v3 and v4.
- **Accessible Primitives**: Built following WAI-ARIA best practices and semantic HTML.
- **Full Dark Mode**: Smooth dark theme support out-of-the-box with CSS custom properties.
- **Responsive by Default**: Mobile, tablet, and desktop viewports tested on all components and sections.

---

## 📦 What's Included

- **200+ UI Components**: Buttons, Cards, Inputs, Dialogs, Tabs, Badges, Avatars, Checkboxes, Accordions, and more.
- **100+ Section Variations**: High-converting Hero headers, Feature matrices, Pricing tables, Testimonials, FAQ accordions, Navbars, and Footers.
- **12+ Website Templates**: Production-ready landing pages (SaaS Startup, E-Commerce, Portfolios, Mobile App, Event, and Corporate).
- **Framework Setup Guides**: Step-by-step setup documentation for Next.js, React + Vite, Astro, Vue, Angular, and HTML.

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/prahladinala/Toolmate-UI.git
cd Toolmate-UI
npm install
```

### 2. Run Locally

```bash
npm run dev
```

Visit `http://localhost:4321` in your browser.

### 3. Build for Production

```bash
npm run build
```

This generates a static build into `./dist` and indexes the site with **Pagefind**.

---

## 📁 Project Structure

```text
├── public/                 # Static assets & security headers
│   ├── _headers            # Cloudflare/Netlify CSP & security headers
│   └── favicon.svg         # Favicon
├── src/
│   ├── components/         # Global layout components (Navbar, Footer, Sidebar, etc.)
│   ├── content/            # MDX documentation & component documentation
│   │   ├── components/     # Component docs
│   │   ├── docs/           # Framework setup guides
│   │   ├── sections/       # Section layout docs
│   │   └── templates/      # Website template docs
│   ├── layouts/            # BaseLayout & DocsLayout
│   ├── pages/              # Astro static routes & live previews (/preview/*)
│   ├── registry/           # Multi-framework source code registry (HTML, React, Astro, Vue, Svelte)
│   └── styles/             # Global Tailwind CSS and CSS variables
├── astro.config.mjs        # Astro configuration with Tailwind & MDX
├── vercel.json             # Vercel deployment headers
└── package.json            # Scripts & dependencies
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Creator

Built with ❤️ by **[Prahlad Inala](https://github.com/prahladinala)**.
