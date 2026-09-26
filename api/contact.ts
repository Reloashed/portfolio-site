import type { VercelRequest, VercelResponse } from "@vercel/node"
import { Resend } from "resend"

const recipient = "contact@resh.video"
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function isValidDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false

  const [year, month, day] = value.split("-").map(Number)
  const parsedDate = new Date(Date.UTC(year, month - 1, day))
  return parsedDate.getUTCFullYear() === year
    && parsedDate.getUTCMonth() === month - 1
    && parsedDate.getUTCDate() === day
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST")
    return res.status(405).json({ error: "Method not allowed" })
  }

  const body = req.body as Record<string, unknown> | undefined
  if (!body || typeof body !== "object") {
    return res.status(400).json({ error: "Invalid request" })
  }

  if (typeof body.website === "string" && body.website.trim()) {
    return res.status(200).json({ ok: true })
  }

  const fields = ["name", "email", "organisation", "projectType", "date", "location", "description"] as const
  const values = Object.fromEntries(
    fields.map((field) => [field, typeof body[field] === "string" ? body[field].trim() : ""])
  )

  if (!values.name || !values.email || !values.projectType || !values.date || !values.description) {
    return res.status(400).json({ error: "Please complete all required fields" })
  }

  if (!emailPattern.test(values.email) || values.email.length > 254) {
    return res.status(400).json({ error: "Please provide a valid email address" })
  }

  if (values.name.length > 120 || values.organisation.length > 200
    || values.projectType.length > 100 || values.location.length > 200
    || values.description.length > 5000 || !isValidDate(values.date)) {
    return res.status(400).json({ error: "One or more fields are invalid" })
  }

  const apiKey = process.env.RESEND_API_KEY
  const sender = process.env.RESEND_FROM_EMAIL
  if (!apiKey || !sender) {
    console.error("Contact email is not configured: set RESEND_API_KEY and RESEND_FROM_EMAIL")
    return res.status(500).json({ error: "Email service is not configured" })
  }

  const safeName = values.name.replace(/[\r\n]+/g, " ")
  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from: sender,
    to: recipient,
    replyTo: values.email,
    subject: `New project inquiry from ${safeName}`,
    text: [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Team / Organisation: ${values.organisation || "Not provided"}`,
      `Project type: ${values.projectType}`,
      `Project date: ${values.date || "Not provided"}`,
      `Location: ${values.location || "Not provided"}`,
      "",
      "Project description:",
      values.description,
    ].join("\n"),
  })

  if (error) {
    console.error("Resend failed to send contact inquiry", error)
    return res.status(502).json({ error: "Unable to send inquiry" })
  }

  return res.status(200).json({ ok: true })
}