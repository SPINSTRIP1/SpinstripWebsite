"use client";

import React, { useState, useEffect, useCallback } from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import PhoneCarousel from "./phone-carousel";

const heroTexts = ["What Moves you", "Places around you", "Events near you"];

export default function HeroPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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
        backgroundImage: "url('/bg-3.png')",
        backgroundRepeat: "no-repeat",
      }}
      id="home"
      className="w-full flex rounded-b-4xl bg-size-[280%] lg:bg-size-[130%] shadow items-center p-2 pt-27 pb-7 md:pt-40 lg:pb-20 justify-center"
    >
      <MaxWidthWrapper className="flex flex-col max-w-220.5! justify-center pb-5 lg:pb-40 items-center ">
        <h1 className="text-5xl text-center flex flex-col md:flex-row items-center gap-x-2 lg:text-[64px] text-primary-text font-medium">
          Discover{" "}
          <span className="inline-block text-primary overflow-hidden pb-2 md:h-[1.3em] mt-3 md:mt-4.5 align-bottom">
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
        <p className="text-lg lg:text-2xl text-secondary-text text-center max-w-110  lg:max-w-146.75 mt-2 mb-7">
          Explore vibrant places, meet inspiring people, connect with trusted
          vendors, and dive into unforgettable experiences, all in one platform.
        </p>
        <PhoneCarousel />
      </MaxWidthWrapper>
    </section>
  );
}
