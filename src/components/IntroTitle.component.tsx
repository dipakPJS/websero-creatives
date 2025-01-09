"use client";

import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
 

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

 
export default function IntroTitleComponent() {
  const { textEnter, textLeave } = useCursor();
 
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full z-10"
      style={{ boxShadow: "inset 0 0 50px 50px black" }}
      variants={fastLoadingVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}

    >
      <div className="relative w-full h-full">
        {/* Title Section */}
        <div
          
          className="about-header h-full w-full flex justify-center items-center"
        >
          <h1
            className="font-eagleLake text-2xl sm:text-2xl md:text-3xl lg-1:text-4xl lg:text-6xl w-[60%] lg:w-[50%] text-center text-white"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            We are more than just a team
          </h1>
        </div>

        {/* Text Sections */}
        {[
          { text: "We are Listeners", position: "top-[20%] left-[5%] sm:left-[8%] md:left-[15%] lg:left-[20%]"  },
          { text: "we are genies", position: "top-[30%] right-[5%] sm:right-[8%] md:right-[10%] lg:right-[15%]"},
          { text: "we are bunch of specialists", position: "top-[60%] sm:top-[60%] md:top-[75%] lg:top-[75%] left-[10%]"},
        ].map(({ text, position }, index) => (
          <p
            key={index}
            className={`text-lg md:text-xl lg:text-2xl font-bold border border-purple-500 absolute py-2 px-5 text-white ${position} bg-transparent shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[10px] rounded-[50px]`}
          >
            {text}
          </p>
        ))}

        {/* Description Section */}
        <div
          
          className="absolute border border-purple-500 min-h-[120px] w-[300px] sm:w-[400px] md:w-[400px] lg:w-[500px] top-[70%] sm:top-[70%] md-1:top-[60%] md:top-[60%] lg-1:top-[60%] lg:top-[65%] p-5 right-[5%] bg-transparent shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[10px] rounded-[50px]"
        >
          <p className="text-sm md:text-lg lg:text-xl text-white">
            We are visionaries, because we see and understand. We are creators,
            crafting more than just websites—we build experiences. We are a team
            of experts, ready to bring every idea to life with precision and care.
            We are Websero.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
