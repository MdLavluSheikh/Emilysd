"use client"

import { useState, FormEvent } from "react"

export default function Newsletter() {
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
        setMessage("You're subscribed! Check your inbox for a confirmation.")
        setEmail("")
      } else {
        setStatus("error")
        setMessage(data.error || "Something went wrong. Please try again.")
      }
    } catch {
      setStatus("error")
      setMessage("Network error. Please try again later.")
    }
  }

  return (
    <section id="newsletter" className="relative px-6 py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-emily-900/10 via-black to-black" />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Stay in the <span className="text-gradient">loop</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400">
          Get the latest email marketing tips, tricks, and industry insights delivered to
          your inbox.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
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
