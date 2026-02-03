import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";

export default function DoingToday() {
  return (
    <MaxWidthWrapper className="mt-16 md:mt-20 overflow-x-hidden">
      <h1 className="text-3xl text-center lg:text-left md:text-5xl lg:text-[58px] text-primary-text font-medium">
        What are you <span className="text-primary">doing</span> today?
      </h1>
      <p className="text-base md:text-xl lg:text-2xl text-secondary-text text-pretty text-center lg:text-left w-full mx-auto lg:mx-0 max-w-[85%] mt-2 mb-7">
        SpinStrip is your go-to for discovering what to do, where to go, and who
        to go with. Your lifestyle companion in one app.
      </p>
      <div className="lg:flex grid md:grid-cols-2 flex-row gap-3">
        <div className="bg-primary-accent rounded-3xl min-w-71.75 p-3 h-114.5">
          <div className=" bg-primary-accent/60 backdrop-blur-3xl rounded-2xl px-3 py-1 border border-white/70 shadow-lg shadow-white/20">
            <h2 className="text-xl text-primary-text font-bold text-center md:text-left">
              Unbelievable Discounts & Deals
            </h2>
          </div>
          <Image
            src={"/58.png"}
            className="w-full h-[80%] mt-4 object-contain"
            alt="Phones"
            width={900}
            height={500}
          />
        </div>
        <div className="bg-foreground rounded-3xl min-w-71.75 p-3 h-100 lg:h-89.75 flex flex-col justify-between">
          <div className="liquid-glass rounded-2xl px-3 py-1">
            <h2 className="text-xl text-primary-text font-bold text-center md:text-left">
              Discover Places / Vendors
            </h2>
          </div>
          <Image
            src={"/56.png"}
            className="w-full h-51.25 mt-4 object-contain"
            alt="Phones"
            width={900}
            height={500}
          />
        </div>
        <div className="bg-[#9E76F8] rounded-3xl min-w-71.75 p-3 h-114.5">
          <div className=" bg-[#9E76F8]/60 backdrop-blur-3xl rounded-2xl px-3 py-1 border border-white/40 shadow-lg shadow-primary-accent/10">
            <h2 className="text-xl text-primary-accent font-bold text-center md:text-left">
              Share Experiences
            </h2>
          </div>
          <Image
            src={"/29.png"}
            className="w-full h-[87%] mt-4 object-contain"
            alt="Phones"
            width={900}
            height={500}
          />
        </div>
        <div className="bg-primary-accent rounded-3xl min-w-71.75 p-3 h-114.5">
          <div className=" bg-primary-accent/60 backdrop-blur-3xl rounded-2xl px-3 py-1 border border-white/70 shadow-lg shadow-white/20">
            <h2 className="text-xl text-primary-text font-bold text-center md:text-left">
              Ecommerce
            </h2>
          </div>
          <Image
            src={"/11.png"}
            className="w-full h-[86%] mt-4 object-contain"
            alt="Phones"
            width={900}
            height={500}
          />
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
