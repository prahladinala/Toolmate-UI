<section className="py-12 md:py-24 max-w-md mx-auto w-full">
  <div className="space-y-6">
    <div className="space-y-2 text-center">
      <h2 className="text-3xl font-bold tracking-tighter">Contact Us</h2>
      <p className="text-muted-foreground">We'll get back to you as soon as possible.</p>
    </div>
    <form className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="first-name">First name</label>
          <input id="first-name" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm" placeholder="John" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="last-name">Last name</label>
          <input id="last-name" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm" placeholder="Doe" />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="email">Email</label>
        <input id="email" type="email" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm" placeholder="john@example.com" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="message">Message</label>
        <textarea id="message" className="flex min-h-[100px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm" placeholder="How can we help you?"></textarea>
      </div>
      <button className="w-full inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 h-9">Send Message</button>
    </form>
  </div>
</section>