"use client";

// loading lottie with no ssr issues

import dynamic from "next/dynamic";

const ScrollDownAnimation = dynamic(
  () => import("./LottieFileComponents/ScrollDownLottie.component"),
  { ssr: false }
);

export default function ScrollDownLottieComponent() {
  return (
   
      <a href="#work">
        <ScrollDownAnimation />
      </a>
   
  );
}
