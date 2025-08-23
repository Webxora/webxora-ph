import { z } from "zod"

export const initValues = {
    name: "",
    email: "",
    message: ""
}

export const contactSchema = z.object({
    name: z.string({ error: "Please enter your fullname" }).min(1),
    email: z.string({ error: "Please enter your email" }).email(),
    message: z.string({ error: "Please enter your message" }).min(8),
})

export type ContactFormValues = z.infer<typeof contactSchema>