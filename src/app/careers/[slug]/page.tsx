import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getJob, jobs } from "@/data/jobs";
import { ApplicationCTA, JobDetails, JobHeader, RoleContents } from "@/components/careers/job-components";
import { RecruitmentView } from "@/components/careers/recruitment-analytics";

import { JobStructuredData } from "@/components/careers/job-structured-data";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return jobs.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const job = getJob((await params).slug);
  if (!job) notFound();
  const title = `${job.title} | Careers`;
  const description = job.isOpen ? `${job.title}. ${job.location} | ${job.employmentType} | ${job.workArrangement} | ${job.experience} experience. Explore the role and apply.` : "This position is currently closed. Explore our open positions.";
  return { title, description, alternates: { canonical: `/careers/${job.slug}` },
    openGraph: { title, description, url: `/careers/${job.slug}` }, twitter: { title, description },
    ...(!job.isOpen ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function RolePage({ params }: Props) {
  const job = getJob((await params).slug);
  if (!job) notFound();
  return <main className="careers-page careers-role-page careers-shell">
    <RecruitmentView roleSlug={job.slug} />
    <JobStructuredData job={job} />
    <JobHeader job={job} />
    {job.isOpen ? <><div className="careers-role-body"><RoleContents job={job} /><JobDetails job={job} /></div><ApplicationCTA job={job} /></> :
      <section className="py-12"><h2 className="text-2xl font-bold">This position is currently closed.</h2><p className="my-4 text-[#595959]">Explore our current opportunities to find another role.</p><Link href="/careers" className="careers-button">View Open Positions</Link></section>}
  </main>;
}
