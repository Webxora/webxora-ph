import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import React, { ComponentType, SVGProps } from "react";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs";

type PagesProps = {
    name: string;
    href: string;
}

type SocMedProps = {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    href: string;
}

const pages: PagesProps[] = [
    // {
    //     name: "Home",
    //     href: "/",
    // },
    // {
    //     name: "About",
    //     href: "/about",
    // },
    // {
    //     name: "Services",
    //     href: "/services",
    // },
    // {
    //     name: "Projects",
    //     href: "/projects",
    // },
    // {
    //     name: "Pricing",
    //     href: "/pricing",
    // },
    // {
    //     name: "Blog",
    //     href: "/blog",
    // },
];

const socMed: SocMedProps[] = [
    {
        icon: BsTiktok,
        href: "/"
    },
    {
        icon: BsFacebook,
        href: "/"
    },
    {
        icon: BsInstagram,
        href: "/"
    }
]

export default function ContactUsSection() {
    return (
        <React.Fragment>
            <div className="relative">
                <section className="relative min-h-screen">
                    <div className={`absolute inset-0 bg-[url('/images/stars.png')] bg-contain bg-top brightness-[0.7] contrast-[1.3]`} />
                    <div className="absolute w-full bottom-0 h-[531.08px] bg-gradient-to-t from-[#08237E] to-[#00151F]/1" />
                    <div className="absolute inset-0">
                        <div className="min-h-screen flex items-center justify-center">
                            <div className="flex flex-col text-white text-center space-y-7">
                                <h1 className="font-medium text-[96px] font-poppins">Let’s Work Together</h1>
                                <p className="text-[15px] text-center">
                                    I can listen and work with you whether you’re seeking for a partner to help you develop your brand, explore new <br />
                                    ideas, or just need someone to bounce ideas off of.
                                </p>
                                <div className="pt-3 flex justify-center">
                                    <Link
                                        href="/contact-us"
                                        className="bg-white h-[71px] w-[199px] font-semibold text-black rounded-full text-[20px] flex items-center justify-center">
                                        Contact Now
                                        <ArrowRightIcon className="ml-3" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <div className="absolute bottom-0 w-full h-[660px] bg-gradient-to-t from-[#0118C8] to-[#0B285E]" /> */}
                <section className="absolute w-full bg-[#08237E] min-h-screen pt-24">
                    <div className="max-w-[1440px] px-[10px] mx-auto space-y-17 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-7">
                            <div className="lg:col-span-4">
                                <div>
                                    <Image
                                        src="/images/logo.png"
                                        alt="WEBXORA logo"
                                        width={251}
                                        height={77}
                                        priority

                                    />
                                    <div className="space-y-6 mt-8">
                                        <p className="text-[15px] text-[#FCFCFC]">
                                            Join our newsletter to stay up to date on features and releases.
                                        </p>
                                        <div className="flex space-x-3 items-center">
                                            <input
                                                className="bg-[#003FBC] border border-[#FFFFFF] text-white w-[274px] h-[38px] rounded-[10px] px-3"
                                                placeholder="Enter your Email"
                                            />
                                            <button className="border border-white rounded-full w-[117px] h-[38px] text-white">
                                                Subscribe
                                            </button>
                                        </div>
                                        <p className="text-[11px] text-[#D7D7D7]">
                                            By subscribing you agree with our <Link href="/" className="text-[#E1E1E1] font-bold">Privacy Policy</Link> and provide consent to receive <br />
                                            updates from our company.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-white text-[15px] space-y-7 pt-14">
                                {/* <p className="font-semibold font-poppins">Pages</p> */}
                                <ul className="space-y-7 font-light">
                                    {pages.map((item, index) => (
                                        <li key={index}>
                                            <Link href={item.href} >{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="text-white text-[15px] space-y-7 pt-14">
                                {/* <p className="font-semibold font-poppins">Pages</p> */}
                                <ul className="space-y-7 font-light">
                                    {pages.map((item, index) => (
                                        <li key={index}>
                                            <Link href={item.href} >{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="text-white text-[15px] space-y-7 pt-14">
                                <p className="font-semibold font-poppins">Follow Us</p>
                                <div className="flex space-x-7">
                                    {socMed.map((item, index) => (
                                        <Link key={index} href={item.href}>
                                            <item.icon className="h-[15px] w-[15.31px]" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <Marquee pauseOnHover className="[--duration:60s]">
                                <h1 className="font-progress-personal-use text-[75px] text-white">
                                    IT’S AUTOMATED GO TO SLEEP
                                </h1>
                            </Marquee>
                        </div>
                        <div className="flex justify-between pb-7">
                            <p className="text-[13px] text-[#FCFCFC]">Copyright © 2025 WebXora. All rights reserved.</p>
                            <div className="text-[13px] text-[#FCFCFC] flex space-x-7 underline">
                                <Link href="/">Privacy Policy</Link>
                                <Link href="/">Terms of Services</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
}