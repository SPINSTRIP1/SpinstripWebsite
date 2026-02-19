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
import { EVERYONE_WHO_WE_ARE_OPTIONS } from "@/constants";

export default function WhoWeAre({
  whoWeAreOptions,
}: {
  whoWeAreOptions?: string[];
}) {
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
      className="w-full group bg-size-[550%] lg:h-226 lg:bg-size-[300%] xl:bg-size-[200%] rounded-4xl lg:max-w-340 lg:mx-auto relative overflow-hidden mb-20 shadow lg:flex justify-end p-5 md:p-10 items-end"
    >
      <div className="flex flex-col pb-8 md:pb-30">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl md:text-[58px] text-foreground font-medium">
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
              <div className="border-2 border-white rounded-full p-3 ">
                <HugeiconsIcon
                  icon={options[currentOption].icon}
                  size={28}
                  strokeWidth={2.0}
                  color={"#ffffff"}
                />
              </div>
              <h2 className="font-semibold text-xs md:text-sm text-white">
                {options[currentOption].title}
              </h2>
            </div>
          </div>
        </div>
        {(whoWeAreOptions || EVERYONE_WHO_WE_ARE_OPTIONS).map(
          (option, index) => (
            <p
              key={index}
              className="md:text-2xl text-white lg:text-neutral-accent hover:text-white hover:scale-[1.04] origin-left duration-500 transition-all ease-linear lg:max-w-149.5 mt-4"
            >
              {option}
            </p>
          ),
        )}

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
        className="w-161.75  h-150 xl:w-240.75 xl:h-190 group-hover:scale-125 transition-transform duration-300 ease-in-out absolute hidden lg:block bottom-0 -left-66 xl:-left-108 object-contain"
        alt="Phones"
        width={900}
        height={500}
      />
    </section>
  );
}
