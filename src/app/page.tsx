import AchievementsComponent from "@/components/Achievement.component";
import { AnimatedTestimonialsComponent } from "@/components/AnimatedTestimonials.component";
import BrandsComponent from "@/components/Brands.component";
import ContactGradientComponent from "@/components/ContactGradient.component";
import DesignersComponent from "@/components/Designers.component";
import FooterComponent from "@/components/Footer.component";
import HomePageComponent from "@/components/HomePage.component";
import MainServicesComponent from "@/components/MainService.component";
import PricingComponent from "@/components/Pricing.component";
import ProcessComponent from "@/components/Process.component";
import WorkComponent from "@/components/Work.component";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
  
      <HomePageComponent />
      <WorkComponent />
      <MainServicesComponent />
      <ProcessComponent />
      <BrandsComponent />
      <div className="relative bg-black">
        <DesignersComponent />
        <AchievementsComponent />
        <PricingComponent />
        <AnimatedTestimonialsComponent bgColor="transparent" />
        <ContactGradientComponent />
        <FooterComponent />
      </div>
    </div>
  );
}
