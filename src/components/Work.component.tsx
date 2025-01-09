"use client";
import { EmblaOptionsType } from "embla-carousel";

import EmblaCarousel from "./EmblaCarouselComponent/EmblaCarousel.component";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

const WorkComponent: React.FC = () => {
  return (
    <div
      className="relative w-full min-h-[100vh] flex justify-center items-center py-100px"
      id="work"
    >
      {/* Carousel starts */}
      <div className="w-full  h-full">
        <EmblaCarousel options={OPTIONS} />
      </div>
      {/* Carousel ends */}
    </div>
  );
};

export default WorkComponent;
