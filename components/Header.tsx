"use client";

import { useState, useEffect } from "react";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

export default function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/projects", label: "Projects" },
        { href: "/pricing", label: "Pricing" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10); // kapag naka-scroll ng konti
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-5 z-50 w-full px-[20px] transition-all duration-300`}
        >
            <div
                className={`
                    relative transition-all duration-600 mx-auto
                    ${scrolled
                        ? "rounded-[50px] md:w-[963px] mx-auto mt-[20px]"
                        : "rounded-[50px] md:rounded-none w-full"
                    }`}
            >
                <div
                    className={`
                        w-full h-full border border-[#FB82FF] border-[2px] backdrop-blur-md transition-all duration-600
                        ${scrolled ? "bg-[#09022D]/50" : "bg-[#09022D]/50 md:bg-transparent md:border-transparent"}
                        ${scrolled ? "rounded-[50px]" : "rounded-[50px] md:rounded-none"}
                    `}
                >
                    <div className="relative h-[66px] flex items-center justify-between px-6">
                        {/* Logo */}
                        <div>
                            <Image
                                src="/images/logo.png"
                                alt="Next.js logo"
                                width={136.92}
                                height={42}
                                priority
                            />
                        </div>

                        {/* Desktop Nav */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                            <nav className="space-x-7">
                                {links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`text-white hover:font-semibold ${pathname === link.href &&
                                            "text-[#0F1729] font-semibold"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Desktop Button */}
                        <div className="hidden md:block">
                            <button className="group relative flex items-center border border-white rounded-full p-2 pr-7 text-sm text-white relative hover:bg-white hover:text-black transition-all duration-300 overflow-hidden">
                                <span className="flex items-center transition-all duration-300 group-hover:translate-x-22">
                                    <ArrowRightIcon className="bg-white text-black rounded-full p-1 size-7 transition-all duration-300 group-hover:bg-black group-hover:text-white" />
                                </span>
                                <span className="ml-4 ransition-all duration-300 group-hover:-translate-x-9">Let`s Chat</span>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)}>
                                <Icon
                                    icon={
                                        isOpen
                                            ? "material-symbols:close-rounded"
                                            : "material-symbols:menu-rounded"
                                    }
                                    className="w-[28px] h-[28px] text-white"
                                />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="md:hidden pb-4">
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li
                                        key={link.href}
                                        className={`
                                            h-[37px] flex items-center justify-center
                                            ${pathname === link.href
                                                ? "bg-gradient-to-t from-[#0118C8] to-[#030019] text-white"
                                                : "text-[#A2A2A2]"
                                            }
                                        `}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-[15px] font-medium block w-full text-center"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
