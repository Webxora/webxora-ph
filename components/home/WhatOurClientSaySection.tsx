import { Marquee } from "@/components/ui/marquee";
// import Section from "../ui/section";
import { Star } from "lucide-react";
import { Icon } from "@iconify/react";
import Image from "next/image";

type WhatOurClientSayProps = {
    image: string;
    name: string;
    email: string;
    testimony: string;
    date: string;
    rate: number;
}

const whatOurClientSay: WhatOurClientSayProps[] = [
    {
        image: "picture-client1.png",
        name: "John Doe",
        email: "john.doe@gmail.com",
        testimony: "WebXora helped us streamline our processes. Very satisfied with the results!",
        date: "January 12, 2025",
        rate: 5,
    },
    {
        image: "picture-client2.png",
        name: "Mary Smith",
        email: "mary.smith@gmail.com",
        testimony: "Amazing support from WebXora. Quick response and clear communication.",
        date: "February 03, 2025",
        rate: 5,
    },
    {
        image: "picture-client3.png",
        name: "Alex Johnson",
        email: "alex.johnson@gmail.com",
        testimony: "We had a smooth experience with WebXora. Highly recommended!",
        date: "March 15, 2025",
        rate: 4,
    },
    {
        image: "picture-client4.png",
        name: "Sophia Lee",
        email: "sophia.lee@gmail.com",
        testimony: "The WebXora team delivered our project on time with excellent quality.",
        date: "April 10, 2025",
        rate: 5,
    },
    {
        image: "picture-client5.png",
        name: "Michael Brown",
        email: "michael.brown@gmail.com",
        testimony: "Good service overall. WebXora can improve on updates, but still great.",
        date: "May 01, 2025",
        rate: 3,
    },
    {
        image: "picture-client6.png",
        name: "Emma Wilson",
        email: "emma.wilson@gmail.com",
        testimony: "WebXora made everything so simple for us. The process was stress-free.",
        date: "June 08, 2025",
        rate: 5,
    },
    {
        image: "picture-client7.png",
        name: "Daniel Garcia",
        email: "daniel.garcia@gmail.com",
        testimony: "We loved working with WebXora. Great results and friendly support team.",
        date: "July 20, 2025",
        rate: 5,
    },
    {
        image: "picture-client8.png",
        name: "Olivia Martinez",
        email: "olivia.martinez@gmail.com",
        testimony: "WebXora exceeded our expectations. Definitely worth recommending!",
        date: "August 05, 2025",
        rate: 5,
    },
    {
        image: "picture-client9.png",
        name: "James Anderson",
        email: "james.anderson@gmail.com",
        testimony: "Thanks to WebXora, our workflow is much more efficient now.",
        date: "September 14, 2025",
        rate: 4,
    },
    {
        image: "picture-client10.png",
        name: "Isabella Taylor",
        email: "isabella.taylor@gmail.com",
        testimony: "Very professional approach from WebXora. We’ll work with them again.",
        date: "October 22, 2025",
        rate: 5,
    },
];


export default function WhatOurClientSaySection() {
    return (
        <section className={`space-y-24 pt-32`}>
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
                        <Icon icon='solar:star-fall-bold' width="24" height="24" />
                        <h1 className="font-lato text-sm">What our Client Say</h1>
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
                    <h1 className="text-4xl font-bold font-lato">Testimonials</h1>
                    <p className="text-md text-gray-400 lg:w-sm font-lato">Choose the plan that best suits your needs and budget.</p>
                </div>
            </div>
            <div className={`relative`}>
                <div className={`max-w-[1440px] md:px-[20px] mx-auto`}>
                    <div className="flex flex-col space-y-6 relative pb-25">
                        <div className="relative flex h-[199px] w-full flex-row items-center justify-center overflow-hidden ">
                            <Marquee reverse pauseOnHover className="[--duration:60s]">
                                {whatOurClientSay.map((item, index) => {
                                    if (index % 2 === 0) {
                                        return (
                                            <div key={index} className="bg-[#030019] w-[338px] h-[199px] border border-[#434343] rounded-[20px] p-[20px] text-white">
                                                <div className="flex flex-col space-y-4">
                                                    <div className="flex items-center space-x-2">
                                                        <div className="h-[35px] w-[35px] rounded-full bg-orange-100 flex items-center justify-center text-[#030019] font-bold text-xl mb-2 mx-auto">
                                                            {item.name[0]}
                                                        </div>
                                                        {/* <div className="bg-red-500 h-[35px] w-[35px] rounded-full bg-[url('/images/avatars/avatar-1.png')] bg-cover bg-no-repeat" /> */}
                                                        <div>
                                                            <div>
                                                                <h1 className="text-[15px] font-bold">{item.name}</h1>
                                                            </div>
                                                            <p className="text-[14px] text-[#A6A6A6]">{item.email}</p>
                                                        </div>
                                                    </div>
                                                    <div className="line-clamp-3" title={item.testimony}>
                                                        <p className="text-[15px] font-bold">
                                                            {item.testimony}
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <p className="text-[15px] font-bold text-[#A9A9A9]">{item.date}</p>
                                                        </div>
                                                        <div>
                                                            <Stars rate={item.rate} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            </Marquee>
                        </div>
                        <div className="relative flex h-[199px] w-full flex-row items-center justify-center overflow-hidden">
                            <Marquee pauseOnHover className="[--duration:60s]">
                                {whatOurClientSay.map((item, index) => {
                                    if (index % 2 !== 0) {
                                        return (
                                            <div key={index} className="bg-[#030019] w-[338px] h-[199px] border border-[#434343] rounded-[20px] p-[20px] text-white">
                                                <div className="flex flex-col space-y-4">
                                                    <div className="flex items-center space-x-2">
                                                        <div className="h-[35px] w-[35px] rounded-full bg-orange-100 flex items-center justify-center text-[#030019] font-bold text-xl mb-2 mx-auto">
                                                            {item.name[0]}
                                                        </div>
                                                        {/* <div className="bg-red-500 h-[35px] w-[35px] rounded-full bg-[url('/images/avatars/avatar-1.png')] bg-cover bg-no-repeat" /> */}
                                                        <div>
                                                            <div>
                                                                <h1 className="text-[15px] font-bold">{item.name}</h1>
                                                            </div>
                                                            <p className="text-[14px] text-[#A6A6A6]">{item.email}</p>
                                                        </div>
                                                    </div>
                                                    <div className="line-clamp-3" title={item.testimony}>
                                                        <p className="text-[15px] font-bold">
                                                            {item.testimony}
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <p className="text-[15px] font-bold text-[#A9A9A9]">{item.date}</p>
                                                        </div>
                                                        <div>
                                                            <Stars rate={item.rate} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            </Marquee>
                        </div>
                        <div className="hidden md:block absolute h-full w-[297px] bg-gradient-to-r from-[#030019] to-[#030019]/1" />
                        <div className="hidden md:block absolute right-0 h-full w-[297px] bg-gradient-to-r from-[#030019]/1 to-[#030019]" />
                    </div>
                </div>
            </div>
        </section>
    )
}

function Stars({ rate }: { rate: number }) {
    return (
        <div className="flex">
            {[...Array(5)].map((_, i) => {
                if (i + 1 <= rate) {
                    return <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />;
                } else if (i + 0.5 === rate) {
                    return <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-200" />;
                } else {
                    return <Star key={i} className="h-4 w-4 text-gray-300" />;
                }
            })}
        </div>
    )
}
