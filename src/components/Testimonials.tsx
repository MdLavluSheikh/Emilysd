const testimonials = [
  {
    quote:
      "This newsletter is the only marketing email I actually look forward to opening. Every issue has something I can use right away.",
    author: "Sarah Chen",
    role: "Founder, Bloom Studio",
  },
  {
    quote:
      "I implemented one strategy from Issue #12 and saw a 40% boost in my open rates. Emily's Newsletter is gold.",
    author: "Marcus Rivera",
    role: "Growth Marketer",
  },
  {
    quote:
      "Short, sweet, and incredibly useful. I've recommended it to my entire team.",
    author: "Priya Patel",
    role: "Product Manager",
  },
]

export default function Testimonials() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            What readers <span className="text-gradient">say</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex gap-1 text-emily-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm font-medium">{t.author}</p>
                <p className="text-xs text-zinc-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
