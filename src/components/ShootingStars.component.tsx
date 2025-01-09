"use client";

import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
export function ShootingStarsComponent() {
  return (
    <div className="h-[100%] bg-black relative w-[100%] hidden lg:block">
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
