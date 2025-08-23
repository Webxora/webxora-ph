import Header from "@/components/Header";
import ContactUsSection from "@/components/home/ContactUsSection";
import HeroSection from "@/components/home/HeroSection";
import OurWorksSection from "@/components/home/OurWorksSection";
import PricingSection from "@/components/home/PricingSection";
import WhatOurClientSaySection from "@/components/home/WhatOurClientSaySection";
import WhatWeOfferSection from "@/components/home/WhatWeOfferSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <WhyChooseUsSection />
      <OurWorksSection />
      <WhatWeOfferSection />
      <PricingSection />
      <WhatOurClientSaySection />
      <ContactUsSection />
    </React.Fragment>
  );
}
