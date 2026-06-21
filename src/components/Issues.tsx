const issues = [
  {
    num: "044",
    title: "The Art of the Welcome Email",
    desc: "Why your first email matters more than anything and how to craft a welcome sequence that converts.",
    date: "Jun 18, 2026",
    readTime: "3 min",
  },
  {
    num: "043",
    title: "Segmentation Secrets",
    desc: "Stop blasting everyone. Learn how to segment your list like a pro for 3x better engagement.",
    date: "Jun 11, 2026",
    readTime: "4 min",
  },
  {
    num: "042",
    title: "Subject Lines That Get Clicks",
    desc: "The psychology behind high-opening subject lines. Plus 20 proven templates to steal.",
    date: "Jun 4, 2026",
    readTime: "3 min",
  },
  {
    num: "041",
    title: "Growing Your List Without Ads",
    desc: "Organic growth strategies that actually work in 2026. No paid traffic required.",
    date: "May 28, 2026",
    readTime: "5 min",
  },
  {
    num: "040",
    title: "Deliverability 101",
    desc: "Why your emails land in spam and exactly how to fix it — the complete checklist.",
    date: "May 21, 2026",
    readTime: "4 min",
  },
  {
    num: "039",
    title: "Automation Without the Overwhelm",
    desc: "Three simple automation flows every newsletter should have (and how to set them up).",
    date: "May 14, 2026",
    readTime: "3 min",
  },
]

export default function Issues() {
  return (
    <section id="issues" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Recent <span className="text-gradient">Issues</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Browse through past editions. Every issue is packed with actionable insights.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {issues.map((issue) => (
            <a
              key={issue.num}
              href="#"
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-emily-500/30 hover:bg-white/[0.06]"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-emily-400/60">#{issue.num}</span>
                <span className="rounded-full border border-white/10 px-3 py-0.5 text-[10px] text-zinc-500">
                  {issue.readTime}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold group-hover:text-emily-300 transition-colors">
                {issue.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">{issue.desc}</p>
              <p className="mt-4 text-xs text-zinc-600">{issue.date}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white/5">
            View All Issues
          </button>
        </div>
      </div>
    </section>
  )
}
