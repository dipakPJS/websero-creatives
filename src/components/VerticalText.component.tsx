"use client"
import GradientTextComponent from "./GradientText.component";
import { motion } from "framer-motion";
 
// Animation Variants
const fastLoadingVariants = {
  hidden: { opacity: 0, scale: 0.8, x: 50, y: 50 },
  show: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    x: 0, 
    transition: { duration: 1, ease: "easeOut" } 
  },
};


export default function VerticalText() {
    return (
        <motion.div
        variants={fastLoadingVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="h-full w-full flex justify-between items-center text-center px-5">
       <div className="w-full"></div>
       <div className="h-[500px] w-full  relative">
       <p className="text-xs sm:text-xl md:text-xl lg-1:text-2xl lg:text-2xl text-white font-iceBerg absolute top-[50%] left-[47%] w-full transform rotate-90">
        Your Success, {" "}
          <GradientTextComponent span={true} texts="Our Mission"/>
        </p>
       </div>
      </motion.div>
    )
}