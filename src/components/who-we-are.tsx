"use client";

import React from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar02Icon,
  MapsLocation02Icon,
  PartyIcon,
  RestaurantIcon,
} from "@hugeicons/core-free-icons";

export default function WhoWeAre() {
  const options = [
    {
      icon: Calendar02Icon,
      title: "Events",
    },
    {
      icon: RestaurantIcon,
      title: "Restaurants",
    },
    {
      icon: MapsLocation02Icon,
      title: "Places",
    },
    {
      icon: PartyIcon,
      title: "Activities",
    },
  ];

  const [currentOption, setCurrentOption] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentOption((prev) => (prev + 1) % options.length);
        setIsAnimating(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, [options.length]);
  return (
    <section
      style={{
        backgroundImage: "url('/bg1.png')",
        backgroundRepeat: "no-repeat",
      }}
      id="about-us"
      className="w-full group bg-size-[450%] h-[904px] lg:bg-size-[200%] rounded-4xl lg:max-w-340 lg:mx-auto relative overflow-hidden mb-20 shadow lg:flex justify-end p-5 md:p-10 items-end"
    >
      <div className="flex flex-col pb-8 md:pb-30">
        <div className="flex items-center justify-between">
          <h1 className="text-5xl md:text-[58px] text-foreground font-medium">
            Who we are
          </h1>
          <div className="flex flex-col items-center gap-y-2 overflow-hidden">
            <div
              className={`flex flex-col items-center gap-y-2 transition-all duration-400 ease-in-out ${
                isAnimating
                  ? "-translate-y-full opacity-0"
                  : "translate-y-0 opacity-100"
              }`}
            >
              <div className="border-2 border-[#C8C8C8] rounded-full p-2 ">
                <HugeiconsIcon
                  icon={options[currentOption].icon}
                  size={28}
                  color={"#C8C8C8"}
                />
              </div>
              <h2 className="font-semibold text-xs md:text-sm text-white md:text-[#C8C8C8]">
                {options[currentOption].title}
              </h2>
            </div>
          </div>
        </div>{" "}
        <p className="md:text-2xl text-white lg:text-secondary-text hover:text-white hover:scale-[1.04] origin-left duration-500 transition-all ease-linear lg:max-w-149.5 mt-4">
          SpinStrip was born from a simple but powerful belief — that life
          isn&apos;t meant to be scrolled past or lost in group chats that lead
          nowhere. We believe experiences shouldn&apos;t be hard to find,
          impossible to plan, or scattered across a dozen apps.
        </p>
        <p className="md:text-2xl text-white lg:text-secondary-text hover:text-white hover:scale-[1.04] origin-left duration-500 transition-all ease-linear lg:max-w-149.5 mt-4">
          SpinStrip is your all-in-one lifestyle companion — a super app where
          discovery, booking, payment, connection, and sharing come together.
          Whether it&apos;s a food spot tucked away in your neighborhood, a
          flash deal on that spa you love, or the perfect group getaway waiting
          to be booked — SpinStrip makes it effortless to find, enjoy, and live
          your best moments.
        </p>
        <p className="md:text-2xl text-white lg:text-secondary-text hover:text-white hover:scale-[1.04] origin-left duration-500 transition-all ease-linear lg:max-w-149.5 mt-4">
          We&apos;re not just here to list places. We&apos;re here to transform
          how people experience the world around them — to turn ordinary days
          into unforgettable stories, and local cities into global playgrounds
          of possibility. Because life&apos;s better when you don&apos;t just
          exist in a place — you live it.
        </p>
        <div className="flex gap-x-4 mt-4">
          <a href="#">
            <Image
              src={"/Play.png"}
              alt="Play store"
              width={200}
              height={200}
              className="w-34 h-12 md:w-40 md:h-14"
            />
          </a>
          <a href="#">
            <Image
              src={"/App.png"}
              alt="App store"
              width={200}
              height={200}
              className="w-34 h-12 md:w-40 md:h-14"
            />
          </a>
        </div>
      </div>
      <Image
        src={"/hand-big.png"}
        className="w-141.75  h-130 xl:w-240.75 xl:h-190 group-hover:scale-125 transition-transform duration-300 ease-in-out absolute hidden lg:block bottom-0 -left-56 xl:-left-108 object-contain"
        alt="Phones"
        width={900}
        height={500}
      />
    </section>
  );
}
