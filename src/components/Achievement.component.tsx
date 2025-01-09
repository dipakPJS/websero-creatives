"use client"
import { motion } from "framer-motion";
import { WobbleCardComponent } from "./WobbleCard.component";

// Animation Variants
const fastLoadingVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  show: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};


export default function AchievementsComponent() {
  return (
    <div className="w-full min-h-[170vh]">
      <div className="z-10 relative  py-[50px] h-full w-full">
        <motion.p
        variants={fastLoadingVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
          className=" text-center md:text-left lg:text-left md:pl-5 lg:pl-8 font-audioWide z-[100] font-bold text-white text-3xl sm:text-3xl md-1:text-5xl md:text-6xl lg-1:text-7xl lg:text-8xl uppercase"
        >
          Achievements
        </motion.p>
        <div className="w-full mt-[100px]">
          <WobbleCardComponent />
        </div>
      </div>
    </div>
  );
}