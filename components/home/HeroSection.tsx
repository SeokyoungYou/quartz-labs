"use client";

import Galaxy from "@/components/Backgrounds/Galaxy/Galaxy";

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Galaxy background */}
      <div className="absolute inset-0 z-0">
        <Galaxy
          density={1.5}
          starSpeed={0.3}
          glowIntensity={0.4}
          saturation={0.2}
          twinkleIntensity={0.4}
          rotationSpeed={0.05}
          transparent={false}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
          Quartz Labs
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-light">
          Code what I love
        </p>
      </div>
    </div>
  );
}