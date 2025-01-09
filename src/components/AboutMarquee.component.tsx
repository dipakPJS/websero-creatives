"use client";

import dynamic from "next/dynamic";
import Marquee from "react-fast-marquee";
import { AiOutlinePartition } from "react-icons/ai";

// Lazy load components
const GradientTextComponent = dynamic(() => import("./GradientText.component"), { ssr: false });
 

export default function AboutMarqueeComponent() {
  return (
    <div className="bg-black">
      <Marquee
        speed={250}
        autoFill={true}
        pauseOnHover={false}
        loop={0}
        gradient={true}
        gradientColor="black"
        gradientWidth={300}
        className="h-full w-full"
      >
        <div className="w-full flex items-center gap-5">
          <p className="text-white text-[150px] font-iceBerg uppercase px-10 border border-white rounded-[200px]">
            <GradientTextComponent texts=" What are we here for?" span={true} />
          </p>
        
            <AiOutlinePartition className="text-white text-[150px]" />{" "}
         
        </div>
      </Marquee>
    </div>
  );
}
