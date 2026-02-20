"use client";

import React, { useState, useEffect, useRef } from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";
import { EVERYONE_TESTIMONIALS } from "@/constants";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export default function WhatUsersSays({
  customTestimonials,
  title,
  description,
}: {
  customTestimonials?: Testimonial[];
  title?: string;
  description?: string;
}) {
  const testimonials = customTestimonials || EVERYONE_TESTIMONIALS;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setActiveIndex(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <MaxWidthWrapper className="md:mt-20 mb-12 overflow-x-hidden">
      <h1 className="text-4xl text-center md:text-left md:text-[58px] text-primary-text font-medium">
        {title || "What our users say"}
      </h1>
      <p className="text-center md:text-left text-xl md:text-2xl text-secondary-text text-pretty w-full md:w-[85%] mt-2 mb-7">
        {description ||
          "Don't just take our word for it — hear from the people who use SpinStrip to level up their lifestyle every day."}
      </p>
      <div ref={containerRef} className="testimonial-marquee-container">
        <div className="testimonial-marquee-track">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              onClick={(e) => handleClick(index, e)}
              className={`group h-46.75 w-46.75 md:h-56.75 md:w-56.75 md:hover:w-130 md:hover:h-55 liquid-glass p-4 flex gap-x-4 items-center rounded-full transition-all duration-500 ease-out md:hover:pr-15 overflow-hidden cursor-pointer shrink-0 ${activeIndex === index ? "w-100 h-45 pr-6 md:w-130 md:h-55 md:pr-15" : "hover:w-100 hover:h-55 hover:pr-6"}`}
            >
              <Image
                src={testimonial.image}
                className={`min-w-38.75 min-h-38.75 max-w-38.75 max-h-38.75 md:min-w-48.75 md:min-h-48.75 md:max-w-48.75 md:max-h-48.75 grayscale group-hover:grayscale-0 rounded-full object-cover shrink-0 ${activeIndex === index ? "grayscale-0" : ""}`}
                alt={testimonial.name}
                width={900}
                height={500}
              />
              <div
                className={`max-w-[322.5px] w-full group-hover:opacity-100 transition-opacity duration-300 delay-150 ${activeIndex === index ? "opacity-100" : "opacity-0"}`}
              >
                <h3 className="text-xs md:text-sm text-primary-text">
                  {testimonial.role}
                </h3>
                <h2 className="md:text-lg text-primary-text font-bold whitespace-nowrap">
                  {testimonial.name}
                </h2>
                <p className="text-sm md:text-base text-secondary-text">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
