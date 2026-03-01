"use client";

import React, { useState, useRef, useEffect } from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";
import { Card } from "./doing-today";

/* Desktop card – wider landscape layout for dashboard screens */
function DesktopScreenCard({ card }: { card: Card }) {
  return (
    <div
      className={`group ${card.bgColor} rounded-3xl min-w-130 w-130 p-3 h-90 overflow-hidden transition-all duration-500 ease-in-out hover:h-110 shrink-0`}
    >
      <div className={`${card.glassStyle} rounded-2xl px-3 py-1`}>
        <h2 className={`relative z-10 text-xl ${card.titleColor} font-bold`}>
          {card.title}
        </h2>
        <p
          className={`relative z-10 text-lg ${card.textColor} max-h-0 overflow-hidden opacity-0 group-hover:max-h-57 group-hover:opacity-100 group-hover:mt-2 transition-all duration-500 ease-in-out`}
        >
          {card.description}
        </p>
      </div>
      <Image
        src={card.image}
        className="w-full h-[80%] mt-4 object-contain object-top transition-all duration-500 ease-in-out"
        alt={card.title}
        width={1200}
        height={750}
      />
    </div>
  );
}

/* Mobile card – tap to expand, landscape for dashboard screens */
function MobileScreenCard({
  card,
  expanded,
  onToggle,
}: {
  card: Card;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      onClick={onToggle}
      className={`${card.bgColor} rounded-3xl min-w-80 w-80 p-3 overflow-hidden transition-all duration-500 ease-in-out shrink-0 cursor-pointer ${
        expanded ? "h-100" : "h-72"
      }`}
    >
      <div className={`${card.glassStyle} rounded-2xl px-3 py-1`}>
        <h2 className={`relative z-10 text-lg ${card.titleColor} font-bold`}>
          {card.title}
        </h2>
        <p
          className={`relative z-10 ${card.textColor} transition-all duration-500 ease-in-out ${
            expanded
              ? "max-h-57 opacity-100 mt-2"
              : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          {card.description}
        </p>
      </div>
      <Image
        src={card.image}
        className="w-full h-[75%] mt-4 object-contain object-top transition-all duration-500 ease-in-out"
        alt={card.title}
        width={1200}
        height={750}
      />
    </div>
  );
}

interface DoingTodayDesktopProps {
  headTitle?: string;
  description?: string;
  customCards?: Card[];
  additionalTitle?: string;
}

export default function DoingTodayDesktop({
  headTitle,
  description,
  customCards,
  additionalTitle,
}: DoingTodayDesktopProps) {
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);

  const cards = customCards || [];

  const handleToggle = (id: number) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent | TouchEvent) {
      if (
        mobileCarouselRef.current &&
        !mobileCarouselRef.current.contains(e.target as Node)
      ) {
        setExpandedCardId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <MaxWidthWrapper id="features" className="mt-16 md:mt-20 overflow-x-hidden">
      <h1 className="text-3xl text-center lg:text-left md:text-5xl lg:text-[58px] text-primary-text font-medium">
        {additionalTitle || "What you can"}{" "}
        <span className="text-primary">{headTitle || "Explore"}</span> today?
      </h1>
      <p className="text-base md:text-xl lg:text-2xl text-secondary-text text-pretty text-center lg:text-left w-full mx-auto lg:mx-0 max-w-[85%] mt-2 mb-7">
        {description ||
          "SpinStrip is your go-to for discovering what to do, where to go, and who to go with. Your lifestyle companion in one app."}
      </p>

      {/* Mobile Carousel – tap to expand */}
      <div
        ref={mobileCarouselRef}
        className="carousel-container w-full lg:hidden"
      >
        <div className="carousel-track">
          {cards.map((card) => (
            <MobileScreenCard
              key={`m-first-${card.id}`}
              card={card}
              expanded={expandedCardId === card.id}
              onToggle={() => handleToggle(card.id)}
            />
          ))}
          {cards.map((card) => (
            <MobileScreenCard
              key={`m-second-${card.id}`}
              card={card}
              expanded={expandedCardId === card.id}
              onToggle={() => handleToggle(card.id)}
            />
          ))}
        </div>
      </div>

      {/* Desktop Carousel – hover to expand */}
      <div className="carousel-container w-full hidden lg:block">
        <div className="carousel-track">
          {cards.map((card) => (
            <DesktopScreenCard key={`d-first-${card.id}`} card={card} />
          ))}
          {cards.map((card) => (
            <DesktopScreenCard key={`d-second-${card.id}`} card={card} />
          ))}
        </div>
      </div>

      <div className="flex items-center py-12 justify-center gap-x-5">
        <button className="text-primary w-92 cursor-pointer font-bold bg-primary-accent transition-colors duration-300 ease-in-out rounded-3xl px-4 py-2 hover:bg-primary hover:text-white">
          Download the App
        </button>
        <button className="bg-primary w-92 cursor-pointer hover:bg-primary/80 transition-colors duration-300 ease-in-out font-bold rounded-3xl px-4 py-2 text-white">
          Join the Waitlist
        </button>
      </div>
    </MaxWidthWrapper>
  );
}
