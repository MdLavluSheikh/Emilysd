import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Emily's Newsletter – Weekly Insights",
  description:
    "A weekly newsletter covering email marketing, growth tips, and industry insights. Join 30,000+ subscribers.",
  keywords: "newsletter, email marketing, weekly newsletter, insights",
  openGraph: {
    title: "Emily's Newsletter – Weekly Insights",
    description: "Weekly insights on email marketing and growth.",
    siteName: "emilys.site",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
