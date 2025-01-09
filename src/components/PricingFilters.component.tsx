"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pricingData from "../data/PricingData.json";
import PricingCardComponent from "./PricingCard.component";

const PricingFilterComponent: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<
    "Basic" | "Content-Focused" | "Custom" | "Enterprise"
  >("Basic");

  // Memoize filtered packages to avoid unnecessary calculations
  const filteredPackages = useMemo(
    () => pricingData.filter((pkg) => pkg.level === activeLevel),
    [activeLevel]
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1, // Reduced delay for smoother loading
        duration: 0.4, // Optimized duration for faster animation
        ease: "easeOut",
      },
    }),
    exit: { opacity: 0, y: 50, transition: { duration: 0.3 } },
  };

  return (
    <div className="p-2 w-full">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-4">
        {["Basic", "Content-Focused", "Custom", "Enterprise"].map((level) => (
          <button
            key={level}
            onClick={() =>
              setActiveLevel(
                level as "Basic" | "Content-Focused" | "Custom" | "Enterprise"
              )
            }
            className={`lg:px-4 md:px-2 px-2 py-2 rounded-[50px] lg:text-lg md:text-md text-xs font-semibold transition-colors ${
              activeLevel === level
                ? "bg-purple-600 text-white"
                : "bg-white text-black"
            }`}
          >
            {level} Package
          </button>
        ))}
      </div>

      {/* Pricing Cards */}
      <motion.div
        className="mt-3 pt-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 lg:px-10 min-h-[30rem]"
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <AnimatePresence>
          {filteredPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              custom={index}
            >
              <PricingCardComponent
                title={pkg.title}
                price={pkg.price}
                description={pkg.description}
                pages={pkg.pages}
                duration={pkg.duration}
                additional={pkg.additional}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default PricingFilterComponent;
