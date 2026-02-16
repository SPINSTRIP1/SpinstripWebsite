import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";

const testimonials = [
  {
    name: "Adaeze O.",
    role: "Event Enthusiast",
    image: "/avatar3.jpg",
    quote:
      "SpinStrip completely changed how I discover events in Lagos. I used to miss out on so many amazing experiences — now I'm always in the loop and never bored on weekends!",
  },
  {
    name: "Tunde A.",
    role: "Foodie & Explorer",
    image: "/avatar2.jpg",
    quote:
      "I love how easy it is to find new restaurants and hangout spots. SpinStrip feels like having a friend who always knows the best places to go. Absolute game changer!",
  },
  {
    name: "Chioma E.",
    role: "Lifestyle Creator",
    image: "/avatar1.jpg",
    quote:
      "As a content creator, I need to stay on top of what's trending. SpinStrip keeps me connected to the hottest events and experiences — it's become an essential part of my workflow.",
  },
];

export default function MeetTheTeam() {
  return (
    <MaxWidthWrapper className="md:mt-20 overflow-x-hidden">
      <h1 className="text-4xl text-center md:text-left md:text-[58px] text-primary-text font-medium">
        What our users say
      </h1>
      <p className="text-center md:text-left text-xl md:text-2xl text-secondary-text text-pretty w-full md:w-[85%] mt-2 mb-7">
        Don&apos;t just take our word for it — hear from the people who use
        SpinStrip to level up their lifestyle every day.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="group h-46.75 w-46.75 md:h-56.75 md:w-56.75 hover:w-120 hover:h-51 md:hover:w-150 md:hover:h-71 liquid-glass p-4 flex gap-x-4 items-center rounded-full transition-all duration-500 ease-out   hover:pr-6 md:hover:pr-15 overflow-hidden cursor-pointer"
          >
            <Image
              src={testimonial.image}
              className="min-w-38.75 min-h-38.75 max-w-38.75 max-h-38.75 md:min-w-48.75 md:min-h-48.75 md:max-w-48.75 md:max-h-48.75  md:group-hover:min-w-56.25 md:group-hover:min-h-56.25 md:group-hover:max-w-56.25 md:group-hover:max-h-56.25 grayscale group-hover:grayscale-0  rounded-full object-cover shrink-0"
              alt={testimonial.name}
              width={900}
              height={500}
            />
            <div className="max-w-[322.5px] w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
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
    </MaxWidthWrapper>
  );
}
