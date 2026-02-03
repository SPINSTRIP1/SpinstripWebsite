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
      className="w-full flex rounded-b-4xl bg-size-[250%] lg:bg-size-[130%] shadow items-center p-2 pt-20 pb-7 md:pt-40 md:pb-20 justify-center"
    >
      <MaxWidthWrapper className="flex flex-col max-w-220.5! justify-center pb-5 md:pb-40 items-center ">
        <h1 className="text-5xl text-center md:text-[64px] text-primary-text font-medium">
          Discover what Moves you
        </h1>
        <p className="text-lg md:text-2xl text-secondary-text text-center  max-w-146.75 mt-2 mb-7">
          Explore vibrant places, meet inspiring people, connect with trusted
          vendors, and dive into unforgettable experiences, all in one platform.
        </p>
        <Image
          src={"/24.png"}
          className="w-full h-52 md:h-108.75 object-contain"
          alt="Phones"
          width={900}
          height={500}
        />
      </MaxWidthWrapper>
    </section>
  );
}
