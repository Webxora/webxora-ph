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
        description: "Lorem ipsum dolor sit amet consectetur. Ut nisi sagittis magna risus pharetra purus eleifend at lectus. Vivamus dignissim eu commodo suspendisse phasellus aenean. Dolor porttitor lacinia mi viverra turpis ut sit eget egestas.",
        image: "project-1.png",
        url: "https://gothamauto.com/",
        className: ""
    },
    {
        title: "Republic Of Gamers",
        description: "Lorem ipsum dolor sit amet consectetur. Ut nisi sagittis magna risus pharetra purus eleifend at lectus. Vivamus dignissim eu commodo suspendisse phasellus aenean. Dolor porttitor lacinia mi viverra turpis ut sit eget egestas.",
        image: "project-3.png",
        url: "",
        className: "row-span-2"
    },
    {
        title: "Preciso",
        description: "Lorem ipsum dolor sit amet consectetur. Ut nisi sagittis magna risus pharetra purus eleifend at lectus. Vivamus dignissim eu commodo suspendisse phasellus aenean. Dolor porttitor lacinia mi viverra turpis ut sit eget egestas.",
        image: "project-4.png",
        url: "https://preciso.webxora.com/",
        className: ""
    },
    {
        title: "Chemist Greenhouse",
        description: "Lorem ipsum dolor sit amet consectetur. Ut nisi sagittis magna risus pharetra purus eleifend at lectus. Vivamus dignissim eu commodo suspendisse phasellus aenean. Dolor porttitor lacinia mi viverra turpis ut sit eget egestas.",
        image: "project-2.png",
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

