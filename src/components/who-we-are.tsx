import React from "react";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section
      style={{
        backgroundImage: "url('/bg1.png')",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full bg-size-[360%] lg:bg-size-[200%] rounded-4xl md:max-w-340 mx-auto relative overflow-x-hidden mb-20 shadow flex justify-end p-5 md:p-10 items-end"
    >
      <div className="flex flex-col pb-8 md:pb-30">
        <div className="flex items-center justify-between">
          <h1 className="text-5xl md:text-[58px] text-foreground font-medium">
            Who we are
          </h1>
          <div className="flex flex-col items-center gap-y-2">
            <Image
              src={"/Restaurant.png"}
              className="size-10 md:size-12 object-contain"
              alt="Phones"
              width={900}
              height={500}
            />
            <h2 className="font-semibold text-xxs md:text-xs text-[#C8C8C8]">
              Restaurants
            </h2>
          </div>
        </div>{" "}
        <p className="md:text-2xl text-white md:text-secondary-text  text-sm md:max-w-149.5 mt-4">
          SpinStrip was born from a simple but powerful belief — that life
          isn&apos;t meant to be scrolled past or lost in group chats that lead
          nowhere. We believe experiences shouldn&apos;t be hard to find,
          impossible to plan, or scattered across a dozen apps.
        </p>
        <p className="md:text-2xl text-white md:text-secondary-text  text-sm md:max-w-149.5 mt-4">
          SpinStrip is your all-in-one lifestyle companion — a super app where
          discovery, booking, payment, connection, and sharing come together.
          Whether it&apos;s a food spot tucked away in your neighborhood, a
          flash deal on that spa you love, or the perfect group getaway waiting
          to be booked — SpinStrip makes it effortless to find, enjoy, and live
          your best moments.
        </p>
        <p className="md:text-2xl text-white md:text-secondary-text  text-sm md:max-w-149.5 mt-4">
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
              className="w-30 h-10"
            />
          </a>
          <a href="#">
            <Image
              src={"/App.png"}
              alt="App store"
              width={200}
              height={200}
              className="w-30 h-10"
            />
          </a>
        </div>
      </div>
      <Image
        src={"/hand-big.png"}
        className="w-141.75 h-130 absolute hidden lg:block bottom-0 -left-56 object-contain"
        alt="Phones"
        width={900}
        height={500}
      />
    </section>
  );
}
