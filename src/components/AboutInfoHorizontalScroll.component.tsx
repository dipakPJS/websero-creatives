"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AboutData from "@/data/AboutData.json";
import GradientTextComponent from "./GradientText.component";

const AboutInfoTextHorizontalScrollComponent: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  // Scroll progress for the targeted element
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Horizontal movement effect
  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-90%"]);

  // Skew effect during scroll
  const skewX = useTransform(scrollYProgress, [0, 2], ["-5deg", "-10deg"]);

  return (
    <div ref={targetRef} className="h-[1000vh]">
      <div className="z-10 relative h-full w-full">
        <div className="sticky top-0 h-screen flex items-start pt-[200px] overflow-hidden">
          <motion.div
            style={{ x, skewX }}
            className="flex gap-5 mt-[-100px]"
          >
            {AboutData.map(({ title, description }, index) => (
              <div
                key={index}
                className="min-h-[100px] w-[300px] sm:w-[350px] md:w-[400px] lg:w-[500px] flex flex-col gap-2 lg:gap-5 p-5 rounded-[50px] border border-white bg-transparent transition-transform duration-500 ease-in-out hover:scale-[1.1]"
              >
                <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-eagleLake w-full">
                  <GradientTextComponent span={true} texts={title} />
                </h3>
                <p className="text-xl md:text-xl lg:text-2xl text-gray-200">
                  {description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfoTextHorizontalScrollComponent;
