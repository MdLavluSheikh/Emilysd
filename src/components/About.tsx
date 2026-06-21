export default function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              What&apos;s <span className="text-gradient">Emily&apos;s Newsletter</span>?
            </h2>
            <p className="mt-6 leading-relaxed text-zinc-400">
              Emily&apos;s Newsletter is a weekly email that delivers hand-picked insights on
              email marketing, growth hacking, and digital tools. No fluff, no spam — just
              actionable content you can use right away.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-400">
              Each issue takes about 3 minutes to read and includes one key strategy, two
              useful tools, and three curated links. Everything you need to stay ahead.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { label: "Email Marketing Tips", desc: "Proven strategies" },
                { label: "Growth Hacks", desc: "Scale your audience" },
                { label: "Tool Reviews", desc: "Honest recommendations" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emily-600/20 to-pink-500/20">
                    <svg className="h-5 w-5 text-emily-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-sm text-zinc-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-emily-600/20 via-transparent to-transparent" />
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-emily-600 to-pink-500 text-sm font-bold">
                  E
                </div>
                <div>
                  <p className="text-sm font-medium">Emily&apos;s Newsletter</p>
                  <p className="text-xs text-zinc-500">Issue #42</p>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <div className="h-3 w-3/4 rounded bg-white/10" />
                <div className="h-3 w-1/2 rounded bg-white/10" />
                <div className="mt-4 h-3 w-full rounded bg-white/10" />
                <div className="h-3 w-5/6 rounded bg-white/10" />
                <div className="h-3 w-4/6 rounded bg-white/10" />
                <div className="mt-4 h-3 w-full rounded bg-white/10" />
                <div className="h-3 w-3/4 rounded bg-white/10" />
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs text-zinc-500">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                New issue every Monday
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
