import { z } from "zod";

const stripTags = (value: string) =>
  value.replace(/<\/?[^>]+(>|$)/g, ""); // remove HTML tags

export const initValues = {
  name: "",
  email: "",
  message: "",
};

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Full name is required.")
    .transform(stripTags),
  email: z
    .string()
    .min(1, "Email address is required.")
    .email("Please enter a valid email address.")
    .transform(stripTags),
  message: z
    .string()
    .min(8, "Message must be at least 8 characters.")
    .transform(stripTags),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
