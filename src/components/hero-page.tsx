import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";

export default function HeroPage() {
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
        <h1 className="text-5xl text-center lg:text-[64px] text-primary-text font-medium">
          Discover what Moves you
        </h1>
        <p className="text-lg lg:text-2xl text-secondary-text text-center max-w-110  lg:max-w-146.75 mt-2 mb-7">
          Explore vibrant places, meet inspiring people, connect with trusted
          vendors, and dive into unforgettable experiences, all in one platform.
        </p>
        <Image
          src={"/24.png"}
          className="w-[90%] lg:w-full h-52 md:h-108.75 object-contain"
          alt="Phones"
          width={900}
          height={500}
        />
      </MaxWidthWrapper>
    </section>
  );
}
