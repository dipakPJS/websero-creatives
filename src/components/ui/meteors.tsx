"use client";

import { cn } from "@/lib/utils";
import React, { useMemo } from "react";

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = useMemo(() => new Array(number).fill(true), [number]);

  const randomValue = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={`meteor-${idx}`}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-full bg-slate-500",
            "shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform",
            "before:-translate-y-1/2 before:w-[50px] before:h-[1px]",
            "before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: 0,
            left: `${randomValue(-400, 400)}px`,
            animationDelay: `${randomValue(0.2, 0.8)}s`,
            animationDuration: `${Math.floor(randomValue(2, 10))}s`,
          }}
        ></span>
      ))}
    </>
  );
};
