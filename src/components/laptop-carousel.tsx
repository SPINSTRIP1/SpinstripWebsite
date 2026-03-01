"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const SCREEN_IMAGES = [
  "/merchant/1.png",
  "/merchant/2.png",
  "/merchant/3.png",
  "/merchant/4.png",
  "/merchant/5.png",
  "/merchant/6.png",
  "/merchant/7.png",
  "/merchant/8.png",
];

export default function LaptopCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isSliding, setIsSliding] = useState(false);

  const slide = useCallback(() => {
    setIsSliding(true);

    // After the slide animation completes, update current to next and reset
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % SCREEN_IMAGES.length);
      setNextIndex((prev) => (prev + 1) % SCREEN_IMAGES.length);
      setIsSliding(false);
    }, 800); // matches the CSS transition duration
  }, []);

  useEffect(() => {
    const interval = setInterval(slide, 3500);
    return () => clearInterval(interval);
  }, [slide]);

  return (
    <div className="relative w-full flex items-center justify-center mt-8 lg:mt-12">
      <div className="relative w-full max-w-7xl overflow-hidden aspect-16/9">
        {/* Current screen */}
        <div
          className="absolute inset-0 w-full h-full transition-transform duration-800 ease-in-out"
          style={{
            transform: isSliding ? "translateX(-100%)" : "translateX(0)",
          }}
        >
          <Image
            src={SCREEN_IMAGES[currentIndex]}
            alt={`Dashboard screen ${currentIndex + 1}`}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Next screen — slides in from right */}
        <div
          className="absolute inset-0 w-full h-full transition-transform duration-800 ease-in-out"
          style={{
            transform: isSliding ? "translateX(0)" : "translateX(100%)",
          }}
        >
          <Image
            src={SCREEN_IMAGES[nextIndex]}
            alt={`Dashboard screen ${nextIndex + 1}`}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
