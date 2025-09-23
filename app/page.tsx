"use client"

import Header from "@/components/Header";
import ContactUsSection from "@/components/home/ContactUsSection";
import HeroSection from "@/components/home/HeroSection";
import OurWorksSection from "@/components/home/OurWorksSection";
import PricingSection from "@/components/home/PricingSection";
import WhatOurClientSaySection from "@/components/home/WhatOurClientSaySection";
import WhatWeOfferSection from "@/components/home/WhatWeOfferSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import YourTrustSection from "@/components/home/YourTrustSection";
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <React.Fragment>
      <ParallaxProvider>
        <Header />
        <HeroSection />
        <WhyChooseUsSection />
        <YourTrustSection />
        <OurWorksSection />
        <WhatWeOfferSection />
        <PricingSection />
        <WhatOurClientSaySection />
        <ContactUsSection />
      </ParallaxProvider>

    </React.Fragment>
  );
}
