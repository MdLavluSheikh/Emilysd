"use client"

import { useState, FormEvent } from "react"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [msg, setMsg] = useState("")

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setMsg("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus("success")
        setMsg("Message sent! I'll get back to you soon.")
        setForm({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
        setMsg(data.error || "Something went wrong.")
      }
    } catch {
      setStatus("error")
      setMsg("Network error. Please try again.")
    }
  }

  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Get in <span className="text-gradient">touch</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-zinc-400">
            Have a suggestion, question, or just want to say hi? I&apos;d love to hear from
            you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              type="text"
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-emily-500/50 focus:ring-1 focus:ring-emily-500/30"
            />
            <input
              type="email"
              required
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-emily-500/50 focus:ring-1 focus:ring-emily-500/30"
            />
          </div>
          <textarea
            required
            rows={5}
            placeholder="Your message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-emily-500/50 focus:ring-1 focus:ring-emily-500/30"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-xl bg-gradient-to-r from-emily-600 to-pink-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-emily-500/25 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
          {msg && (
            <p className={`text-center text-sm ${status === "success" ? "text-emerald-400" : "text-red-400"}`}>
              {msg}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
