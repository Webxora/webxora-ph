"use client";

import Image from "next/image";
import { useParallax } from "react-scroll-parallax";
import { useRef } from "react";
import Section from "../ui/section";

type YourTrustProps = {
    description: string;
    image: string;
    className: string;
}

const yourTrust: YourTrustProps[] = [
    {
        description: "We build fast-loading websites optimized for all devices and connection speeds. From image compression to clean code, WEBxora follows best practices to maximize speed and efficiency.",
        image: "performance.png",
        className: ""
    },
    {
        description: "WebXora ensures every website is inclusive and usable by all, including people with disabilities. We follow global accessibility standards (like WCAG) to provide equal digital experiences.",
        image: "accessability.png",
        className: ""
    },
    {
        description: "WebXora adheres to industry-leading coding, design, and SEO standards in every project. This means your website is not only visually strong but technically sound, secure, and scalable.",
        image: "best-practice.png",
        className: ""
    },
    {
        description: "We deliver clean, user-focused, and visually striking designs that align with your brand identity. Every interface is crafted to be both beautiful and intuitive, ensuring an engaging user experience across all platforms.",
        image: "design-excellence.png",
        className: ""
    },
]

export default function YourTrustSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    return (
        <Section
            id="Your Trust"
            icon="solar:star-fall-bold"
            title="What We Guarantee"
            subtitle="We guarantee websites that work for everyone, load fast, and follow modern standards."
            className="" //bg-[#010314]
            overlay=""
            background=""
            parentBackground=""
        >
            {yourTrust.map((item, index) => {
                let paddingTop = 0;
                paddingTop = paddingTop + (index * 30);

                return (
                    <div key={index} className="hidden xl:flex justify-between h-[500px] mb-2 text-white" style={{ paddingTop: paddingTop }}>
                        <div className="">
                            {index % 2 === 0 ? (
                                <div className="max-w-sm pr-24 mt-[10em] pb-[10%]">
                                    <span className="relative flex items-center justify-center size-3 mb-[5%]">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FB82FF] opacity-75"></span>
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FB82FF] opacity-65"></span>
                                        <span className="relative inline-flex size-2 rounded-full bg-[#FB82FF]"></span>
                                    </span>
                                    <p className="">{item.description}</p>
                                </div>
                            ) : " "}

                            {index == 0 && (
                                <div className="flex justify-center h-[175%] relative">
                                    <div className="w-[2px] bg-[#FB82FF] rounded-full drop-shadow-[0_0_15px_#FB82FF]">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="h-3 w-3 bg-[#FB82FF] drop-shadow-[0_0_15px_#FB82FF] rounded-full" />
                                            <div className="h-3 w-3 bg-[#FB82FF] drop-shadow-[0_0_15px_#FB82FF] rounded-full absolute bottom-0" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="">
                            {index % 2 !== 0 ? (
                                <div className="max-w-sm pl-24 mt-[10em] pb-[10%]">
                                    <span className="relative flex items-center justify-center size-3 mb-[5%]">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FB82FF] opacity-75"></span>
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FB82FF] opacity-65"></span>
                                        <span className="relative inline-flex size-2 rounded-full bg-[#FB82FF]"></span>
                                    </span>
                                    <p className="">{item.description}</p>
                                </div>
                            ) : " "}

                            {index == 1 && (
                                <div className="flex justify-center h-[190%] relative">
                                    <div className="w-[2px] bg-[#FB82FF] rounded-full drop-shadow-[0_0_15px_#FB82FF]">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="h-3 w-3 bg-[#FB82FF] drop-shadow-[0_0_15px_#FB82FF] rounded-full" />
                                            <div className="h-3 w-3 bg-[#FB82FF] drop-shadow-[0_0_15px_#FB82FF] rounded-full absolute bottom-0" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )
            })}

            <div className="absolute top-0 right-0 left-0 hidden xl:flex items-center justify-center">
                <div
                    ref={containerRef}
                    className={`
                            relative
                            pb-[calc(100vh + ${(yourTrust.length - 1) * 50}vh)] 
                        `}
                >
                    {yourTrust.map((item, index) => (
                        <ParallaxItem
                            key={index}
                            item={item}
                            index={index}
                            total={yourTrust.length}
                        />
                    ))}
                    {/* {yourTrust.map((item, index) => {
                        let paddingLeft = 0;
                        let paddingTop = 0;
                        const marginTop = [100, 50, -50, -100];

                        paddingLeft = paddingLeft + (index * 25);
                        paddingTop = paddingTop + (index * 25);

                        const parallaxProps = useParallax<HTMLDivElement>({
                            translateY: [0, -10],
                            // startScroll: index * (window.innerHeight * 0.4),
                            // endScroll: (index + 2) * (window.innerHeight * 0.4),
                        });

                        return (
                            <div
                                key={index}
                                ref={parallaxProps.ref}
                                className={`sticky top-[20vh] h-[504px]`}
                                style={{
                                    zIndex: yourTrust.length + index,
                                }}
                            >
                                <div className={`transition-transform duration-300 ease-out relative`}>
                                    <Image
                                        src={`/images/offers/${item.image}`}
                                        alt={item.image}
                                        width={490.34}
                                        height={404}
                                        className={`h-auto w-auto object-cover`}
                                        style={{
                                            paddingLeft: paddingLeft,
                                            paddingTop: paddingTop,
                                        }}
                                    />
                                    <div className="absolute top-0 -z-10">
                                        <Image
                                            src={`/images/shades/shade.png`}
                                            alt={item.image}
                                            width={890.34}
                                            height={804}
                                            className={`h-auto w-auto object-cover`}
                                            style={{
                                                paddingLeft: paddingLeft,
                                                paddingTop: 0,
                                                marginTop: marginTop[index]
                                            }}
                                        />
                                    </div>
                                </div>

                            </div>
                        )
                    })} */}
                </div>
            </div>

            <div className="xl:hidden text-white">
                <div className="flex flex-col space-y-[10%] ">
                    {yourTrust.map((item, index) => (
                        <div key={index} className="flex flex-col items-center justify-center">
                            <div className={`relative w-[390.34px] h-[304px]`}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative">
                                        <div className="bg-[#9173FF] shadow-[0_0px_200px_#9173FF] h-[125px] w-[125px] rounded-full absolute" />
                                        <div className="bg-[#9173FF] shadow-[0_0px_180px_#9173FF] h-[125px] w-[125px] rounded-full absolute" />
                                        <div className="bg-[#9173FF] shadow-[0_0px_160px_#9173FF] h-[125px] w-[125px] rounded-full absolute" />
                                        <div className="bg-[#9173FF] shadow-[0_0px_140px_#9173FF] h-[125px] w-[125px] rounded-full absolute" />
                                        <div className="bg-[#9173FF] shadow-[0_0px_120px_#9173FF] h-[125px] w-[125px] rounded-full absolute" />
                                        <div className="bg-[#9173FF] shadow-[0_0px_100px_#9173FF] h-[125px] w-[125px] rounded-full absolute" />
                                        <div className="bg-[#9173FF] shadow-[0_0px_80px_#9173FF] h-[125px] w-[125px] rounded-full absolute" />
                                        <div className="bg-[#9173FF] shadow-[0_0px_60px_#9173FF] h-[125px] w-[125px] rounded-full absolute" />
                                        <div className="bg-[#9173FF] shadow-[0_0px_40px_#9173FF] h-[125px] w-[125px] rounded-full absolute" />
                                        <div className="bg-[#9173FF] shadow-[0_0px_20px_#9173FF] h-[125px] w-[125px] rounded-full" />
                                    </div>
                                </div>
                                <div className="absolute inset-0 ">
                                    <Image
                                        src={`/images/offers/${item.image}`}
                                        alt={item.image}
                                        width={390.34}
                                        height={404}
                                        className={`h-auto w-auto object-cover`}
                                    />
                                </div>
                            </div>
                            <div className="space-y-3 max-w-[490.34px] mt-[5%]">
                                <span className="relative flex justify-center items-center size-3">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FB82FF] opacity-75"></span>
                                    <span className="absolute  inline-flex h-full w-full animate-ping rounded-full bg-[#FB82FF] opacity-65"></span>
                                    <span className="relative inline-flex size-2 rounded-full bg-[#FB82FF]"></span>
                                </span>
                                <p className="text-[clamp(15px,2.2vw,20px)]">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

type ParallaxItemProps = {
    item: YourTrustProps;
    index: number;
    total: number;
};

function ParallaxItem({ item, index, total }: ParallaxItemProps) {
    const parallaxProps = useParallax<HTMLDivElement>({
        translateY: [0, -10],
    });

    const paddingLeft = index * 25;
    const paddingTop = index * 25;
    const marginTop = [100, 50, -50, -100][index];

    return (
        <div
            ref={parallaxProps.ref}
            className="sticky top-[20vh] h-[504px]"
            style={{ zIndex: total + index }}
        >
            <div className="w-full transition-transform duration-300 ease-out relative">
                <Image
                    src={`/images/offers/${item.image}`}
                    alt={item.image}
                    width={490.34}
                    height={404}
                    className="h-auto w-auto object-cover"
                    style={{ paddingLeft, paddingTop }}
                />
                <div className="absolute top-0 -z-10">
                    <Image
                        src={`/images/shades/shade.png`}
                        alt={item.image}
                        width={890.34}
                        height={804}
                        className="h-auto w-auto object-cover"
                        style={{ paddingLeft, marginTop }}
                    />
                </div>
            </div>
        </div>
    );
}
