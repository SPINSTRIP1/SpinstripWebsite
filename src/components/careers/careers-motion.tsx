"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function CareersMotion() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const elements = document.querySelectorAll<HTMLElement>("[data-careers-reveal]");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-visible", "true");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    elements.forEach(element => {
      // Content above the fold is immediately readable; animate later sections.
      if (element.getBoundingClientRect().top < window.innerHeight) return;
      element.setAttribute("data-motion", "ready");
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
      elements.forEach(element => element.removeAttribute("data-motion"));
    };
  }, [pathname]);
  return null;
}
