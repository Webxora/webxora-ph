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
        className: `
        z-10 -mt-17
        lg:group-hover:-translate-x-[340px] lg:group-hover:-translate-y-[130px] lg:z-0 lg:mt-0
        xl:group-hover:-translate-x-[380px] xl:group-hover:-translate-y-[130px] xl:z-0 xl:mt-0
        `
    },
    {
        title: "Web-Development",
        description: "Lorem ipsum dolor sit amet consectetur. Eu mi euismod pulvinar augue accumsan. Congue rutrum aliquet turpis iaculis nunc tortor.",
        image: "code.png",
        className: `
        z-10 mt-30
        lg:group-hover:translate-x-[340px] lg:group-hover:-translate-y-[130px] lg:z-0 lg:mt-0
        xl:group-hover:translate-x-[380px] xl:group-hover:-translate-y-[130px] xl:z-0 xl:mt-0
        `
    },
    {
        title: "Automation",
        description: "Lorem ipsum dolor sit amet consectetur. Eu mi euismod pulvinar augue accumsan. Congue rutrum aliquet turpis iaculis nunc tortor.",
        image: "branch.png",
        className: `
        z-10 mt-78
        lg:group-hover:-translate-x-[320px] lg:group-hover:translate-y-[130px] lg:z-0 lg:mt-0
        xl:group-hover:-translate-x-[340px] xl:group-hover:translate-y-[130px] xl:z-0 xl:mt-0
        `
    },
    {
        title: "Graphics & Banner",
        description: "Lorem ipsum dolor sit amet consectetur. Eu mi euismod pulvinar augue accumsan. Congue rutrum aliquet turpis iaculis nunc tortor.",
        image: "drone.png",
        className: `
        z-10 mt-126
        lg:group-hover:translate-x-[320px] lg:group-hover:translate-y-[130px] lg:z-0 lg:mt-0
        xl:group-hover:translate-x-[340px] xl:group-hover:translate-y-[130px] xl:z-0 xl:mt-0
        `
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
            <div className="min-h-[950px] lg:min-h-[330px]">
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
                            <Card className="w-[323px] lg:w-[288px] border-gradient-2">
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
            </div>
        </Section>
    )
}
