"use client"
import { motion } from "framer-motion";
import ProcessData from "@/data/ProcessData.json";
import { MeteorsComponent } from "./Meteors.component";

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


export default function ProcessComponent() {
  return (
    <div className="w-full min-h-[100vh] py-[50px] flex flex-col items-center text-left ">
      <div className="w-full">
        <motion.p
         variants={fastLoadingVariants}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.2 }}
          className="font-audioWide text-center md:text-left lg:text-left md:pl-5 lg:pl-8 font-bold text-black text-3xl sm:text-3xl md-1:text-5xl md:text-6xl lg-1:text-7xl lg:text-8xl uppercase"
        >
          Process
        </motion.p>
      </div>

      <br />
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-5 lg:gap-10 p-2 lg:p-10 place-items-center w-full">
        {ProcessData.map((item, index) => {
          return (
            <MeteorsComponent
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}