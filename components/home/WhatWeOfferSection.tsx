"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Icon } from "@iconify/react";

type WhatWeOfferProps = {
    title: string;
    description: string;
    number: string;
    url: string;
}

const whatWeOffer: WhatWeOfferProps[] = [
    {
        title: "SEO Optimization",
        description: "Keyword strategy, content audit, analytics",
        number: "01",
        url: ""
    },
    {
        title: "Web Development",
        description: "Responsice sites, CMS builds, backend logic",
        number: "02",
        url: ""
    },
    {
        title: "Mobile Development",
        description: "Cros-platform apps, UI systems, user flows",
        number: "03",
        url: ""
    },
    {
        title: "Branding",
        description: "Logo creation, brand voice, visual indentify",
        number: "04",
        url: ""
    },
    {
        title: "Graphics Design",
        description: "Social media kits, marketing materials, custom illustrations",
        number: "05",
        url: ""
    },
    {
        title: "Graphics Design",
        description: "Social media kits, marketing materials, custom illustrations",
        number: "06",
        url: ""
    },
    {
        title: "Graphics Design",
        description: "Social media kits, marketing materials, custom illustrations",
        number: "07",
        url: ""
    },
    {
        title: "Graphics Design",
        description: "Social media kits, marketing materials, custom illustrations",
        number: "08",
        url: ""
    },
    {
        title: "Graphics Design",
        description: "Social media kits, marketing materials, custom illustrations",
        number: "09",
        url: ""
    },
]

export default function WhatWeOfferSection() {
    const [isViewMore, setIsViewMore] = useState<boolean>(true);
    const displayedItems = whatWeOffer; //isViewMore ? whatWeOffer : whatWeOffer.slice(0, 5);
    return (
        <section className="min-h-screen space-y-24 pt-32 bg-[#010314]">

            <div className="text-white space-y-1">
                <div className="flex items-center justify-center space-x-2">
                    <Image
                        src="/images/bracket.png"
                        alt="Bracket Frame Right Side"
                        width={100}
                        height={100}
                        className="w-auto h-auto object-cover scale-x-[-1]"
                    />
                    <div className="flex items-center justify-center space-x-2">
                        <Icon icon="solar:star-fall-bold" width="24" height="24" />
                        <h1 className="font-lato text-sm">What we Offer</h1>
                    </div>
                    <Image
                        src="/images/bracket.png"
                        alt="Bracket Frame Left Side"
                        width={100}
                        height={100}
                        className="w-auto h-auto object-cover"
                    />
                </div>
                <div className="text-center space-y-2 flex flex-col items-center">
                    <h1 className="text-4xl font-bold font-lato">Our Services</h1>
                    <p className="text-md text-gray-400 w-sm font-lato">We guarantee websites that work for everyone, load fast, and follow modern standards.</p>
                </div>
            </div>

            <div className="">
                <input type="checkbox" id="toggle" className="hidden peer" />
                <div className="overflow-hidden max-h-[560px] peer-checked:max-h-[1000px] transition-all duration-500 bg-[url('/images/map.png')] bg-top bg-contain bg-local relative">
                    {/* <div className="absolute w-full h-full bg-gradient-to-t from-[#030019] to-[#00060F]/50" /> */}
                    <div className="">
                        <div className="w-[479px] mx-auto ">
                            {displayedItems.map((item, index) => (
                                <div key={index} className="cursor-pointer h-[111px] flex items-center justify-center rounded-[20px] transition-all duration-600 hover:bg-[#046dff9c] hover:border hover:border-2 hover:border-white group">
                                    <div className="flex justify-between w-full px-11">
                                        <div className="flex space-x-[29px]">
                                            <div className="text-white text-xl">
                                                <span className="font-ramen">{item.number}</span>
                                            </div>
                                            <div>
                                                <h1 className="text-gradient font-bold text-[24px] uppercase ">{item.title}</h1>
                                                <div className="pr-17">
                                                    <p className="text-small text-[#CDCDCD] font-lato">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-2">
                                            <button className="rounded-full border h-[30px] w-[30px] relative overflow-hidden bg-white">
                                                <div className="h-[30px] w-[30px] flex items-center justify-center rounded-full">
                                                    <ArrowRight className="h-4 w-4 transition-all duration-600 group-hover:translate-x-[30px]" />
                                                </div>
                                                <div className="h-[30px] w-[30px] flex items-center justify-center rounded-full absolute top-0 -left-[30px]">
                                                    <ArrowRight className="size-4 transition-all duration-600 group-hover:translate-x-[30px]" />
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="h-[70px] flex items-center justify-center relative group cursor-pointer">
                    <div className="absolute inset-0 bg-[#010314] opacity-99 group-hover:opacity-85 transition-all duration-900 backdrop-blur-sm"></div>
                    <label
                        htmlFor="toggle"
                        className="block cursor-pointer text-white relative z-10 transition"
                        onClick={() => setIsViewMore(!isViewMore)}
                    >
                        {isViewMore ? "View more" : "View less"}
                    </label>
                </div>

                {/* <div className="h-[70px] flex items-center justify-center relative group cursor-pointer">
                    <div className="absolute inset-0 bg-[#010314] opacity-99 group-hover:opacity-85 transition-all duration-900 backdrop-blur-sm"></div>
                    <label
                        htmlFor="toggle"
                        className="block cursor-pointer text-white text-smalll relative z-10 transition"
                    >
                        <span className="peer-checked:hidden">View more</span>
                        <span className="hidden peer-checked:inline">View less</span>
                    </label>
                </div> */}
            </div>
        </section>
    )

}