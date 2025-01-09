"use client";

import MainContactFormComponent from "@/components/ContactForm/MainContactForm.component";
import FooterComponent from "@/components/Footer.component";


export default function ContactPage() {
  return (
    <div className="h-full w-[100vw] relative overflow-x-hidden bg-black">
      <MainContactFormComponent />
      <FooterComponent />
    </div>
  );
}
