"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#about-us", label: "About Us" },
    { href: "#contact-us", label: "Contact Us" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const navbarHeight = 80; // Offset for fixed navbar
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: "smooth",
        });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <nav className="w-full flex items-center justify-center fixed top-0 left-0 z-50 px-2 lg:px-4 pt-2">
      <div className="liquid-glass w-full max-w-296 mx-auto flex items-center justify-between rounded-3xl px-1 md:px-4 py-3 relative">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, "#home")}>
          <Image
            src={"/logo.png"}
            className="w-28 lg:w-34.25 h-7 lg:h-10.5 object-contain"
            width={300}
            height={100}
            alt="Logo"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-x-3 lg:gap-x-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-primary transition"
            >
              {link.label}
            </a>
          ))}
          <button className="text-primary text-sm lg:text-base font-bold bg-primary-accent rounded-3xl px-4 py-2 hover:bg-primary hover:text-white transition">
            Join Waitlist
          </button>
          <button className="bg-primary text-sm lg:text-base font-bold rounded-3xl px-4 py-2 text-white">
            Download App
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-x-1">
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
                  isMenuOpen ? "rotate-45 translate-y-[6.5px]" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out origin-center ${
                  isMenuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute top-full left-0 right-0 mt-2 liquid-glass-dropdown rounded-2xl md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-2 invisible pointer-events-none"
          }`}
        >
          <div className="flex flex-col py-2 relative z-10">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-6 py-3 hover:bg-white/10 transition-all duration-300 ${
                  isMenuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                }}
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
