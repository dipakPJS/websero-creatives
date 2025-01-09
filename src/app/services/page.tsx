"use client";

import ServicesListComponent from "@/components/ServicesList.component";
import ServiceIndustriesComponent from "@/components/ServiceIndustries.component";
import ServiceBookingComponent from "@/components/ServicesBooking.component";
import { AnimatedTestimonialsComponent } from "@/components/AnimatedTestimonials.component";
import WorkflowComponent from "@/components/WorkFlow.component";
import ContactGradientComponent from "@/components/ContactGradient.component";
import FooterComponent from "@/components/Footer.component";
import ServiceIntroComponent from "@/components/ServiceIntro.component";

export default function ServicesPage() {
  return (
    <div className="min-h-[100vh] w-full bg-black text-white ">
      <ServiceIntroComponent />
      <ServicesListComponent />
      <ServiceIndustriesComponent />
      <ServiceBookingComponent />
      <AnimatedTestimonialsComponent bgColor="transparent" />
      <WorkflowComponent />
      <ContactGradientComponent />
      <FooterComponent />
    </div>
  );
}
