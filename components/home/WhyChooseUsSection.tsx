import Image from "next/image";
import { Card } from "@/components/ui/card";
import Section from "@/components/ui/section";

type WhyChooseUsProps = {
    title: string;
    description: string;
    image: string;
    className: string;
}

const whyChooseUs: WhyChooseUsProps[] = [
    {
        title: "SEO-Optimized",
        description: "Lorem ipsum dolor sit amet consectetur. Eu mi euismod pulvinar augue accumsan. Congue rutrum aliquet turpis iaculis nunc tortor.",
        image: "drone.png",
        className: "group-hover:-translate-x-[380px] group-hover:-translate-y-[130px]"
    },
    {
        title: "Web-Development",
        description: "Lorem ipsum dolor sit amet consectetur. Eu mi euismod pulvinar augue accumsan. Congue rutrum aliquet turpis iaculis nunc tortor.",
        image: "code.png",
        className: "group-hover:translate-x-[380px] group-hover:-translate-y-[130px]"
    },
    {
        title: "Automation",
        description: "Lorem ipsum dolor sit amet consectetur. Eu mi euismod pulvinar augue accumsan. Congue rutrum aliquet turpis iaculis nunc tortor.",
        image: "branch.png",
        className: "group-hover:-translate-x-[340px] group-hover:translate-y-[130px]"
    },
    {
        title: "Graphics & Banner",
        description: "Lorem ipsum dolor sit amet consectetur. Eu mi euismod pulvinar augue accumsan. Congue rutrum aliquet turpis iaculis nunc tortor.",
        image: "drone.png",
        className: "group-hover:translate-x-[340px] group-hover:translate-y-[130px]"
    }
]

export default function WhyChooseUsSection() {
    return (
        <Section
            id="Why Choose Us?"
            icon="basil:box-outline"
            title="Our Winning Edge"
            subtitle="Explore the unique strengths and exceptional value we provide."
            className="" //bg-[#010314]
            overlay=""
            background=""
            parentBackground=""
        >
            <div className="flex relative justify-center group">
                <Image
                    src="/images/cellphone.png"
                    alt="Cellphone"
                    width={330}
                    height={330}
                    className="object-cover z-10"
                />
                {whyChooseUs.map((item) => (
                    <div key={item.title} className={`absolute transition-all duration-600 top-55 ${item.className}`}>
                        <Card className="w-[288px] border-gradient-2">
                            <div className="p-4 space-y-2">
                                <Image
                                    src={`/images/icons/${item.image}`}
                                    alt={item.image}
                                    width={30}
                                    height={30}
                                    className="object-cover"
                                />
                                <h1 className="text-[20px] font-semibold text-gradient">{item.title}</h1>
                                <p className="text-[15px] text-[#D6D6D6]">{item.description}</p>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </Section>
    )
}
