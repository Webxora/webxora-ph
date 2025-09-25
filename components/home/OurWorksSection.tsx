import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Section from "../ui/section";

type OurWorksProps = {
    title: string;
    description: string;
    image: string;
    url: string;
    className: string;
}

const ourWorks: OurWorksProps[] = [
    {
        title: "Gotham",
        description: "Gotham Auto Works specializes in premium car care, from precision window tinting to ceramic coatings and detailing. Their services focus on enhancing style, protection, and performance for luxury vehicles. With meticulous craftsmanship, they ensure every car looks and performs at its best.",
        image: "gotham.webp",
        url: "https://gothamauto.com/",
        className: ""
    },
    {
        title: "Republic Of Gamers",
        description: "Republic of Gamers (ROG) is ASUS’s flagship gaming brand, known for delivering high-performance hardware and immersive experiences. Their ROG Swift PG Series monitors feature advanced technologies like NVIDIA G-SYNC for smooth, responsive gameplay. Built for serious gamers, ROG products combine cutting-edge design with world-class performance.",
        image: "rog.webp",
        url: "",
        className: "row-span-2"
    },
    {
        title: "Preciso",
        description: "The Preciso website is a modern coffee shop site designed to showcase its brand story and menu. With the tagline “Where Every Cup Tells a Story,” it highlights quality coffee, customer satisfaction, and a warm café experience. The clean design blends visuals and storytelling to create an inviting digital presence for coffee lovers.",
        image: "preciso.webp",
        url: "https://preciso.webxora.com/",
        className: ""
    },
    {
        title: "Chemist Greenhouse",
        description: "The Chemist Greenhouse website is an online pharmacy platform dedicated to health and wellness. It offers services like telehealth consultations, prescription management, and a wide range of healthcare products. With a focus on accessibility and holistic care, the site emphasizes that “Your Health is Our Service,” providing both traditional and natural treatment options to support everyday wellbeing.",
        image: "chemist.webp",
        url: "https://www.chemistgreenhouse.com.au/",
        className: "row-span-2 "
    },
]


export default function OurWorksSection() {
    return (
        <Section
            id="Our Works"
            icon="solar:star-fall-bold"
            index="projects"
            title="Selected Projects"
            subtitle="We guarantee websites that work for everyone, load fast, and follow modern standards."
            className="" //bg-[#010314]
            overlay=""
            background=""
            parentBackground=""
        >
            <div className="flex flex-col md:flex-row md:space-x-14">
                <div className="flex-1">
                    {ourWorks.map((item, index) => {
                        if (index % 2 === 0) {
                            return (
                                <div key={index} className="flex-1">
                                    <OurWorksCard item={item} index={index} />
                                </div>
                            )
                        }
                    })}
                </div>
                <div className="flex-1">
                    {ourWorks.map((item, index) => {
                        if (index % 2 !== 0) {
                            return (
                                <div key={index} className="flex-1">
                                    <OurWorksCard item={item} index={index} />
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </Section>
    )
}

type OurWorksCardProps = {
    item: OurWorksProps;
    index: number;
}

function OurWorksCard({ item, index }: OurWorksCardProps) {
    return (
        <div key={index} className="space-y-7 mb-24">
            <Card className="border-gradient-1" style={{ borderRadius: 20 }}>
                <Image
                    src={`/images/projects/${item.image}`}
                    alt={item.title}
                    width={599}
                    height={315}
                    className="h-auto w-auto object-cover rounded-[20px]"
                />
            </Card>
            <h1 className="text-white text-subtitle font-semibold mt-17">{item.title}</h1>
            <p className="text-[#8F8C8C] text-small font-semibold lg:w-md">{item.description}</p>
            <a href={item.url} className="text-[#8F8C8C] text-small font-semibold flex">
                View project
                <ArrowRight className="rotate-[320deg] ml-2" />
            </a>
        </div>
    )
}

