"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const PHONE_IMAGES = [
  "/hero-1.png",
  "/hero-2.png",
  "/hero-3.png",
  "/hero-4.png",
  "/hero-5.png",
];

// SPREAD positions — fanned out with center biggest
const SLOTS = [
  { x: -300, y: 25, rotate: -6, scale: 0.82, z: 1 },
  { x: -150, y: 12, rotate: -3, scale: 0.9, z: 2 },
  { x: 0, y: 0, rotate: 0, scale: 1, z: 3 },
  { x: 150, y: 12, rotate: 3, scale: 0.9, z: 2 },
  { x: 300, y: 25, rotate: 6, scale: 0.82, z: 1 },
];

// GROUPED positions — tight row, all visible, center biggest
const GROUPED_SLOTS = [
  { x: -100, y: 12, rotate: 0, scale: 0.78, z: 1 },
  { x: -50, y: 6, rotate: 0, scale: 0.86, z: 2 },
  { x: 0, y: 0, rotate: 0, scale: 0.94, z: 3 },
  { x: 50, y: 6, rotate: 0, scale: 0.86, z: 2 },
  { x: 100, y: 12, rotate: 0, scale: 0.78, z: 1 },
];

const MOBILE_SLOTS = [
  { x: -120, y: 14, rotate: -5, scale: 0.75, z: 1 },
  { x: -60, y: 7, rotate: -2.5, scale: 0.84, z: 2 },
  { x: 0, y: 0, rotate: 0, scale: 0.92, z: 3 },
  { x: 60, y: 7, rotate: 2.5, scale: 0.84, z: 2 },
  { x: 120, y: 14, rotate: 5, scale: 0.75, z: 1 },
];

const MOBILE_GROUPED_SLOTS = [
  { x: -56, y: 8, rotate: 0, scale: 0.68, z: 1 },
  { x: -28, y: 4, rotate: 0, scale: 0.76, z: 2 },
  { x: 0, y: 0, rotate: 0, scale: 0.84, z: 3 },
  { x: 28, y: 4, rotate: 0, scale: 0.76, z: 2 },
  { x: 56, y: 8, rotate: 0, scale: 0.68, z: 1 },
];

// Rotation patterns — each one puts a different phone in the center (slot 2)
// Every phone gets its turn as the biggest/center phone
// Pattern: [slot0, slot1, slot2(center), slot3, slot4] = which image index goes there
const ROTATION_ORDERS = [
  [0, 1, 2, 3, 4], // image 2 in center (initial)
  [2, 0, 3, 4, 1], // image 3 in center
  [3, 2, 4, 1, 0], // image 4 in center
  [4, 3, 0, 2, 1], // image 0 in center
  [0, 4, 1, 3, 2], // image 1 in center
];

export default function PhoneCarousel() {
  const [phase, setPhase] = useState<"grouped" | "spread" | "carousel">(
    "grouped",
  );
  const [order, setOrder] = useState([0, 1, 2, 3, 4]);
  const rotationIdx = useRef(1);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Phase transitions: grouped → spread → carousel
  useEffect(() => {
    const t1 = setTimeout(() => setPhase("spread"), 1200);
    const t2 = setTimeout(() => setPhase("carousel"), 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Carousel: rotate so each phone gets a turn in center
  const rotatePhones = useCallback(() => {
    setOrder(ROTATION_ORDERS[rotationIdx.current]);
    rotationIdx.current = (rotationIdx.current + 1) % ROTATION_ORDERS.length;
  }, []);

  useEffect(() => {
    if (phase !== "carousel") return;
    const interval = setInterval(rotatePhones, 3000);
    return () => clearInterval(interval);
  }, [phase, rotatePhones]);

  const getStyle = (imageIdx: number): React.CSSProperties => {
    const slotIdx = order.indexOf(imageIdx);

    if (phase === "grouped") {
      const slots = isMobile ? MOBILE_GROUPED_SLOTS : GROUPED_SLOTS;
      const slot = slots[slotIdx];
      return {
        transform: `translateX(${slot.x}px) translateY(${slot.y}px) scale(${slot.scale})`,
        zIndex: slot.z,
        transition: "all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)",
      };
    }

    const slots = isMobile ? MOBILE_SLOTS : SLOTS;
    const slot = slots[slotIdx];

    return {
      transform: `translateX(${slot.x}px) translateY(${slot.y}px) rotate(${slot.rotate}deg) scale(${slot.scale})`,
      zIndex: slot.z,
      transition:
        phase === "spread"
          ? "all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)"
          : "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    };
  };

  return (
    <div className="relative w-full flex items-center justify-center h-52 md:h-108.75">
      {PHONE_IMAGES.map((src, imageIdx) => (
        <div key={imageIdx} className="absolute" style={getStyle(imageIdx)}>
          <Image
            src={src}
            alt={`App screen ${imageIdx + 1}`}
            width={280}
            height={560}
            className="w-28 md:w-48 lg:w-56 h-auto object-contain rounded-2xl md:rounded-3xl drop-shadow-2xl"
            priority
          />
        </div>
      ))}
    </div>
  );
}
