import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <Link href="/" className="text-lg font-bold tracking-tight">
              <span className="text-gradient">emily&apos;s</span>
              <span className="ml-2 text-xs text-zinc-500">newsletter</span>
            </Link>
            <p className="mt-2 text-sm text-zinc-500">
              Weekly insights delivered to your inbox.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-zinc-500">
            <Link href="/about" className="transition-colors hover:text-zinc-300">
              About
            </Link>
            <Link href="/issues" className="transition-colors hover:text-zinc-300">
              Issues
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-zinc-300">
              Privacy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-zinc-300">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center text-xs leading-relaxed text-zinc-600">
          You are receiving this because you signed up for emilys.site. We respect your inbox.
          You can <Link href="/#subscribe" className="text-zinc-400 underline underline-offset-2 hover:text-white">unsubscribe anytime</Link>{" "}
          or view our{" "}
          <Link href="/privacy" className="text-zinc-400 underline underline-offset-2 hover:text-white">
            Privacy Policy
          </Link>
          .
        </div>

        <div className="mt-4 border-t border-white/5 pt-4 text-center text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} emilys.site. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
