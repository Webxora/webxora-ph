import ContactForm from "@/components/contact/ContactForm";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function ContactPage() {
    return (
        <section className="min-h-screen bg-[url('/images/grid-gradient.png')] bg-cover bg-bottom sm:bg-contain relative">
            <div className="text-white px-[40px] py-[20px] absolute top-0">
                <Link href="/" className="flex items-center text-[1em] gap-4 font-poppins">
                    <Icon icon="ep:arrow-left-bold" width="14" height="14" />
                    Back
                </Link>
            </div>
            <div className="min-h-screen max-w-[1440px] px-[10px] mx-auto flex items-center justify-center">
                <div className="text-white space-y-14 w-[486px]">
                    <Image
                        src="/images/logo.png"
                        alt="Next.js logo"
                        width={136.92}
                        height={42}
                        className="mx-auto"
                        priority
                    />
                    <div className="flex justify-center">
                        <h1 className="text-[32px] font-bold uppercase">Get In Touch</h1>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
