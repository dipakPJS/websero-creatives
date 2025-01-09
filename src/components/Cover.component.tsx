"use client"
import React from "react";
import Link from "next/link";
import GradientTextComponent from "./GradientText.component";
import { useCursor } from "@/context/CursorContext";

export function CoverComponent() {
  const {textEnter, textLeave} = useCursor();
  return (
    <div className="pointer-events-auto">
      <h1 className="text-white flex flex-col  text-[50px] sm:text-[70px] md:text-[90px] lg:text-[120px] font-iceBerg max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 ">
        Let&lsquo;s Get 
        <Link
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        onClick={textLeave}
        href={"/contact"} className="backdrop-blur-20 rounded-full p-5 lg:p-10 px-[50px] bg-gradient-to-br from-[#632289] via-[#000000ae] to-[#0008a461]">
          <GradientTextComponent span={true} texts="Started!" />
        </Link>
      </h1>
    </div>
  );
}