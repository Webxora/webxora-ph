import Image from "next/image";
import { ReactNode } from "react"
import { Icon } from "@iconify/react";

type SectionPropps = {
    id: string;
    icon: string;
    index?: string
    title: string;
    subtitle: string;
    children: ReactNode;
    className?: string;
    overlay?: string;
    background?: string;
    parentBackground?: string;
}

export default function Section({
    id,
    icon,
    title,
    index,
    subtitle,
    children,
    className = "",
    overlay = "",
    background = "",
    parentBackground = ""
}: SectionPropps) {
    return (
        <section id={index} className={`min-h-screen space-y-24 pt-32  ${className} ${parentBackground}`}>
            <div className="text-white space-y-12">
                <div className="flex items-center justify-center space-x-2">
                    <Image
                        src="/images/bracket.png"
                        alt="Bracket Frame Right Side"
                        width={100}
                        height={100}
                        className="w-auto h-auto object-cover scale-x-[-1]"
                    />
                    <div className="flex items-center justify-center space-x-2">
                        <Icon icon={icon} width="24" height="24" />
                        <h1 className="font-lato text-sm">{id}</h1>
                    </div>
                    <Image
                        src="/images/bracket.png"
                        alt="Bracket Frame Left Side"
                        width={100}
                        height={100}
                        className="w-auto h-auto object-cover"
                    />
                </div>
                <div className="text-center space-y-2 flex flex-col items-center px-[20px]">
                    <h1 className="text-4xl font-bold font-lato">{title}</h1>
                    <p className="text-md text-gray-400 lg:w-sm font-lato">{subtitle}</p>
                </div>
            </div>
            <div className={`relative ${background}`}>
                <div className={overlay} />
                <div className={`max-w-[1440px] px-[20px] mx-auto ${overlay ? "absolute inset-0" : ""}`}>
                    {children}
                </div>
            </div>
        </section>
    )
}