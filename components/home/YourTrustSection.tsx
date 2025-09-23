"use client";

import Image from "next/image";
import { useParallax } from "react-scroll-parallax";
import { useRef } from "react";
import Section from "../ui/section";

type YourTrustProps = {
  description: string;
  image: string;
  className: string;
};

const yourTrust: YourTrustProps[] = [
  { description: "Lorem ipsum 1", image: "performance.png", className: "" },
  { description: "Lorem ipsum 2", image: "accessability.png", className: "" },
  { description: "Lorem ipsum 3", image: "best-practice.png", className: "" },
  { description: "Lorem ipsum 4", image: "design-excellence.png", className: "" },
];

// ✅ Child component that uses the hook
function ParallaxImage({
  item,
  index,
  total,
  marginTop,
}: {
  item: YourTrustProps;
  index: number;
  total: number;
  marginTop: number[];
}) {
  const paddingLeft = index * 25;
  const paddingTop = index * 25;

  const parallaxProps = useParallax<HTMLDivElement>({
    translateY: [0, -10],
  });

  return (
    <div
      ref={parallaxProps.ref}
      className="sticky top-[20vh] h-[504px]"
      style={{ zIndex: total + index }}
    >
      <div className="transition-transform duration-300 ease-out relative">
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
            style={{
              paddingLeft,
              paddingTop: 0,
              marginTop: marginTop[index],
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function YourTrustSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // example values for marginTop (you had commented out)
  const marginTop = [100, 50, -50, -100];

  return (
    <Section
      id="Your Trust"
      icon="solar:star-fall-bold"
      title="What We Guarantee"
      subtitle="We guarantee websites that work for everyone, load fast, and follow modern standards."
    >
      {/* Parallax images */}
      <div className="absolute top-0 right-0 left-0 hidden xl:flex items-center justify-center">
        <div
          ref={containerRef}
          className={`relative pb-[calc(100vh + ${(yourTrust.length - 1) * 50}vh)]`}
        >
          {yourTrust.map((item, index) => (
            <ParallaxImage
              key={index}
              item={item}
              index={index}
              total={yourTrust.length}
              marginTop={marginTop}
            />
          ))}
        </div>
      </div>

      {/* mobile (unchanged) */}
      <div className="xl:hidden text-white">
        <div className="flex flex-col space-y-[10%]">
          {yourTrust.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative">
                <Image
                  src={`/images/offers/${item.image}`}
                  alt={item.image}
                  width={490.34}
                  height={404}
                  className="h-[clamp(100px,70vw,404px)] w-auto object-cover"
                />
              </div>
              <div className="space-y-3 max-w-[490.34px] mt-[5%]">
                <span className="relative flex justify-center items-center size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FB82FF] opacity-75"></span>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FB82FF] opacity-65"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-[#FB82FF]"></span>
                </span>
                <p className="text-[clamp(15px,2.2vw,20px)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
