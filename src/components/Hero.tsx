export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-emily-900/20 via-black to-black" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emily-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emily-500/30 bg-emily-950/50 px-4 py-1.5 text-xs font-medium text-emily-300 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Weekly Newsletter
        </div>

        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Insights that{" "}
          <span className="text-gradient">grow your inbox</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          Every week, I share actionable tips on email marketing, growth strategies, and
          tools to help you build a thriving online presence — straight to your inbox.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#subscribe"
            className="rounded-full bg-gradient-to-r from-emily-600 to-pink-500 px-8 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-emily-500/25"
          >
            Subscribe Free
          </a>
          <a
            href="#issues"
            className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white/5"
          >
            Browse Issues
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">30K+</span>
            Subscribers
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">52</span>
            Issues
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">100%</span>
            Free
          </div>
        </div>
      </div>
    </section>
  )
}
