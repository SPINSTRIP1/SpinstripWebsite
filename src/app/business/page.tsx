import ContactUs from "@/components/contact-us";
import DoingToday from "@/components/doing-today";
import HeroPage from "@/components/hero-page";
import WhatUsersSays from "@/components/what-users-say";
import WhoWeAre from "@/components/who-we-are";
import {
  BUSINESS_CARDS,
  BUSINESS_TESTIMONIALS,
  BUSINESS_TITLES,
  BUSINESS_WHO_WE_ARE_OPTIONS,
} from "@/constants";
import React from "react";

export default function Business() {
  return (
    <>
      <HeroPage
        titles={BUSINESS_TITLES}
        description="Showcase your brand to customers ready to actively explore, decide, book, and pay all within one seamless ecosystem."
      />
      <DoingToday
        customCards={BUSINESS_CARDS}
        additionalTitle="What your customers can"
        headTitle="Discover"
        description="Spinstrip positions your business at the centre of discovery. Your Social commerce in one app."
      />
      <WhoWeAre whoWeAreOptions={BUSINESS_WHO_WE_ARE_OPTIONS} />
      <WhatUsersSays
        title="What our Businesses say "
        description="Don’t just take our word for it, hear from Businesses who use Spinstrip to level up their lifestyles every day."
        customTestimonials={BUSINESS_TESTIMONIALS}
      />
      <ContactUs
        title="Get early access to what's next"
        description="Be among the first to Explore, curate and inspire directly from your influence. Stay ahead. Shape trends. Move audiences.
"
      />
    </>
  );
}
