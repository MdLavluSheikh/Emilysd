"use client"

import { useState } from "react"
import Link from "next/link"

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Posts", href: "/#posts" },
  { label: "Issues", href: "/issues" },
  { label: "Privacy", href: "/privacy" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-gradient">emily&apos;s</span>
          <span className="ml-2 text-xs text-zinc-500">newsletter</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#subscribe"
            className="rounded-full bg-gradient-to-r from-emily-600 to-pink-500 px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Subscribe
          </Link>
        </div>

        <button
          className="p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#subscribe"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gradient-to-r from-emily-600 to-pink-500 px-5 py-2 text-center text-sm font-medium text-white"
            >
              Subscribe
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
