import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "SpinStrip - Discover What Moves You",
  description:
    "SpinStrip is your all-in-one lifestyle companion. Explore vibrant places, meet inspiring people, connect with trusted vendors, and dive into unforgettable experiences — all in one platform.",
  keywords: [
    "SpinStrip",
    "lifestyle app",
    "discovery platform",
    "local experiences",
    "restaurants",
    "events",
    "booking",
    "travel",
    "social experiences",
    "super app",
  ],
  authors: [{ name: "SpinStrip" }],
  creator: "SpinStrip",
  publisher: "SpinStrip",
  applicationName: "SpinStrip",
  metadataBase: new URL("https://www.spinstrip.com"),
  openGraph: {
    title: "SpinStrip - Discover What Moves You",
    description:
      "Explore vibrant places, meet inspiring people, connect with trusted vendors, and dive into unforgettable experiences — all in one platform.",
    url: "https://www.spinstrip.com",
    siteName: "SpinStrip",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SpinStrip - Discover What Moves You",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpinStrip - Discover What Moves You",
    description:
      "Explore vibrant places, meet inspiring people, connect with trusted vendors, and dive into unforgettable experiences — all in one platform.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sf-pro antialiased bg-foreground!`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
