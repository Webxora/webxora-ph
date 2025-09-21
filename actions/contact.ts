"use server";

import { contactSchema, ContactFormValues } from "@/schemas/contact.schema";

export async function submitContact(values: ContactFormValues) {
  const parsed = contactSchema.parse(values);

  const formData = new FormData();
  formData.append("name", parsed.name);
  formData.append("email", parsed.email);
  formData.append("message", parsed.message);

  const res = await fetch(
    `https://script.google.com/macros/s/${process.env.NEXT_PUBLIC_APPSCRIPT_KEY}/exec`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!res.ok) {
    throw new Error("Failed to send contact form");
  }

  const data = await res.json();
  return data; 
}
