import type { JobRole } from "@/types/jobs";
import { COMPANY_DESCRIPTION } from "@/data/jobs";

const escapeHtml = (text: string) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function JobStructuredData({ job }: { job: JobRole }) {
  const remote = job.workArrangement === "Remote";
  if (!job.isOpen || !job.datePosted || (remote ? !job.applicantCountries?.length : !job.locationCountry)) return null;
  const paragraphs = (text: string) => text.split("\n\n").map(p => `<p>${escapeHtml(p)}</p>`).join("");
  const list = (items: string[]) => `<ul>${items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  const posting = {
    "@context": "https://schema.org", "@type": "JobPosting",
    title: job.title, datePosted: job.datePosted,
    url: `https://www.spinstrip.com/careers/${job.slug}`,
    identifier: { "@type": "PropertyValue", name: "SpinStrip", value: job.slug },
    hiringOrganization: { "@type": "Organization", name: "SpinStrip", sameAs: "https://www.spinstrip.com", logo: "https://www.spinstrip.com/logo.png" },
    ...(job.employmentType === "Full-time" ? { employmentType: "FULL_TIME" } : {}),
    description: `<h2>About the Company</h2>${paragraphs(COMPANY_DESCRIPTION)}<h2>Role Overview</h2>${paragraphs(job.summary)}<h2>Key Responsibilities</h2>${list(job.responsibilities)}<h2>Requirements</h2>${list(job.requirements)}${job.whatWeAreLookingFor?.length ? `<h2>What We Are Looking For</h2><p>We are looking for people who:</p>${list(job.whatWeAreLookingFor)}` : ""}${job.proofOfWork ? `<h2>Proof of Work</h2>${paragraphs(job.proofOfWork)}` : ""}`,
    experienceRequirements: job.experience,
    ...(remote ? { jobLocationType: "TELECOMMUTE", applicantLocationRequirements: job.applicantCountries!.map(name => ({ "@type": "Country", name })) } : { jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: job.location, addressCountry: job.locationCountry } } }),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(posting).replace(/</g, "\\u003c") }} />;
}
