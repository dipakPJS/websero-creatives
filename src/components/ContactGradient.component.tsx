"use client";

import { motion } from "framer-motion";
import { CoverComponent } from "./Cover.component";

// loading lottie with no ssr issues

import dynamic from "next/dynamic";

const BackgroundAnimation = dynamic(
  () => import("./LottieFileComponents/BackgroundLottie.component"),
  { ssr: false }
);

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

export default function ContactGradientComponent() {
  return (
    <div className=" h-[25rem] sm:h-[25rem] md:h-[30rem] lg:h-[42rem] w-full overflow-hidden relative">
      <div className="absolute h-full w-full z-10 bg-[#00000021]">
        <div className="py-[50px] h-full w-full">
          <div className="w-full">
            <motion.p
              variants={fastLoadingVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className=" text-center md:text-left lg:text-left md:pl-5 lg:pl-8 font-audioWide font-bold text-white text-3xl sm:text-3xl md-1:text-5xl md:text-6xl lg-1:text-7xl lg:text-8xl uppercase"
            >
              Contact
            </motion.p>
          </div>
          <div className="h-full w-full flex items-start justify-center text-center">
            <CoverComponent />
          </div>
        </div>
      </div>

      {/* lottie background */}
      <div className="absolute h-full w-full">
        <BackgroundAnimation />
      </div>
    </div>
  );
}
