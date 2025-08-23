"use server"

import { contactSchema, ContactFormValues } from "@/schemas/contact.schema"

export async function submitContact(values: ContactFormValues) {
    // ✅ validate again on server (security)
    const parsed = contactSchema.parse(values)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log("submitted:", values)

    // Example: send to external API
    //   const res = await fetch("https://api.example.com/contact", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(parsed),
    //   })

    //   if (!res.ok) {
    //     throw new Error("Failed to send contact form")
    //   }

    return { success: true }
}
