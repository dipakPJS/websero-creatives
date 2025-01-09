"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import TestimonialData from "@/data/TestimonialData.json";
import { motion } from "framer-motion";
import GradientTextComponent from "./GradientText.component";

interface AnimData {
  bgColor: string;
}

// Animation Variants
const fastLoadingVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function AnimatedTestimonialsComponent({ bgColor }: AnimData) {
  return (
    <div
      className="px-10 min-h-[100vh] flex items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <div className="h-auto w-full flex flex-col gap-y-[50px]">
        <div className="z-10 relative">
          <motion.p
            variants={fastLoadingVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="font-audioWide text-center font-bold text-white text-3xl sm:text-3xl md-1:text-3xl md:text-4xl lg-1:text-5xl lg:text-6xl uppercase"
          >
            What clients <GradientTextComponent span={true} texts="say!" />
          </motion.p>
          <AnimatedTestimonials testimonials={TestimonialData} />
        </div>
      </div>
    </div>
  );
}
