"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import { motion } from "framer-motion";

// Lazy load GradientTextComponent
const GradientTextComponent = dynamic(() => import("./GradientText.component"), {
  ssr: false,
});

// Reusable animation variants
const fadeInVariants = {
  top: { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 } },
  bottom: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
};

// Shared motion props (memoized outside the component for better performance)
const sharedMotionProps = {
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.6 },
};

export default function AboutIntroParaComponent() {
  // Memoize common properties for optimization
  const blocks = useMemo(
    () => [
      {
        key: "first",
        text: `For us, it&lsquo;s all about creating meaningful experiences that
          resonate with your audience and help your business grow. We make our
          mark by creating unique branding, designing beautiful websites, and
          boosting visibility through SEO and PPC strategies that drive real growth.`,
        delay: 0.2,
      },
      {
        key: "second",
        text: `Our process begins with understanding your vision, goals, and
          challenges. Whether you&lsquo;re a startup making your mark or an
          established business expanding online, we dive deep into your needs.
          Then, we craft a custom approach that combines creativity and
          strategy to ensure your brand shines and your website excels.`,
        delay: 0.4,
      },
    ],
    []
  );

  return (
    <div className="min-h-[70vh] relative w-full px-2 lg:px-5 py-[50px] overflow-y-hidden flex flex-col justify-center items-center">
      {/* Title text */}
      <motion.p
        {...sharedMotionProps}
        initial={fadeInVariants.top.initial}
        whileInView={fadeInVariants.top.animate}
        transition={{ ...sharedMotionProps.transition, delay: 0.1 }}
        className="w-full"
      >
        <GradientTextComponent
          span={true}
          texts="What we do"
          classNames="mb-[100px] uppercase font-audioWide text-4xl font-bold block md:hidden lg:hidden text-center"
        />
      </motion.p>

      <div className="flex justify-center flex-col md:flex-row lg:flex-row h-full w-full gap-10">
        {/* Render Blocks Dynamically */}
        {blocks.map(({ key, text, delay }) => (
          <motion.div
            key={key}
            {...sharedMotionProps}
            initial={fadeInVariants.top.initial}
            whileInView={fadeInVariants.top.animate}
            transition={{ ...sharedMotionProps.transition, delay }}
            className="shadow-[0_0_20px_blue] w-full md:w-[500px] lg:w-[700px] h-auto text-balance p-5 border border-white rounded-[50px]"
          >
            <div className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-eagleLake">
              <p dangerouslySetInnerHTML={{ __html: text }} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
