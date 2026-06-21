import { NextResponse } from "next/server"
import { sendContactNotification } from "@/lib/ses"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    await sendContactNotification({ name, email, message })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Contact error:", error)

    if (error?.name === "MessageRejected") {
      return NextResponse.json(
        { error: "SES is in sandbox mode. Verify emails or request production access." },
        { status: 403 }
      )
    }

    return NextResponse.json(
      { error: "Failed to send message. Check SES configuration." },
      { status: 500 }
    )
  }
}
