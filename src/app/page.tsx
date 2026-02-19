import ContactUs from "@/components/contact-us";
import DoingToday from "@/components/doing-today";
import FAQ from "@/components/faq";
import HeroPage from "@/components/hero-page";
import WhatUsersSays from "@/components/what-users-say";
import WhoWeAre from "@/components/who-we-are";

export default function Home() {
  return (
    <>
      <HeroPage />
      <DoingToday />
      <WhoWeAre />
      <WhatUsersSays />
      <FAQ />
      <ContactUs />
    </>
  );
}
