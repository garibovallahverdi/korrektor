import { Footer } from "@/components/Footer";
import { ContactSection } from "@/featured/section/ContactSection";
import { DemoSection } from "@/featured/section/DemoSection";
import { FAQSection } from "@/featured/section/FAQSection";
import { HeroSection } from "@/featured/section/HeroSection";
import { PricingSection } from "@/featured/section/PricingSection";
import { ServicesSection } from "@/featured/section/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <ServicesSection/>
      <DemoSection/>
      <PricingSection/>
      <ContactSection/>
      <FAQSection/>
      <Footer/>
    </div>
  );
}
