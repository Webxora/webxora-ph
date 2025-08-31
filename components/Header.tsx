"use client";

import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

export default function Header() {
    const pathname = usePathname();
    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/projects", label: "Projects" },
        { href: "/pricing", label: "Pricing" },
    ];

    return (
        <header className="fixed top-5 z-50 w-full px-[20px]">
            <div className="h-[66px] w-full md:w-[963px] mx-auto rounded-full backdrop-blur-md bg-[#04091d] border-gradient transition-shadow duration-300 hover:shadow-lg">
                <div className="relative h-[66px] flex items-center justify-between px-6">
                    <div>
                        <Image
                            src="/images/logo.png"
                            alt="Next.js logo"
                            width={136.92}
                            height={42}
                            priority
                        />
                    </div>
                    <div className="">
                        {/* asd */}
                       {/* <Icon icon="material-symbols:menu-rounded" width="24" height="24" /> */}
                    </div>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                        <nav className="space-x-7">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-white hover:font-semibold ${pathname === link.href && "text-[#0F1729] font-semibold"}`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <div className="hidden md:block">
                        <button className="group relative flex items-center border border-white rounded-full p-2 pr-7 text-sm text-white relative hover:bg-white hover:text-black transition-all duration-300 overflow-hidden">
                            <span className="flex items-center transition-all duration-300 group-hover:translate-x-22">
                                <ArrowRightIcon className="bg-white text-black rounded-full p-1 size-7 transition-all duration-300 group-hover:bg-black group-hover:text-white" />
                            </span>
                            <span className="ml-4 ransition-all duration-300 group-hover:-translate-x-9">Let`s Chat</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}