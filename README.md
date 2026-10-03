This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Careers

Manage vacancies in `src/data/jobs.ts`. Add one `JobRole` object to create a card,
route, metadata and application links. Set `isOpen: false` to hide the card and
retain a closed page (no application links, no JobPosting, and noindex). Redeploy
after editing role data; these pages are generated at build time.

The default application URL is the existing Google Form; individual roles can
override `applicationUrl`. The form opens in a new tab. No submission handling or
Google Forms storage has been changed. Candidates are reminded to identify their
role; embedding and prefilled field IDs have not been verified. Google Form
submission and form-view events cannot be observed from this site.

Recruitment events are pushed to `window.dataLayer` and also emitted as a
`recruitment` CustomEvent: `careers_page_viewed`, `role_viewed`, and
`apply_button_clicked`. Role events include `role_slug`. There is no installed
analytics collector. Configure Google Tag Manager custom event triggers and an
analytics destination to persist events and report role views versus apply clicks.
No applicant details are collected by these events.

JobPosting JSON-LD is enabled only when a role has its actual `datePosted`
(ISO date) and either `locationCountry` (on-site) or `applicantCountries`
(remote). Supply verified values; publication dates and remote eligibility were
not provided in the brief. Salary is omitted. See Google's requirements:
https://developers.google.com/search/docs/appearance/structured-data/job-posting

Visual Creator and Digital Marketer / Growth Marketer are remote roles.
Content Creator is on-site in Lagos. Merchant Acquisition Executive is on-site /
field-based across Lagos, Abuja, Port Harcourt, Ibadan, Asaba, Warri and Benin.
