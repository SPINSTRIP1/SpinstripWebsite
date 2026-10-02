export type JobRole = {
  slug: string;
  title: string;
  location: string;
  employmentType: string;
  workArrangement: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  proofOfWork?: string;
  applicationUrl: string;
  isOpen: boolean;
  // Supply the actual publication date and eligible location to enable JobPosting.
  datePosted?: string;
  locationCountry?: string;
  applicantCountries?: string[];
};
