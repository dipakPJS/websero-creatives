"use client";

import React from "react";
import { motion } from "framer-motion";

import { PrevButton, NextButton } from "./EmblaCarouselArrowButtons.component";
import { useEmblaContext } from "../../context/EmblaContext";
import Link from "next/link";

const fadeInDirections = {
  top: { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 } },
  bottom: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
};

const EmblaControls: React.FC = () => {
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = useEmblaContext();

  return (
    <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-center sm:justify-between md:justify-between lg:justify-between pr-2 md:pr-[100px] lg-1:pr-[100px] lg:pr-[100px] items-end ">
      <div className="work w-full text-center">
        
          <motion.p
            initial={fadeInDirections.bottom.initial}
            whileInView={fadeInDirections.bottom.animate}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bold font-audioWide text-[80px] sm:text-[120px] md:text-[140px] lg-1:text-[250px] lg:text-[350px] work-font text-black"
          >
            Work
          </motion.p>
       
      </div>

      {/* main embla-controls */}
      <motion.div
      
      initial={fadeInDirections.right.initial}
      whileInView={fadeInDirections.right.animate}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      
      className="flex flex-col justify-center items-center w-full h-auto p-3 gap-3 mb-5">
        <Link
          href={"/work"}
          className=" text-xl md:text-xl lg-1:text-2xl lg:text-2xl py-2 px-10 sm:py-2 sm:px-10 md:py-2 md:px-5  lg:py-2 lg:px-5 rounded-[50px] border border-black font-semibold text-black duration-700 hover:bg-black hover:text-white"
        >
          View All
        </Link>
        <div className="embla__controls">
          <div className="embla__buttons flex justify-center gap-3 items-center">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
              className="scale-[0.7] sm:scale-[0.8] md:scale-[0.8] lg-1:scale-[1] lg:scale-[1]"
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
              className="scale-[0.7] sm:scale-[0.8] md:scale-[0.8] lg-1:scale-[1] lg:scale-[1]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EmblaControls;