import ContactUs from "@/components/contact-us";
import DoingToday from "@/components/doing-today";
import HeroPage from "@/components/hero-page";
import WhatUsersSays from "@/components/what-users-say";
import WhoWeAre from "@/components/who-we-are";
import {
  CREATORS_CARDS,
  CREATORS_TESTIMONIALS,
  CREATORS_TITLES,
  CREATORS_WHO_WE_ARE_OPTIONS,
} from "@/constants";
import React from "react";

export default function Creators() {
  return (
    <>
      <HeroPage
        titles={CREATORS_TITLES}
        description="Explore emerging hotspots, grow inspiring communities, and spotlight experiences your audience is ready to discover, all in one platform."
      />
      <DoingToday
        customCards={CREATORS_CARDS}
        headTitle="Inspire"
        description="Spinstrip is where your content becomes a gateway to real-world experiences. Your lifestyle companion in one app.
"
      />
      <WhoWeAre whoWeAreOptions={CREATORS_WHO_WE_ARE_OPTIONS} />
      <WhatUsersSays customTestimonials={CREATORS_TESTIMONIALS} />
      <ContactUs
        title="Get early access to what's next"
        description="Be among the first to Explore, curate and inspire directly from your influence. Stay ahead. Shape trends. Move audiences.
"
      />
    </>
  );
}
