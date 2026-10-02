import type { Metadata } from "next";
import { jobs } from "@/data/jobs";
import { JobGrid } from "@/components/careers/job-components";
import { RecruitmentView } from "@/components/careers/recruitment-analytics";
import { ArrowIcon } from "@/components/careers/arrow-icon";

const title = "Careers | SpinStrip";
const description = "Explore current career opportunities and join our team.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/careers" },
  openGraph: { title, description, url: "/careers" },
  twitter: { title, description },
};

export default function CareersPage() {
  const openJobs = jobs.filter((job) => job.isOpen);
  return (
    <main className="careers-page careers-landing">
      <RecruitmentView />
      <header className="careers-hero">
        <div className="careers-hero-copy careers-shell">
          <p className="careers-eyebrow">
            <span className="careers-status-dot" /> CAREERS AT SPINSTRIP
          </p>
          <h1>
            <span>Build</span> what matters.
          </h1>
          <p className="careers-hero-description">
            We are looking for thoughtful, capable people who take ownership, do
            excellent work and want to build with us.
          </p>
          <a href="#open-positions" className="careers-button">
            Explore open roles <ArrowIcon direction="down" />
          </a>
          <p className="careers-hero-note">
            {openJobs.length
              ? `${openJobs.length} open ${openJobs.length === 1 ? "role" : "roles"}. Your next chapter starts here.`
              : "Great work starts with great people."}
          </p>
        </div>
      </header>
      <section
        className="careers-principles careers-shell"
        aria-label="How we work"
        data-careers-reveal
      >
        <p className="careers-eyebrow">THE WAY WE BUILD</p>
        <div>
          {[
            ["01", "Take ownership.", "Bring your ideas. See them through."],
            [
              "02",
              "Care about the craft.",
              "Thoughtful details. Work you are proud of.",
            ],
            [
              "03",
              "Build together.",
              "Different strengths. A shared ambition.",
            ],
          ].map(([number, title, copy]) => (
            <div className="careers-principle" key={number}>
              <span>{number}</span>
              <h2>{title}</h2>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </section>
      <section
        id="open-positions"
        className="careers-positions"
        aria-labelledby="positions-heading"
      >
        <div className="careers-shell">
          <div className="careers-positions-header" data-careers-reveal>
            <div>
              <p className="careers-eyebrow">FIND YOUR PLACE</p>
              <h2 id="positions-heading">
                Open Positions
                {/* <span className="careers-count">
                  {String(openJobs.length).padStart(2, "0")}
                </span> */}
              </h2>
            </div>
            <p>
              Explore our current opportunities and find a role that matches
              your experience and strengths.
            </p>
          </div>
          <JobGrid jobs={openJobs} />
          <div className="careers-positions-note">
            <p>
              Bring your perspective.{" "}
              <strong>Help shape what comes next.</strong>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
