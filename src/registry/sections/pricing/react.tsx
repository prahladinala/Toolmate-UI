<section className="py-12 md:py-24 max-w-5xl mx-auto w-full px-4">
  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, transparent pricing</h2>
    <p className="text-muted-foreground md:text-xl mt-4">No hidden fees. Cancel anytime.</p>
  </div>
  <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
    {/* Free Tier */}
    <div className="rounded-xl border border-border bg-card text-card-foreground shadow flex flex-col p-6">
      <h3 className="font-bold text-2xl">Starter</h3>
      <p className="text-muted-foreground text-sm mt-2">Perfect for side projects.</p>
      <div className="mt-4 flex items-baseline text-4xl font-extrabold">
        $0 <span className="ml-1 text-xl font-medium text-muted-foreground">/mo</span>
      </div>
      <ul className="mt-6 space-y-3 flex-1">
        <li className="flex items-center text-sm"><svg className="mr-2 h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>1 Project</li>
        <li className="flex items-center text-sm"><svg className="mr-2 h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>Community Support</li>
      </ul>
      <button className="mt-8 w-full inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground h-10">Get Started</button>
    </div>
    {/* Pro Tier */}
    <div className="rounded-xl border-2 border-primary bg-card text-card-foreground shadow flex flex-col p-6 relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
        <span className="inline-flex items-center rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">Popular</span>
      </div>
      <h3 className="font-bold text-2xl">Pro</h3>
      <p className="text-muted-foreground text-sm mt-2">For professional developers.</p>
      <div className="mt-4 flex items-baseline text-4xl font-extrabold">
        $29 <span className="ml-1 text-xl font-medium text-muted-foreground">/mo</span>
      </div>
      <ul className="mt-6 space-y-3 flex-1">
        <li className="flex items-center text-sm"><svg className="mr-2 h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>Unlimited Projects</li>
        <li className="flex items-center text-sm"><svg className="mr-2 h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>Priority Support</li>
        <li className="flex items-center text-sm"><svg className="mr-2 h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>Advanced Analytics</li>
      </ul>
      <button className="mt-8 w-full inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 h-10">Subscribe</button>
    </div>
  </div>
</section>