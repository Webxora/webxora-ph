"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Settings2Icon, TimerIcon, VideoIcon } from "lucide-react";
import { HiBadgeCheck } from "react-icons/hi";
import { ComponentType, SVGProps, useState } from "react";
import Section from "../ui/section";
// import { Icon } from "@iconify/react";

type NoteProps = {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    text: string;
}

type PricingProps = {
    id: number;
    label: string;
    price: number;
    isPopular: boolean;
    notes: NoteProps[];
    included: string[];
}

const pricing: PricingProps[] = [
    {
        id: 1,
        label: "Basic",
        price: 349.00,
        isPopular: false,
        notes: [
            { icon: TimerIcon, text: "1 Week Delivery" },
            { icon: VideoIcon, text: "Free Team Consultation" },
            { icon: Settings2Icon, text: "1 Week Free Revisions" },
        ],
        included: [
            "Custom Web Design basic",
            "Mobile Optimization",
            "Speed Optimization",
            "Booking and Contact Forms",
            "Google Maps Integration",
            "Social Media Integration",
            "SEO Meta Tags",
            "Website and App Icon",
            "Copywriting",
            "Google Analytics",
            "Site Security Setup",
            "Blog Setup"
        ]
    },
    {
        id: 2,
        label: "Smart Website",
        price: 499.00,
        isPopular: true,
        notes: [
            { icon: TimerIcon, text: "1 Week Delivery" },
            { icon: VideoIcon, text: "Free Team Consultation" },
            { icon: Settings2Icon, text: "1 Week Free Revisions" },
        ],
        included: [
            "Custom Web Design",
            "Mobile Optimization",
            "Speed Optimization",
            "Booking and Contact Forms",
            "Google Maps Integration",
            "Social Media Integration",
            "SEO Meta Tags",
            "Website and App Icon",
            "Copywriting",
            "Google Analytics",
            "Site Security Setup",
            "Blog Setup"
        ]
    },
    {
        id: 3,
        label: "Advanced Automated",
        price: 799.00,
        isPopular: false,
        notes: [
            { icon: TimerIcon, text: "1 Week Delivery" },
            { icon: VideoIcon, text: "Free Team Consultation" },
            { icon: Settings2Icon, text: "1 Week Free Revisions" },
        ],
        included: [
            "Custom Web Design advanced",
            "Mobile Optimization",
            "Speed Optimization",
            "Booking and Contact Forms",
            "Google Maps Integration",
            "Social Media Integration",
            "SEO Meta Tags",
            "Website and App Icon",
            "Copywriting",
            "Google Analytics",
            "Site Security Setup",
            "Blog Setup"
        ]
    },
];

export default function PricingSection() {
    const [isViewMore, setIsViewMore] = useState<boolean>(false);
    const basicItems = isViewMore ? pricing[0]["included"] : pricing[0]["included"].slice(0, 5);
    const advancedItems = isViewMore ? pricing[2]["included"] : pricing[2]["included"].slice(0, 5);
    // const noteIcons = [TimerIcon, VideoIcon, Settings2Icon];

    return (
        <Section
            id="Pricing"
            icon="solar:star-fall-bold"
            title="Affordable Pricing Plans"
            subtitle="Choose the plan that best suits your needs and budget."
            className=""
            background="bg-[url('/images/shades/light.png')] bg-contain bg-no-repeat bg-bottom pb-62"
            parentBackground="bg-[url('/images/shades/spotlight.png')] bg-contain bg-no-repeat bg-top bg-local"
        >
            {/* <div className="relative w-full bg-red-500">
                <div className="absolute bottom-0 w-[182px] h-[845px] bg-[url('/images/rectangle-lights-opposite.png')] bg-contain bg-no-repeat bg-top bg-local" />
            </div> */}
            <div className="flex items-center justify-center space-x-8 transition-all duration-600">
                {pricing.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => setIsViewMore(!isViewMore)}
                    >
                        <Card className={`w-[330px] mx-auto bg-red-500 group relative overflow-hidden cursor-pointer ${item.isPopular ? "border-gradient-animated" : "border-gradient-2"}`}>
                            {item.isPopular && (
                                <div className="bg-gradient-to-r from-[#FF82D5] to-[#8B07FF] rotate-[45deg] w-[227px] absolute -right-15 top-10">
                                    <div className="flex items-center justify-center space-x-2 h-[42.13px]">
                                        <p className="text-[16px] text-white font-lato">Popular</p>
                                        <Image
                                            src={`/images/icons/fire.png`}
                                            alt="Capture Image"
                                            width={12}
                                            height={12}
                                            className="h-auto w-auto object-cover"
                                        />
                                    </div>
                                </div>
                            )}

                            {!item.isPopular ? (
                                <>
                                    <div className="flex justify-center absolute -top-[180px] group-hover:-top-[120px] transition-all duration-600 w-full">
                                        <div className="relative">
                                            {/* <div className="bg-[#9173FF] shadow-[0_0px_200px_#9173FF] h-[125px] w-[125px] rounded-full absolute" /> */}
                                            <div className="bg-[#9173FF] shadow-[0_0px_180px_#9173FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#9173FF] shadow-[0_0px_160px_#9173FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#9173FF] shadow-[0_0px_140px_#9173FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#9173FF] shadow-[0_0px_120px_#9173FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#9173FF] shadow-[0_0px_100px_#9173FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#9173FF] shadow-[0_0px_80px_#9173FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#9173FF] shadow-[0_0px_60px_#9173FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#9173FF] shadow-[0_0px_4px_#9173FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#9173FF] shadow-[0_0px_20px_#9173FF] h-[125px] w-[125px] rounded-full" />
                                        </div>
                                    </div>
                                    <div className="flex justify-center absolute -bottom-[180px] group-hover:-bottom-[120px] transition-all duration-600 w-full">
                                        <div className="relative">
                                            {/* <div className="bg-[#9173FF] shadow-[0_0px_200px_#9173FF] h-[125px] w-[125px] rounded-full absolute" /> */}
                                            <div className="bg-[#9173FF] shadow-[0_0px_180px_#9173FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#9173FF] shadow-[0_0px_160px_#9173FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#9173FF] shadow-[0_0px_140px_#9173FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#9173FF] shadow-[0_0px_120px_#9173FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#9173FF] shadow-[0_0px_100px_#9173FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#9173FF] shadow-[0_0px_80px_#9173FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#9173FF] shadow-[0_0px_60px_#9173FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#9173FF] shadow-[0_0px_4px_#9173FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#9173FF] shadow-[0_0px_20px_#9173FF] h-[125px] w-[125px] rounded-full" />
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex justify-center absolute -top-[180px] group-hover:-top-[120px] transition-all duration-600 w-full">
                                        <div className="relative">
                                            {/* <div className="bg-[#9173FF] shadow-[0_0px_200px_#9173FF] h-[125px] w-[125px] rounded-full absolute" /> */}
                                            <div className="bg-[#FEA5FF] shadow-[0_0px_180px_#FEA5FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#FEA5FF] shadow-[0_0px_160px_#FEA5FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#FEA5FF] shadow-[0_0px_140px_#FEA5FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#FEA5FF] shadow-[0_0px_120px_#FEA5FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#FEA5FF] shadow-[0_0px_100px_#FEA5FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#FEA5FF] shadow-[0_0px_80px_#FEA5FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#FEA5FF] shadow-[0_0px_60px_#FEA5FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#FEA5FF] shadow-[0_0px_4px_#FEA5FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#FEA5FF] shadow-[0_0px_20px_#FEA5FF] h-[125px] w-[125px] rounded-full" />
                                        </div>
                                    </div>
                                    <div className="flex justify-center absolute -bottom-[180px] group-hover:-bottom-[120px] transition-all duration-600 w-full">
                                        <div className="relative">
                                            {/* <div className="bg-[#9173FF] shadow-[0_0px_200px_#9173FF] h-[125px] w-[125px] rounded-full absolute" /> */}
                                            <div className="bg-[#FEA5FF] shadow-[0_0px_180px_#FEA5FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#FEA5FF] shadow-[0_0px_160px_#FEA5FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#FEA5FF] shadow-[0_0px_140px_#FEA5FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#FEA5FF] shadow-[0_0px_120px_#FEA5FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#FEA5FF] shadow-[0_0px_100px_#FEA5FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#FEA5FF] shadow-[0_0px_80px_#FEA5FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#FEA5FF] shadow-[0_0px_60px_#FEA5FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#FEA5FF] shadow-[0_0px_4px_#FEA5FF] h-[125px] w-[125px] rounded-full absolute" />
                                            <div className="bg-[#FEA5FF] shadow-[0_0px_20px_#FEA5FF] h-[125px] w-[125px] rounded-full" />
                                        </div>
                                    </div>
                                </>
                            )}

                            <div className="bg-[#09022D] rounded-[10px]">
                                <div className="px-7 pt-11 pb-6 space-y-7 flex flex-col">
                                    <div className="w-fit space-y-8 flex flex-col">
                                        <label className="text-[16px] text-white font-lato">{item.label}</label>
                                        <div className="flex flex-col">
                                            <h3 className="text-[32px] text-white font-peace">${item.price}</h3>
                                            <ul className="mt-5 space-y-2.5">
                                                {item.notes.map((note, i) => (
                                                    <li key={i} className="flex items-center space-x-4">
                                                        <note.icon className="text-white h-5 w-5" />
                                                        <span className="text-[#9390A0] text-[14px] font-lato">{note.text}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <button
                                            className={`transition-all duration-600 rounded-full text-white p-[10px] w-[243px] font-lato h-[39px] flex items-center justify-center cursor-pointer
                                            ${!item.isPopular ? "bg-[#5E45FF] group-hover:bg-[#FF38B6]" : "bg-gradient-to-l from-[#8B07FF] to-[#FF82D5]"}`}
                                        >
                                            Select Plan
                                        </button>
                                    </div>
                                    <div className="space-y-5">
                                        {/* <input type="checkbox" id="toggle" className="hidden peer" /> */}

                                        <p className="text-[15px] text-[#9390A0]">What`s Included</p>

                                        <ul className={`text-white space-y-2 `}>
                                            {item.isPopular && item.included.map((included) => (
                                                <li key={included} className="flex items-center space-x-2">
                                                    <HiBadgeCheck className="h-5 w-5" />
                                                    <span className="text-[15px] font-lato">{included}</span>
                                                </li>
                                            ))}
                                            {(!item.isPopular && item.id === 1) && basicItems.map((included) => (
                                                <li key={included} className="flex items-center space-x-2">
                                                    <HiBadgeCheck className="h-5 w-5" />
                                                    <span className="text-[15px] font-lato">{included}</span>
                                                </li>
                                            ))}
                                            {(!item.isPopular && item.id === 3) && advancedItems.map((included) => (
                                                <li key={included} className="flex items-center space-x-2">
                                                    <HiBadgeCheck className="h-5 w-5" />
                                                    <span className="text-[15px] font-lato">{included}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        {!item.isPopular && (
                                            <div className="flex justify-center items-center">
                                                {/* <label
                                                    htmlFor="toggle"
                                                    className="block cursor-pointer text-white text-small"
                                                >
                                                    <span className="peer-checked:hidden">View more</span>
                                                    <span className="hidden peer-checked:inline">View less</span>
                                                </label> */}
                                                <p className="text-white text-small font-lato">
                                                    {isViewMore ? "View less" : "View more"}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </Section>
    )
}