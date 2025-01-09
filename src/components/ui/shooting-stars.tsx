"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef, useMemo } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

const randomValue = (min: number, max: number) => Math.random() * (max - min) + min;

const getRandomStartPoint = (width: number, height: number) => {
  const side = Math.floor(Math.random() * 4);
  const offset = randomValue(0, side % 2 === 0 ? width : height);

  switch (side) {
    case 0: return { x: offset, y: 0, angle: 45 };
    case 1: return { x: width, y: offset, angle: 135 };
    case 2: return { x: offset, y: height, angle: 225 };
    case 3: return { x: 0, y: offset, angle: 315 };
    default: return { x: 0, y: 0, angle: 45 };
  }
};

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 1,
  className,
}) => {
  const [star, setStar] = useState<ShootingStar | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;

    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint(dimensions.width, dimensions.height);
      const newStar: ShootingStar = {
        id: Date.now(),
        x,
        y,
        angle,
        scale: 1,
        speed: randomValue(minSpeed, maxSpeed),
        distance: 0,
      };
      setStar(newStar);

      setTimeout(createStar, randomValue(minDelay, maxDelay));
    };

    createStar();
  }, [dimensions, minSpeed, maxSpeed, minDelay, maxDelay]);

  useEffect(() => {
    if (!star) return;

    const moveStar = () => {
      setStar((prevStar) => {
        if (!prevStar) return null;

        const { x, y, angle, speed, distance } = prevStar;
        const newX = x + speed * Math.cos((angle * Math.PI) / 180);
        const newY = y + speed * Math.sin((angle * Math.PI) / 180);
        const newDistance = distance + speed;

        if (
          newX < -20 || newX > dimensions.width + 20 ||
          newY < -20 || newY > dimensions.height + 20
        ) {
          return null;
        }

        return { ...prevStar, x: newX, y: newY, distance: newDistance, scale: 1 + newDistance / 100 };
      });
    };

    const animationFrame = requestAnimationFrame(moveStar);
    return () => cancelAnimationFrame(animationFrame);
  }, [star, dimensions]);

  const gradientId = useMemo(() => `gradient-${Date.now()}`, []);

  return (
    <svg ref={svgRef} className={cn("w-full h-full absolute inset-0", className)}>
      {star && (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill={`url(#${gradientId})`}
          transform={`rotate(${star.angle}, ${
            star.x + (starWidth * star.scale) / 2
          }, ${star.y + starHeight / 2})`}
        />
      )}
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: starColor, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  );
};
