import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses"

const ses = new SESClient({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
})

export async function sendEmail({
  to,
  subject,
  body,
}: {
  to: string
  subject: string
  body: string
}) {
  const from = process.env.SES_FROM_EMAIL

  if (!from) {
    throw new Error("SES_FROM_EMAIL is not configured")
  }

  const command = new SendEmailCommand({
    Source: from,
    Destination: { ToAddresses: [to] },
    Message: {
      Subject: { Data: subject },
      Body: { Html: { Data: body } },
    },
  })

  return ses.send(command)
}

const unsubscribeFooter = `
  <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 24px 0;" />
  <p style="color: #a1a1aa; font-size: 12px; line-height: 1.5;">
    You are receiving this because you signed up at <a href="https://emilys.site" style="color: #d946ef;">emilys.site</a>.
    We respect your inbox.
    <br /><br />
    <a href="https://emilys.site/#subscribe" style="color: #d946ef; text-decoration: underline;">Unsubscribe anytime</a> &middot;
    <a href="https://emilys.site/privacy" style="color: #d946ef; text-decoration: underline;">Privacy Policy</a>
  </p>
`

export async function sendNewsletterConfirmation(email: string) {
  return sendEmail({
    to: email,
    subject: "Welcome to Emily's Newsletter!",
    body: `
      <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto;">
        <h1 style="color: #d946ef;">Welcome to Emily's!</h1>
        <p style="color: #52525b; line-height: 1.6;">Thanks for subscribing to our newsletter. You'll now receive the latest email marketing tips, industry insights, and platform updates straight to your inbox.</p>
        ${unsubscribeFooter}
      </div>
    `,
  })
}

export async function sendContactNotification({
  name,
  email,
  message,
}: {
  name: string
  email: string
  message: string
}) {
  return sendEmail({
    to: process.env.SES_FROM_EMAIL || "",
    subject: `New Contact from ${name}`,
    body: `
      <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto;">
        <h2 style="color: #d946ef;">New Contact Message</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #52525b;"><strong>Name:</strong></td><td style="padding: 8px 0;">${name}</td></tr>
          <tr><td style="padding: 8px 0; color: #52525b;"><strong>Email:</strong></td><td style="padding: 8px 0;">${email}</td></tr>
        </table>
        <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 16px 0;" />
        <p style="color: #52525b; line-height: 1.6;">${message}</p>
        ${unsubscribeFooter}
      </div>
    `,
  })
}
