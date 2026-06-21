"use client"

import { useState, FormEvent } from "react"

export default function Subscribe() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setMessage("")

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus("success")
        setMessage("You're in! Check your inbox for the confirmation.")
        setEmail("")
      } else {
        setStatus("error")
        setMessage(data.error || "Something went wrong.")
      }
    } catch {
      setStatus("error")
      setMessage("Network error. Try again later.")
    }
  }

  return (
    <section id="subscribe" className="relative px-6 py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-emily-900/10 via-black to-black" />

      <div className="relative mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-4 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          It&apos;s completely free
        </div>

        <h2 className="text-3xl font-bold sm:text-4xl">
          Join <span className="text-gradient">30,000+</span> subscribers
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400">
          One email every Monday. No spam, no fluff. Unsubscribe anytime.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="flex-1 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-all focus:border-emily-500/50 focus:ring-1 focus:ring-emily-500/30"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-xl bg-gradient-to-r from-emily-600 to-pink-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-emily-500/25 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Subscribe"}
          </button>
        </form>

        <p className="mt-4 text-xs text-zinc-600">
          No spam. Unsubscribe with one click.
        </p>

        {message && (
          <p
            className={`mt-6 text-sm ${
              status === "success" ? "text-emerald-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  )
}
