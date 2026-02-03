"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#", label: "Features" },
    { href: "#", label: "About Us" },
    { href: "#", label: "Contact Us" },
  ];

  return (
    <nav className="w-full flex items-center justify-center fixed top-0 left-0 z-50 px-2 md:px-4">
      <div className="max-w-296 w-full mx-auto flex items-center justify-between bg-primary-accent/40 backdrop-blur-3xl rounded-3xl px-2 md:px-4 py-3 border border-white/30 shadow-lg shadow-black/5 relative">
        {/* Logo */}
        <Image
          src={"/logo.png"}
          className="w-28 md:w-34.25 h-7 md:h-10.5 object-contain"
          width={300}
          height={100}
          alt="Logo"
        />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-x-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-primary transition"
            >
              {link.label}
            </a>
          ))}
          <button className="text-primary font-bold bg-primary-accent rounded-3xl px-4 py-2 hover:bg-primary hover:text-white transition">
            Join Waitlist
          </button>
          <button className="bg-primary font-bold rounded-3xl px-4 py-2 text-white">
            Download App
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center gap-x-1">
          <button className="text-primary text-xs font-semibold bg-primary-accent rounded-3xl px-3 py-2 hover:bg-primary hover:text-white transition">
            Join Waitlist
          </button>
          <button className="bg-primary text-xs font-semibold rounded-3xl px-3 py-2 text-white">
            Download App
          </button>
          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 group"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out origin-center ${
                  isMenuOpen ? "rotate-45 translate-y-[9px]" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out origin-center ${
                  isMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute top-full left-0 right-0 mt-2 bg-primary-accent/90 backdrop-blur-3xl rounded-2xl border border-white/30 shadow-lg shadow-black/10 lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-2 invisible"
          }`}
        >
          <div className="flex flex-col py-2">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-6 py-3 hover:bg-white/10 transition-all duration-300 ${
                  isMenuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
