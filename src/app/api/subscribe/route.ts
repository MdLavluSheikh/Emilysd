import { NextResponse } from "next/server"
import { sendNewsletterConfirmation } from "@/lib/ses"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    await sendNewsletterConfirmation(email)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Subscribe error:", error)

    if (error?.name === "MessageRejected") {
      return NextResponse.json(
        { error: "SES is in sandbox mode. Verify the recipient email or request production access." },
        { status: 403 }
      )
    }

    return NextResponse.json(
      { error: "Failed to send confirmation. Check SES configuration." },
      { status: 500 }
    )
  }
}
