import Link from "next/link";
import type { JobRole } from "@/types/jobs";
import { COMPANY_DESCRIPTION } from "@/data/jobs";
import { ApplyLink } from "./recruitment-analytics";
import { ArrowIcon } from "./arrow-icon";

export const ROLE_SECTIONS = [
  ["about", "About the Company"],
  ["overview", "Role Overview"],
  ["responsibilities", "Key Responsibilities"],
  ["requirements", "Requirements"],
  ["what-we-are-looking-for", "What We Are Looking For"],
  ["proof-of-work", "Proof of Work"],
  ["apply", "Apply for this role"],
];

function RoleGlyph() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 3v26M3 16h26M7 7l18 18M7 25L25 7"
        stroke="currentColor"
        strokeWidth="3"
      />
      <circle cx="16" cy="16" r="7" fill="currentColor" />
    </svg>
  );
}

export function JobFacts({ job }: { job: JobRole }) {
  const facts = [
    ["Location", job.location],
    ["Employment", job.employmentType],
    ["Work arrangement", job.workArrangement],
    ["Experience", job.experience],
  ];
  return (
    <dl className="careers-facts">
      {facts.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function JobGrid({ jobs }: { jobs: JobRole[] }) {
  if (!jobs.length)
    return (
      <div className="careers-empty" data-careers-reveal>
        <span className="careers-glyph">
          <RoleGlyph />
        </span>
        <h3>No Open Positions</h3>
        <p>
          We don&apos;t have any open positions at the moment. Please check back
          soon.
        </p>
      </div>
    );
  return (
    <div className="careers-job-grid">
      {jobs.map((job, index) => (
        <article
          key={job.slug}
          className="careers-job-card"
          data-careers-reveal
          style={{ "--card-order": index } as React.CSSProperties}
        >
          <div className="careers-card-top">
            <span className="careers-glyph">
              <RoleGlyph />
            </span>
            <span className="careers-role-badge">{job.workArrangement}</span>
          </div>
          <div
            className={`careers-card-title ${index % 3 === 2 ? "card-glass-purple" : "card-glass"}`}
          >
            <h3>{job.title}</h3>
          </div>
          <p className="careers-card-summary">{job.summary.split("\n\n")[0]}</p>
          <JobFacts job={job} />
          <Link
            className="careers-card-link"
            href={`/careers/${job.slug}`}
            aria-label={`View Role: ${job.title}`}
          >
            <span>View Role</span>
            <span className="careers-link-arrow">
              <ArrowIcon />
            </span>
          </Link>
        </article>
      ))}
    </div>
  );
}

export function JobHeader({ job }: { job: JobRole }) {
  return (
    <header className="careers-role-header">
      <Link className="careers-text-link" href="/careers">
        <ArrowIcon direction="left" /> View Open Positions
      </Link>
      <div className="careers-role-heading">
        <div>
          <p className="careers-eyebrow">YOUR NEXT CHAPTER</p>
          <h1>{job.title}</h1>
        </div>
        <span className="careers-role-emblem" aria-hidden="true">
          <RoleGlyph />
        </span>
      </div>
      <div className="careers-role-meta">
        <JobFacts job={job} />
        {job.isOpen && (
          <div className="careers-header-apply">
            <ApplyLink url={job.applicationUrl} roleSlug={job.slug} />
            <p>Opens Google Forms in a new tab.</p>
          </div>
        )}
      </div>
    </header>
  );
}

export function JobDetails({ job }: { job: JobRole }) {
  const sections: [string, string, string[]][] = [
    ["responsibilities", "Key Responsibilities", job.responsibilities],
    ["requirements", "Requirements", job.requirements],
  ];
  return (
    <div className="careers-job-details">
      <section id="about" data-careers-reveal>
        <p className="careers-section-number">01 / THE COMPANY</p>
        <h2 className="careers-section-heading">About the Company</h2>
        <p>{COMPANY_DESCRIPTION}</p>
      </section>
      <section id="overview" data-careers-reveal>
        <p className="careers-section-number">02 / THE OPPORTUNITY</p>
        <h2 className="careers-section-heading">Role Overview</h2>
        <div className="space-y-4">
          {job.summary.split("\n\n").map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>
      {sections.map(([id, title, items], index) => (
        <section id={id} key={id} data-careers-reveal>
          <p className="careers-section-number">
            0{index + 3} /{" "}
            {index === 0 ? "WHAT YOU WILL DO" : "WHAT YOU WILL BRING"}
          </p>
          <h2 className="careers-section-heading">{title}</h2>
          <ol className="careers-details-list">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>
      ))}
      {!!job.whatWeAreLookingFor?.length && (
        <section id="what-we-are-looking-for" data-careers-reveal>
          <p className="careers-section-number">05 / THE RIGHT FIT</p>
          <h2 className="careers-section-heading">What We Are Looking For</h2>
          <p>We are looking for people who:</p>
          <ul className="list-disc space-y-3 pl-6 mt-4">
            {job.whatWeAreLookingFor.map(item => <li key={item}>{item}</li>)}
          </ul>
        </section>
      )}
      {job.proofOfWork && (
        <section id="proof-of-work" data-careers-reveal>
          <p className="careers-section-number">{job.whatWeAreLookingFor?.length ? "06" : "05"} / SHOW YOUR CRAFT</p>
          <h2 className="careers-section-heading">Proof of Work</h2>
          <div className="space-y-4">
            {job.proofOfWork.split("\n\n").map((paragraph, index) =>
              paragraph.startsWith("- ") ? (
                <ul key={index} className="list-disc space-y-2 pl-6">
                  {paragraph.split("\n").map((item) => (
                    <li key={item}>{item.replace(/^- /, "")}</li>
                  ))}
                </ul>
              ) : (
                <p key={index}>{paragraph}</p>
              ),
            )}
          </div>
        </section>
      )}
    </div>
  );
}

export function RoleContents({ job }: { job: JobRole }) {
  return (
    <aside className="careers-role-sidebar">
      <nav aria-label="On this page">
        <p className="careers-eyebrow">IN THIS ROLE</p>
        <ol>
          {ROLE_SECTIONS.filter(
            ([id]) => (id !== "proof-of-work" || job.proofOfWork) && (id !== "what-we-are-looking-for" || job.whatWeAreLookingFor?.length),
          ).map(([id, title], index) => (
            <li key={id}>
              <a href={`#${id}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <div className="careers-sidebar-note">
        <span className="careers-glyph">
          <RoleGlyph />
        </span>
        <p>
          Good work speaks
          <br />
          for itself.
        </p>
        <small>
          Bring your experience.
          <br />
          Show us what you can do.
        </small>
      </div>
    </aside>
  );
}

export function ApplicationCTA({ job }: { job: JobRole }) {
  return (
    <section
      id="apply"
      className="careers-application"
      aria-labelledby="application-heading"
      data-careers-reveal
    >
      <div className="careers-application-art" aria-hidden="true">
        <RoleGlyph />
      </div>
      <p className="careers-eyebrow">LET&apos;S BUILD SOMETHING GOOD</p>
      <h2 id="application-heading">
        Your next chapter
        <br />
        could start here.
      </h2>
      <p className="careers-application-role">Apply for {job.title}</p>
      <p className="careers-application-copy">
        Complete our application form and select or identify {job.title} as the
        role you are applying for. Have your CV and proof of work ready.
      </p>
      {job.applicationInstructions && <p className="careers-application-copy">{job.applicationInstructions}</p>}
      <ApplyLink url={job.applicationUrl} roleSlug={job.slug} />
      <p className="careers-application-note">
        Opens Google Forms in a new tab.
      </p>
    </section>
  );
}
