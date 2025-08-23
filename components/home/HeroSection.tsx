import Image from "next/image";
import React from "react";
import { Button } from "@/components//ui/button";
import { PlayIcon } from "lucide-react";
import { Marquee } from "@/components//ui/marquee";

type ClientProps = {
    image: string;
}

const clients: ClientProps[] = [
    { image: "client-1.png" },
    { image: "client-2.png" },
    { image: "client-3.png" },
    { image: "client-4.png" },
    { image: "client-5.png" },
    { image: "client-6.png" },
]

export default function HeroSection() {
    return (
        <React.Fragment>
            <section className="min-h-screen bg-[url('/images/grid.png')] bg-contain relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(3,0,25,0.7),rgba(37,124,255,0.5),rgba(3,0,25,0.7))]" />

                <div className="absolute inset-0 flex justify-center items-center z-0">
                    <Image
                        src="/images/shades/moon.png"
                        alt="Moon Background"
                        width={700}
                        height={700}
                        className="h-auto object-cover"
                    />
                </div>

                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <div className="max-w-[1440px] w-full h-full flex flex-col justify-center items-center space-y-14">
                        <div className="bg-gradient-to-t from-[#006D9C] to-[#0E204F] border border-[#3399FF] rounded-full h-[38px] w-[199px] flex items-center justify-center">
                            <div className="flex items-center space-x-2">
                                <Image
                                    src="/cpu.svg"
                                    alt="Next.js logo"
                                    width={24}
                                    height={24}
                                    className="mx-auto"
                                    priority
                                />
                                <p className="text-[10px] text-white">
                                    Powered by
                                    <span className="text-[#00EEFF]">AI Automation</span>
                                </p>
                            </div>
                            <div></div>
                        </div>

                        <div className="relative w-full flex justify-center items-center">
                            <Image
                                src="/images/capture.png"
                                alt="Capture Image"
                                width={500}
                                height={500}
                                className="w-1/2 h-auto object-cover"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center font-black text-[48px] uppercase p-7">
                                <div className="flex space-x-2">
                                    <span className="text-[#00EEFF] drop-shadow-xl">Your</span>
                                    <div className="relative">
                                        <span className="text-white drop-shadow-[0_0_20px_#FFFFFF]">Digital Future</span>
                                        <span className="absolute left-0 text-white drop-shadow-[0_0_40px_#FFFFFF]">Digital Future</span>
                                        <span className="absolute left-0 text-white drop-shadow-[0_0_60px_#fff]">Digital Future</span>
                                        <span className="absolute left-0 text-white drop-shadow-[0_0_80px_#fff]">Digital Future</span>
                                        <span className="absolute left-0 text-white drop-shadow-[0_0_100px_#fff]">Digital Future</span>
                                        <span className="absolute left-0 text-white drop-shadow-[0_0_120px_#fff]">Digital Future</span>
                                    </div>
                                </div>
                                <span className="text-[#E398FF] drop-shadow-xl">Starts Here</span>
                            </div>
                        </div>

                        <div className="flex space-x-7 pt-14">
                            <Button
                                className="h-[44px] w-[180px] rounded-full text-white"
                                variant="style2"
                            >
                                <PlayIcon />
                                Watch Live Demo
                            </Button>
                            <Button
                                className="h-[44px] w-[180px] rounded-full text-white"
                                variant="outline"
                            >
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-32 space-y-2">
                <h3 className="text-white text-[14px] text-center">The One Who Trust Our Bold Work</h3>
                <div className="flex justify-center">
                    <div className="relative flex h-[200px] max-w-[1440px] px-[10px] flex-row items-center justify-center overflow-hidden">
                        <Marquee reverse pauseOnHover className="[--duration:20s]">
                            {clients.map((item, i) => (
                                <div key={i} className="mx-10 flex items-center">
                                    <Image
                                        src={`/images/clients/${item.image}`}
                                        alt={item.image}
                                        width={103}
                                        height={57}
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}