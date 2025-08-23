import { Marquee } from "@/components/ui/marquee";
import Section from "../ui/section";

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
        image: "picture-mark.png", // Changed image name for clarity
        name: "Mark Zuckerberg",
        email: "markfb_meta@gmail.com",
        testimony: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        date: "July 25, 2024",
        rate: 5
    },
    {
        image: "picture-sundar.png",
        name: "Sundar Pichai",
        email: "sundar_google@example.com",
        testimony: "Our experience with this team was exceptional. Their dedication and innovative solutions truly exceeded our expectations. The project was delivered on time and with remarkable quality. Highly recommended!",
        date: "June 18, 2024", // A slightly older date
        rate: 5
    },
    {
        image: "picture-susan.png",
        name: "Susan Wojcicki",
        email: "susan_yt@example.com",
        testimony: "They provided excellent support throughout the entire process. Their communication was clear, and they were always responsive to our needs. We are very satisfied with the outcome.",
        date: "May 03, 2024",
        rate: 4 // A slightly lower rating
    },
    {
        image: "picture-tim.png",
        name: "Tim Cook",
        email: "tim_apple@example.com",
        testimony: "The quality of work is outstanding. Every detail was meticulously handled, resulting in a product that not only met but surpassed our original vision. A truly professional and talented group.",
        date: "April 10, 2024",
        rate: 5
    },
    {
        image: "picture-jane.png",
        name: "Jane Doe",
        email: "jane.doe@example.com",
        testimony: "Good service overall, but there were some minor delays in communication. The final product is solid, though. I appreciate their effort.",
        date: "July 01, 2024",
        rate: 3
    },
    {
        image: "picture-mark.png", // Changed image name for clarity
        name: "Mark Zuckerberg",
        email: "markfb_meta@gmail.com",
        testimony: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        date: "July 25, 2024",
        rate: 5
    },
    {
        image: "picture-sundar.png",
        name: "Sundar Pichai",
        email: "sundar_google@example.com",
        testimony: "Our experience with this team was exceptional. Their dedication and innovative solutions truly exceeded our expectations. The project was delivered on time and with remarkable quality. Highly recommended!",
        date: "June 18, 2024", // A slightly older date
        rate: 5
    },
    {
        image: "picture-susan.png",
        name: "Susan Wojcicki",
        email: "susan_yt@example.com",
        testimony: "They provided excellent support throughout the entire process. Their communication was clear, and they were always responsive to our needs. We are very satisfied with the outcome.",
        date: "May 03, 2024",
        rate: 4 // A slightly lower rating
    },
    {
        image: "picture-tim.png",
        name: "Tim Cook",
        email: "tim_apple@example.com",
        testimony: "The quality of work is outstanding. Every detail was meticulously handled, resulting in a product that not only met but surpassed our original vision. A truly professional and talented group.",
        date: "April 10, 2024",
        rate: 5
    },
    {
        image: "picture-jane.png",
        name: "Jane Doe",
        email: "jane.doe@example.com",
        testimony: "Good service overall, but there were some minor delays in communication. The final product is solid, though. I appreciate their effort.",
        date: "July 01, 2024",
        rate: 3
    },
    {
        image: "picture-mark.png", // Changed image name for clarity
        name: "Mark Zuckerberg",
        email: "markfb_meta@gmail.com",
        testimony: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        date: "July 25, 2024",
        rate: 5
    },
    {
        image: "picture-sundar.png",
        name: "Sundar Pichai",
        email: "sundar_google@example.com",
        testimony: "Our experience with this team was exceptional. Their dedication and innovative solutions truly exceeded our expectations. The project was delivered on time and with remarkable quality. Highly recommended!",
        date: "June 18, 2024", // A slightly older date
        rate: 5
    },
    {
        image: "picture-susan.png",
        name: "Susan Wojcicki",
        email: "susan_yt@example.com",
        testimony: "They provided excellent support throughout the entire process. Their communication was clear, and they were always responsive to our needs. We are very satisfied with the outcome.",
        date: "May 03, 2024",
        rate: 4 // A slightly lower rating
    },
    {
        image: "picture-tim.png",
        name: "Tim Cook",
        email: "tim_apple@example.com",
        testimony: "The quality of work is outstanding. Every detail was meticulously handled, resulting in a product that not only met but surpassed our original vision. A truly professional and talented group.",
        date: "April 10, 2024",
        rate: 5
    },
    {
        image: "picture-jane.png",
        name: "Jane Doe",
        email: "jane.doe@example.com",
        testimony: "Good service overall, but there were some minor delays in communication. The final product is solid, though. I appreciate their effort.",
        date: "July 01, 2024",
        rate: 3
    },
    {
        image: "picture-mark.png", // Changed image name for clarity
        name: "Mark Zuckerberg",
        email: "markfb_meta@gmail.com",
        testimony: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        date: "July 25, 2024",
        rate: 5
    },
    {
        image: "picture-sundar.png",
        name: "Sundar Pichai",
        email: "sundar_google@example.com",
        testimony: "Our experience with this team was exceptional. Their dedication and innovative solutions truly exceeded our expectations. The project was delivered on time and with remarkable quality. Highly recommended!",
        date: "June 18, 2024", // A slightly older date
        rate: 5
    },
    {
        image: "picture-susan.png",
        name: "Susan Wojcicki",
        email: "susan_yt@example.com",
        testimony: "They provided excellent support throughout the entire process. Their communication was clear, and they were always responsive to our needs. We are very satisfied with the outcome.",
        date: "May 03, 2024",
        rate: 4 // A slightly lower rating
    },
    {
        image: "picture-tim.png",
        name: "Tim Cook",
        email: "tim_apple@example.com",
        testimony: "The quality of work is outstanding. Every detail was meticulously handled, resulting in a product that not only met but surpassed our original vision. A truly professional and talented group.",
        date: "April 10, 2024",
        rate: 5
    },
    {
        image: "picture-jane.png",
        name: "Jane Doe",
        email: "jane.doe@example.com",
        testimony: "Good service overall, but there were some minor delays in communication. The final product is solid, though. I appreciate their effort.",
        date: "July 01, 2024",
        rate: 3
    }
];

export default function WhatOurClientSaySection() {
    return (
        <Section
            id="What our Client Say"
            icon="solar:star-fall-bold"
            title="Testimonials"
            subtitle="Choose the plan that best suits your needs and budget."
            className=""
            background=""
            parentBackground=""
        >
            <div className="flex flex-col space-y-6 relative pb-25">
                <div className="relative flex h-[199px] w-full flex-row items-center justify-center overflow-hidden ">
                    <Marquee reverse pauseOnHover className="[--duration:60s]">
                        {whatOurClientSay.map((item, index) => {
                            if (index % 2 === 0) {
                                return (
                                    <div key={index} className="bg-[#030019] w-[338px] h-[199px] border border-[#434343] rounded-[20px] p-[20px] text-white">
                                        <div className="flex flex-col space-y-4">
                                            <div className="flex items-center space-x-2">
                                                <div className="bg-red-500 h-[35px] w-[35px] rounded-full bg-[url('/images/avatars/avatar-1.png')] bg-cover bg-no-repeat" />
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
                                                <div>Rate</div>
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
                                                <div className="bg-red-500 h-[35px] w-[35px] rounded-full bg-[url('/images/avatars/avatar-1.png')] bg-cover bg-no-repeat" />
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
                                                <div>Rate</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </Marquee>
                </div>
                <div className="absolute h-full w-[297px] bg-gradient-to-r from-[#030019] to-[#030019]/1" />
                <div className="absolute right-0 h-full w-[297px] bg-gradient-to-r from-[#030019]/1 to-[#030019]" />
            </div>
        </Section>
    )
}