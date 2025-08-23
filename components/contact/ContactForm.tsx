"use client"

import { submitContact } from "@/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactFormValues, contactSchema, initValues } from "@/schemas/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";

export default function ContactForm() {
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: initValues
    })
    const onSubmit = async (data: ContactFormValues) => {
        try {
            await submitContact(data) // server action
            alert("✅ Message sent successfully!")
            form.reset()
        } catch (err) {
            console.log(err);
            alert("❌ Failed to send message")
        }
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                <Controller
                    name="name"
                    control={form.control}
                    render={({ field }) => (
                        <div className="flex flex-col space-y-1">
                            <div className="flex flex-col space-y-3">
                                <label className="text-[15px]">Your name</label>
                                <Input
                                    type="text"
                                    placeholder="John Doe"
                                    className="border border-[#2A32A4] bg-[#1A003E]/50 text-[#CBCBCB] hover:bg-white hover:text-black transition-all duration-600"
                                    {...field}
                                />
                            </div>
                            <span className="text-[13px] text-red-500">{form.formState.errors.name?.message}</span>
                        </div>
                    )}
                />
                <Controller
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                        <div className="flex flex-col space-y-1">
                            <div className="flex flex-col space-y-3">
                                <label className="text-[15px]">Email Address</label>
                                <Input
                                    type="email"
                                    placeholder="xora@gmail.com"
                                    className="border border-[#2A32A4] bg-[#1A003E]/50 text-[#CBCBCB] hover:bg-white hover:text-black transition-all duration-600"
                                    {...field}
                                />
                            </div>
                            <span className="text-[13px] text-red-500">{form.formState.errors.email?.message}</span>
                        </div>
                    )}
                />
                <Controller
                    name="message"
                    control={form.control}
                    render={({ field }) => (
                        <div className="flex flex-col space-y-1 sm:col-span-2">
                            <div className="flex flex-col space-y-3">
                                <label className="text-[15px]">Message</label>
                                <Textarea
                                    placeholder="Your Message..."
                                    className="border border-[#2A32A4] bg-[#1A003E]/50 h-[160px] resize-none hover:bg-white hover:text-black transition-all duration-600"
                                    {...field}
                                />
                            </div>
                            <span className="text-[13px] text-red-500">{form.formState.errors.message?.message}</span>
                        </div>
                    )}
                />
            </div>
            <Button
                className="rounded-none h-[54px] w-full"
                variant="style1"
                disabled={form.formState.isSubmitting}
            >
                {form.formState.isSubmitting ? (
                    <>
                        <Loader2Icon className="animate-spin" />
                        Please wait
                    </>
                ) : "Submit"}
            </Button>
        </form>
    )
}