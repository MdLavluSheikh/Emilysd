const posts = [
  {
    title: "How to Build a Newsletter from Scratch in 2026",
    excerpt: "A step-by-step guide to launching your own newsletter — from choosing a platform to getting your first 100 subscribers.",
    date: "Jun 15, 2026",
    readTime: "6 min",
    tag: "Guide",
  },
  {
    title: "10 Email Subject Lines That Got 50%+ Open Rates",
    excerpt: "Real subject lines from real campaigns. Steal these for your next send.",
    date: "Jun 10, 2026",
    readTime: "4 min",
    tag: "Tips",
  },
  {
    title: "Why You Should Start a Newsletter in 2026",
    excerpt: "Email is making a comeback. Here's why now is the best time to start your own newsletter.",
    date: "Jun 5, 2026",
    readTime: "5 min",
    tag: "Thoughts",
  },
  {
    title: "The Best Email Marketing Tools Compared",
    excerpt: "I tested 12 email marketing tools so you don't have to. Here are the top 5.",
    date: "May 28, 2026",
    readTime: "8 min",
    tag: "Review",
  },
  {
    title: "How I Grew My Newsletter to 30K Subscribers",
    excerpt: "The exact strategies I used to grow from 0 to 30,000 subscribers in 18 months.",
    date: "May 20, 2026",
    readTime: "7 min",
    tag: "Case Study",
  },
  {
    title: "Email Deliverability: The Complete Checklist",
    excerpt: "Everything you need to check before hitting send. No more spam folders.",
    date: "May 12, 2026",
    readTime: "5 min",
    tag: "Checklist",
  },
]

export default function RecentPosts() {
  return (
    <section id="posts" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Recent <span className="text-gradient">Posts</span>
            </h2>
            <p className="mt-4 max-w-xl text-zinc-400">
              Articles, guides, and resources to help you master email marketing.
            </p>
          </div>
          <a
            href="#"
            className="hidden rounded-full border border-white/20 px-6 py-2 text-sm font-medium text-white transition-all hover:bg-white/5 sm:inline-block"
          >
            View All
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.title}
              href="#"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-emily-500/30 hover:bg-white/[0.06]"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-emily-950/60 px-3 py-1 text-[10px] font-medium text-emily-300">
                  {post.tag}
                </span>
                <span className="text-[10px] text-zinc-600">{post.readTime}</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold group-hover:text-emily-300 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">{post.excerpt}</p>
              <p className="mt-4 text-xs text-zinc-600">{post.date}</p>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <a
            href="#"
            className="inline-block rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-white/5"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  )
}
