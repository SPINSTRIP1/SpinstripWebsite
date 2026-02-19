"use client";

import React, { useState } from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import { EVERYONE_FAQS } from "@/constants/faq";

export default function FAQ({
  customFaqs,
}: {
  customFaqs?: { question: string; answer: string }[];
}) {
  const faqs = customFaqs || EVERYONE_FAQS;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-linear-to-b  rounded-t-4xl pt-10 pb-14 mt-20 from-[#CCBAF5] via-[#E3D7F9] to-[#F8F8F8] to-98%">
      <MaxWidthWrapper>
        <h1 className="text-4xl mb-1 text-center md:text-left md:text-[58px] text-primary-text font-medium">
          You got questions?
        </h1>
        <p className="text-xl text-center md:text-left md:text-2xl text-secondary-text text-pretty mb-7">
          We&apos;ve got answers to help you get the most out of your SpinStrip
          experience.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{ height: openIndex === index ? "100%" : 51 }}
              className="bg-foreground backdrop-blur-xl rounded-3xl border border-white/50 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-3 flex items-center justify-between text-left cursor-pointer"
              >
                <h3 className="text-lg font-bold text-secondary-text">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-secondary-text transition-transform duration-300 shrink-0 ml-4 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-secondary-text px-6 pb-6">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
