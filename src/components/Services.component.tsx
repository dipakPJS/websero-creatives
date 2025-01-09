"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { LiaPlusSolid } from "react-icons/lia";
import { LiaTimesSolid } from "react-icons/lia";

import ServicesData from "@/data/ServicesData.json";

interface ServiceStyles {
  colors: string[];
}

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


export default function ServiceComponent({ colors }: ServiceStyles) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Memoize filtered services if additional filtering logic is added later
  const memoizedServicesData = useMemo(() => ServicesData, []);

  return (
    <motion.div
    variants={fastLoadingVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.2 }}
      className="services text-left w-full px-4 md:px-8 lg:px-12 py-6"
    >
      <div className="mt-2">
        <p
          className="text-4xl service-title font-semibold font-audioWide mb-4"
          style={{ color: colors[2] }}
        >
          Services:
        </p>
        <div className="space-y-4">
          {memoizedServicesData.map((service, index) => (
            <div
              key={index}
              className="border-b-2 cursor-pointer"
              style={{ borderColor: colors[0] }}
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center py-4">
                <p
                  className="text-2xl font-hubballi font-extrabold"
                  style={{ color: colors[2] }}
                >
                  {service.title}
                </p>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeIndex === index ? (
                    <LiaTimesSolid
                      className="text-4xl"
                      style={{ color: colors[2] }}
                    />
                  ) : (
                    <LiaPlusSolid
                      className="text-4xl"
                      style={{ color: colors[2] }}
                    />
                  )}
                </motion.div>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <p
                      className="text-xl text-semibold p-4"
                      style={{ color: colors[1] }}
                    >
                      {service.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
