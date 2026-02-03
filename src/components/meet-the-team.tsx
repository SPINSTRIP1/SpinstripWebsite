import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    image: "/avatar3.jpg",
    bio: "Frederick is the CEO of SpinStrip and previously built one of Nigeria's earliest fintech companies. With a deep understanding of payments, digital infrastructure, and scaling operations in complex markets, he brings both vision and execution to SpinStrip's mission of redefining lifestyle access.",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "/avatar2.jpg",
    bio: "Jane leads the technical vision at SpinStrip, bringing years of experience in building scalable platforms. Her expertise in mobile development and cloud architecture drives the innovation behind our seamless user experience.",
  },
  {
    name: "Mike Johnson",
    role: "COO",
    image: "/avatar1.jpg",
    bio: "Mike oversees operations and ensures SpinStrip delivers exceptional experiences at scale. His background in logistics and business operations helps streamline partnerships and user satisfaction across markets.",
  },
];

export default function MeetTheTeam() {
  return (
    <MaxWidthWrapper className="md:mt-20 overflow-x-hidden">
      <h1 className="text-5xl text-center md:text-left md:text-[58px] text-primary-text font-medium">
        Meet the team
      </h1>
      <p className="text-center md:text-left text-xl md:text-2xl text-secondary-text text-pretty md:w-[85%] mt-2 mb-7">
        SpinStrip is your go-to for discovering what to do, where to go, and who
        to go with. Your lifestyle companion in one app.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group h-56.75 w-56.75 liquid-glass p-4 flex gap-x-4 items-center rounded-full transition-all duration-500 ease-out  hover:w-150 hover:h-[284px] hover:pr-15 overflow-hidden cursor-pointer"
          >
            <Image
              src={member.image}
              className="min-w-48.75 grayscale group-hover:grayscale-0 min-h-48.75 max-w-48.75 max-h-48.75 group-hover:min-w-56.25 group-hover:min-h-56.25 group-hover:max-w-56.25 group-hover:max-h-56.25 rounded-full object-cover shrink-0"
              alt={member.name}
              width={900}
              height={500}
            />
            <div className="max-w-[322.5px] w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
              <h3 className="text-sm text-primary-text">{member.role}</h3>
              <h2 className="text-lg text-primary-text font-bold whitespace-nowrap">
                {member.name}
              </h2>
              <p className="text-secondary-text">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
