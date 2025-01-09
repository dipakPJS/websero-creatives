"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useMemo } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const randomRotateY = useMemo(() => Math.floor(Math.random() * 21) - 10, []);

  const activeTestimonial = useMemo(() => testimonials[active], [testimonials, active]);

  return (
    <div className="max-w-4xl mx-auto font-sans px-4 md:px-8 lg:px-12 py-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Image Section */}
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    rotateY: randomRotateY,
                  }}
                  animate={{
                    opacity: index === active ? 1 : 0.7,
                    scale: index === active ? 1 : 0.95,
                    rotateY: index === active ? 0 : randomRotateY,
                    zIndex: index === active ? 10 : -10,
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={`absolute inset-0 origin-center ${
                    index === active ? "z-10" : "z-0"
                  }`}
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    className="h-full w-full rounded-3xl object-cover"
                    loading={index === active ? "eager" : "lazy"}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold text-white">{activeTestimonial.name}</h3>
            <p className="text-sm text-gray-500">{activeTestimonial.designation}</p>
            <motion.p
              className="text-lg text-gray-500 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {activeTestimonial.quote}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-gray-100 flex items-center justify-center group/button"
            >
              <IconArrowLeft className="h-5 w-5 text-black group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-gray-100 flex items-center justify-center group/button"
            >
              <IconArrowRight className="h-5 w-5 text-black group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
