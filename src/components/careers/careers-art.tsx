"use client";

import { useState } from "react";

export function CareersArt() {
  const [paused, setPaused] = useState(false);
  return (
    <div className="careers-art" data-paused={paused}>
      <div aria-hidden="true">
        <div className="careers-art-grid" />
        <div className="careers-orbit careers-orbit-one" />
        <div className="careers-orbit careers-orbit-two" />
        <div className="careers-orbit careers-orbit-three" />
        <div className="careers-art-core"><span>Make<br />your mark.</span></div>
        <span className="careers-art-spark careers-spark-one">+</span>
        <span className="careers-art-spark careers-spark-two">+</span>
        <span className="careers-art-caption">GOOD PEOPLE. MEANINGFUL WORK.</span>
      </div>
      <button type="button" className="careers-motion-toggle" aria-pressed={paused} aria-label="Pause decorative animation" onClick={() => setPaused(!paused)}>
        <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>
      </button>
    </div>
  );
}
