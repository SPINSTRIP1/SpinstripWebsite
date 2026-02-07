import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    image: "/avatar3.jpg",
    bio: "Frederick leads SpinStrip with experience from building one of Nigeria's earliest fintech companies. His expertise in payments and digital infrastructure drives SpinStrip's mission of redefining lifestyle access.",
  },
  {
    name: "Mike Johnson",
    role: "CTO",
    image: "/avatar2.jpg",
    bio: "Mike oversees operations and ensures SpinStrip delivers exceptional experiences at scale. His background in logistics and business operations helps streamline partnerships and user satisfaction across markets.",
  },
  {
    name: "Jane Smith",
    role: "COO",
    image: "/avatar1.jpg",
    bio: "Jane leads the technical vision at SpinStrip, bringing years of experience in building scalable platforms. Her expertise in mobile development and cloud architecture drives the innovation behind our seamless user experience.",
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
            className="group h-46.75 w-46.75 md:h-56.75 md:w-56.75 hover:w-120 hover:h-51 md:hover:w-150 md:hover:h-71 liquid-glass p-4 flex gap-x-4 items-center rounded-full transition-all duration-500 ease-out   hover:pr-6 md:hover:pr-15 overflow-hidden cursor-pointer"
          >
            <Image
              src={member.image}
              className="min-w-38.75 min-h-38.75 max-w-38.75 max-h-38.75 md:min-w-48.75 md:min-h-48.75 md:max-w-48.75 md:max-h-48.75  md:group-hover:min-w-56.25 md:group-hover:min-h-56.25 md:group-hover:max-w-56.25 md:group-hover:max-h-56.25 grayscale group-hover:grayscale-0  rounded-full object-cover shrink-0"
              alt={member.name}
              width={900}
              height={500}
            />
            <div className="max-w-[322.5px] w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
              <h3 className="text-xs md:text-sm text-primary-text">
                {member.role}
              </h3>
              <h2 className="md:text-lg text-primary-text font-bold whitespace-nowrap">
                {member.name}
              </h2>
              <p className="text-sm md:text-base text-secondary-text">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
