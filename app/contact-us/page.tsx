import ContactForm from "@/components/contact/ContactForm";
import Image from "next/image";

export default function ContactPage() {
    return (
        <section className="min-h-screen bg-[url('/images/grid-gradient.png')] bg-cover bg-bottom sm:bg-contain">
            <div className="min-h-screen max-w-[1440px] px-[10px] mx-auto flex items-center justify-center">
                <div className="text-white space-y-14 w-[486px] pt-9">
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
