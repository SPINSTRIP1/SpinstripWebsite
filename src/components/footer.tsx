import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundImage: "url('/bg1.png')",
        backgroundRepeat: "no-repeat",
      }}
      className="pt-12 pb-6 bg-size-[600%] lg:bg-size-[200%]"
    >
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row gap-y-10 justify-between">
          {/* Left Section - Logo & Socials */}
          <div className="max-w-100">
            <Image
              src={"/logo.png"}
              className="w-40 h-12 object-contain brightness-0 invert"
              width={300}
              height={100}
              alt="SpinStrip Logo"
            />
            <p className="text-white/80 mt-4 text-sm leading-relaxed">
              Your all-in-one lifestyle companion — discover, book, pay,
              connect, and share experiences in one app.
            </p>
            <div className="flex items-center gap-x-3 mt-6">
              {/* X (Twitter) */}
              <a
                target="_blank"
                href="https://x.com/spinstrip?s=21"
                className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                target="_blank"
                href="https://www.instagram.com/spinstrip?igsh=cGk5OXVpNzB5c3k="
                className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61584426085710"
                className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                target="_blank"
                href="https://www.tiktok.com/@spinstrip1?_r=1&_t=ZS-93f3QIetmVz"
                className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Section - Links */}
          <div className="grid grid-cols-2 md:flex gap-y-8 gap-x-20">
            {/* Quicklinks */}
            <div>
              <h4 className="text-foreground font-bold text-lg mb-4">
                Quicklinks
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-white md:text-neutral-accent hover:text-white transition"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white md:text-neutral-accent hover:text-white transition"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white md:text-neutral-accent hover:text-white transition"
                  >
                    The Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white md:text-neutral-accent hover:text-white transition"
                  >
                    Join Waitlist
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white md:text-neutral-accent hover:text-white transition"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-foreground font-bold text-lg mb-4">
                Features
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-white md:text-neutral-accent hover:text-white transition"
                  >
                    Discover Places
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white md:text-neutral-accent hover:text-white transition"
                  >
                    Strippay Wallet
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white md:text-neutral-accent hover:text-white transition"
                  >
                    Deals & Discounts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white md:text-neutral-accent hover:text-white transition"
                  >
                    Connect with Friends
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white md:text-neutral-accent hover:text-white transition"
                  >
                    Shop the Moment
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-foreground font-bold text-lg mb-4">
                Contact us
              </h4>
              <ul className="space-y-3">
                <li className="text-white md:text-neutral-accent">
                  1E Sinari Daranjo, Lagos Nigeria
                </li>
                <li className="text-white md:text-neutral-accent">
                  +234 123 456 7890
                </li>
                <li>
                  <a
                    href="mailto:hello@spinstrip.com"
                    className="text-white md:text-neutral-accent hover:text-white transition"
                  >
                    hello@spinstrip.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-20 pt-6 border-t border-white/20">
          <p className="text-white text-sm">
            Copyright © {new Date().getFullYear()}. All rights reserved
            &nbsp;|&nbsp; SpinStrip
          </p>
          <div className="flex items-center gap-x-4">
            <a
              href="#"
              className="text-white md:text-neutral-accent hover:text-white transition text-sm"
            >
              Privacy Policy
            </a>
            <span className="text-white md:text-neutral-accent">|</span>
            <a
              href="#"
              className="text-white md:text-neutral-accent hover:text-white transition text-sm"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
