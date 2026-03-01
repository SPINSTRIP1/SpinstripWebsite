"use client";

import React, { useState, useEffect, useCallback } from "react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import LaptopCarousel from "@/components/laptop-carousel";

export default function HeroPage({
  titles,
  description,
}: {
  titles?: string[];
  description?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const heroTexts = titles || [
    "what moves you",
    "your vibe",
    "what's trending",
    "places around you",
    "restaurants near you",
    "events around you",
  ];

  const cycleText = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % heroTexts.length);
      setIsAnimating(false);
    }, 500);
  }, []);

  useEffect(() => {
    const interval = setInterval(cycleText, 3000);
    return () => clearInterval(interval);
  }, [cycleText]);

  return (
    <section
      style={{
        background:
          "linear-gradient(90deg, #CCBAF5 0%, #EBE2FF 15%, #E6DAEA2B 35%, #E6DAEA2B 65%, #EBE2FF 85%, #CCBAF5 100%)",
      }}
      id="home"
      className="w-full flex rounded-b-4xl shadow items-center p-2 pt-27 pb-7 md:pt-40 lg:pb-20 justify-center"
    >
      <MaxWidthWrapper className="flex flex-col justify-center pb-5 lg:pb-20 items-center ">
        <h1 className="text-5xl text-center text-primary  flex flex-col md:flex-row items-center md:items-start gap-x-2 lg:text-[64px] font-medium">
          Discover{" "}
          <span className="inline-block text-primary-text  overflow-hidden pb-2  mt-3 md:mt-0 align-bottom">
            <span
              className={`inline-block transition-all duration-500 ease-in-out ${
                isAnimating
                  ? "-translate-y-full opacity-0"
                  : "translate-y-0 opacity-100"
              }`}
            >
              {heroTexts[currentIndex]}
            </span>
          </span>
        </h1>
        <div className="max-w-222.5!">
          <p className="text-lg lg:text-2xl text-secondary-text text-center max-w-110  lg:max-w-146.75 mt-2 mb-7">
            {description ||
              `
            Explore vibrant places, meet inspiring people, connect with trusted
          vendors, and dive into unforgettable experiences, all in one platform.
  `}
          </p>
        </div>
        <LaptopCarousel />
      </MaxWidthWrapper>
    </section>
  );
}
