"use client";

import React, { useState, useRef, useEffect } from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "Unbelievable Discounts & Deals",
    description:
      "SpinStrip doesn't just find you experiences — it finds you the best version of them. Think 20% off that spa day or a flash deal for your favourite food vendor. Flash sales. Drop-ins. That thing you bookmarked last week? It's 30% off now.",
    image: "/58.png",
    bgColor: "bg-primary-accent",
    glassStyle: "card-glass",
    titleColor: "text-primary-text",
    textColor: "text-secondary-text",
    imageHeight: "h-[80%]",
  },
  {
    id: 2,
    title: "Discover Places / Vendors",
    description:
      "From brunch spots to your next summer vacation; Find and book hidden gems, trending hangouts, and the vendors your city's been raving about. Experiences curated just for you, based on where you are and what you love.",
    image: "/56.png",
    bgColor: "bg-foreground",
    glassStyle: "card-glass",
    titleColor: "text-primary-text",
    textColor: "text-secondary-text",
    imageHeight: "h-[80%]",
  },
  {
    id: 3,
    title: "Share Experiences",
    description:
      "From food pics to dance videos — your story's more fun when you live it and share it; capture and share it all on your Strip Feed. SpinStrip lets you share your day the way it happened. Your weekend recap deserves more than a disappearing story.",
    image: "/29.png",
    bgColor: "bg-[#9E76F8]",
    glassStyle: "card-glass-purple",
    titleColor: "text-primary-accent",
    textColor: "text-primary-accent/80",
    imageHeight: "h-[87%]",
  },
  {
    id: 4,
    title: "Ecommerce",
    description:
      "SpinStrip isn't just where you find your next meal, massage, or flight — it's where you shop the moment too. Need those sneakers you saw at brunch? That bag from a local vendor? Search for it. Shop it. Get it delivered fast.",
    image: "/11.png",
    bgColor: "bg-primary-accent",
    glassStyle: "card-glass",
    titleColor: "text-primary-text",
    textColor: "text-secondary-text",
    imageHeight: "h-[86%]",
  },
  {
    id: 5,
    title: "Found It? Booked It? Pay In Seconds",
    description:
      "Pay for everything — from facials to food trucks — right in the app, pay in a tap with your Pay strip wallet, card, or QR. No network issues. No awkward transfers. No broken links.",
    image: "/76.png",
    bgColor: "bg-[#9E76F8]",
    glassStyle: "card-glass-purple",
    titleColor: "text-primary-accent",
    textColor: "text-primary-accent/80",
    imageHeight: "h-[80%]",
  },
  {
    id: 6,
    title: "Connect with Friends & Meet New People",
    description:
      "Pay for everything — from facials to food trucks — right in the app, pay in a tap with your Pay strip wallet, card, or QR. No network issues. No awkward transfers. No broken links.",
    image: "/79.png",
    bgColor: "bg-foreground",
    glassStyle: "card-glass",
    titleColor: "text-primary-text",
    textColor: "text-secondary-text",
    imageHeight: "h-[80%]",
  },
];

{
  /* Desktop card – hover to reveal description */
}
function DesktopCard({ card }: { card: (typeof cards)[0] }) {
  return (
    <div
      className={`group ${card.bgColor} rounded-3xl min-w-[320px] w-[320px] p-3 h-[458px] overflow-hidden transition-all duration-500 ease-in-out hover:h-[550px] flex-shrink-0`}
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
        className={`w-full ${card.imageHeight} mt-4 object-contain transition-all duration-500 ease-in-out`}
        alt={card.title}
        width={900}
        height={500}
      />
    </div>
  );
}

{
  /* Mobile card – tap to reveal description */
}
function MobileCard({
  card,
  expanded,
  onToggle,
}: {
  card: (typeof cards)[0];
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      onClick={onToggle}
      className={`${card.bgColor} rounded-3xl min-w-[287px] w-[287px] p-3 overflow-hidden transition-all duration-500 ease-in-out flex-shrink-0 cursor-pointer ${
        expanded ? "h-[550px]" : "h-[458px]"
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
        className={`w-full ${card.imageHeight} mt-4 object-contain transition-all duration-500 ease-in-out`}
        alt={card.title}
        width={900}
        height={500}
      />
    </div>
  );
}

export default function DoingToday() {
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);

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
        What <span className="text-primary">interests</span> you today?
      </h1>
      <p className="text-base md:text-xl lg:text-2xl text-secondary-text text-pretty text-center lg:text-left w-full mx-auto lg:mx-0 max-w-[85%] mt-2 mb-7">
        SpinStrip is your go-to for discovering what to do, where to go, and who
        to go with. Your lifestyle companion in one app.
      </p>

      {/* Mobile Carousel – tap to expand */}
      <div
        ref={mobileCarouselRef}
        className="carousel-container w-full lg:hidden"
      >
        <div className="carousel-track">
          {cards.map((card) => (
            <MobileCard
              key={`m-first-${card.id}`}
              card={card}
              expanded={expandedCardId === card.id}
              onToggle={() => handleToggle(card.id)}
            />
          ))}
          {cards.map((card) => (
            <MobileCard
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
            <DesktopCard key={`d-first-${card.id}`} card={card} />
          ))}
          {cards.map((card) => (
            <DesktopCard key={`d-second-${card.id}`} card={card} />
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
