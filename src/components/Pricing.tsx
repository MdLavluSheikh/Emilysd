const plans = [
  {
    name: "Starter",
    price: "Free",
    desc: "Perfect for testing the waters.",
    features: ["Up to 500 emails/mo", "Basic templates", "Single user", "Email support"],
  },
  {
    name: "Growth",
    price: "$19",
    desc: "For growing businesses.",
    popular: true,
    features: [
      "Up to 10,000 emails/mo",
      "All templates",
      "5 team members",
      "A/B testing",
      "Analytics dashboard",
    ],
  },
  {
    name: "Scale",
    price: "$49",
    desc: "For high-volume senders.",
    features: [
      "Up to 50,000 emails/mo",
      "Custom templates",
      "Unlimited team members",
      "Priority support",
      "Advanced analytics",
      "Dedicated IP (SES)",
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Simple, transparent <span className="text-gradient">pricing</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            No hidden fees. Pay only for what you need.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 transition-all ${
                plan.popular
                  ? "border-emily-500/40 bg-emily-950/20 shadow-lg shadow-emily-500/10"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-emily-600 to-pink-500 px-4 py-1 text-xs font-medium">
                  Most Popular
                </span>
              )}

              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-1 text-sm text-zinc-400">{plan.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Free" && <span className="text-sm text-zinc-400">/mo</span>}
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-zinc-300">
                    <svg className="h-4 w-4 shrink-0 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#newsletter"
                className={`mt-8 flex w-full items-center justify-center rounded-xl py-3 text-sm font-semibold transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-emily-600 to-pink-500 text-white hover:scale-105 hover:shadow-lg hover:shadow-emily-500/25"
                    : "border border-white/20 text-white hover:bg-white/5"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
