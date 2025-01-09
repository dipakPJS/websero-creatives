"use client";

import dynamic from "next/dynamic";
import { useCursor } from "@/context/CursorContext";

// Lazy-loaded components
const VerticalText = dynamic(() => import("./VerticalText.component"), {
  ssr: false,
});
const IntroComponent = dynamic(() => import("./Intro.component"), {
  ssr: false,
});
const CurveComponent = dynamic(() => import("./Curve.component"), {
  ssr: false,
});
const FeatureTextComponent = dynamic(() => import("./FeatureText.component"), {
  ssr: false,
});
const ScrollDownLottieComponent = dynamic(
  () => import("./ScrollDownLottie.component"),
  { ssr: false }
);
const SphereAnimation = dynamic(
  () => import("./LottieFileComponents/SphereLottie.component"),
  { ssr: false }
);

export default function HomePageComponent() {
  const { textLeave } = useCursor();

  return (
    <>
      <div
        onMouseEnter={textLeave}
        className="homepage relative min-h-[120vh] bg-black"
      >
        {/* homepage second starts */}
        <div className=" z-[10] homepage-second absolute h-full w-full flex justify-center items-end lg:items-center">
          <div className=" h-[250px] sm:h-[300px] md:h-[400px] lg-1:h-[500px] lg:h-[500px] w-auto">
            <SphereAnimation />
          </div>
        </div>
        {/* homepage second ends */}
        {/* homepage third starts */}
        <div className=" z-[20] homepage-third absolute h-full w-full ">
          <div className=" flex justify-center items-center h-full w-full">
            <div className="flex flex-col lg:flex-row justify-evenly h-[90%] w-full px-10 pt-[100px] ">
              <div className=" h-full w-full md:px-[50px] pt-10 md:text-center">
                <IntroComponent />
              </div>
              <div className="h-full w-full relative ">
                <FeatureTextComponent />
              </div>
            </div>
          </div>
        </div>
        {/* homepage third ends */}
        {/* homepage 4th starts */}
        <div className="homepage-4th absolute h-full w-full z-10 ">
          <div className="h-full w-full relative">
            <VerticalText />
            <div className="absolute top-[100%] md:top-[90%] lg:top-[73%] h-auto w-full flex lg:justify-end justify-center px-5">
              <ScrollDownLottieComponent />
            </div>
          </div>
        </div>
        {/* homepage 4th ends */}
      </div>
      {/* homepage section ends */}
      {/* curve starts */}
      <CurveComponent />
      {/* curve ends */}
    </>
  );
}
