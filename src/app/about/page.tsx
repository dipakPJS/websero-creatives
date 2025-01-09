"use client";

import AboutIntroComponent from "@/components/AboutIntro.component";
import AboutMarqueeComponent from "@/components/AboutMarquee.component";
import TextScrollComponent from "@/components/TextScroll.component";
import ContactGradientComponent from "@/components/ContactGradient.component";
import FooterComponent from "@/components/Footer.component";
import { AnimatedTestimonialsComponent } from "@/components/AnimatedTestimonials.component";
import AboutIntroParaComponent from "@/components/AboutIntroPara.component";
import AboutInfoTextHorizontalScrollComponent from "@/components/AboutInfoHorizontalScroll.component";
import { WorldMapComponent } from "@/components/WorldMap.component";

export default function AboutPage() {
  return (
    <div className="h-full w-[100vw] relative bg-black">
      <AboutIntroComponent />
      <TextScrollComponent />
      <AboutIntroParaComponent />
      <AboutMarqueeComponent />
      <AboutInfoTextHorizontalScrollComponent />
      <WorldMapComponent />
      <AnimatedTestimonialsComponent bgColor="black" />
      <ContactGradientComponent />
      <FooterComponent />
    </div>
  );
}
