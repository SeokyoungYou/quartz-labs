"use client";

import Galaxy from "@/components/Backgrounds/Galaxy/Galaxy";
import InfiniteMenu from "@/components/Components/InfiniteMenu/InfiniteMenu";

export default function HeroSection() {
  // Create items with colored backgrounds for now
  const menuItems = [
    {
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3CradialGradient id='g1'%3E%3Cstop offset='0%25' stop-color='%238b5cf6'/%3E%3Cstop offset='100%25' stop-color='%234c1d95'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='100' cy='100' r='90' fill='url(%23g1)' opacity='0.9'/%3E%3C/svg%3E",
      link: "#",
      title: "Galaxy",
      description: "Stellar UI",
    },
    {
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3CradialGradient id='g2'%3E%3Cstop offset='0%25' stop-color='%23ec4899'/%3E%3Cstop offset='100%25' stop-color='%23831843'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='100' cy='100' r='90' fill='url(%23g2)' opacity='0.9'/%3E%3C/svg%3E",
      link: "#",
      title: "Nebula",
      description: "Creative Code",
    },
    {
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3CradialGradient id='g3'%3E%3Cstop offset='0%25' stop-color='%2306b6d4'/%3E%3Cstop offset='100%25' stop-color='%23164e63'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='100' cy='100' r='90' fill='url(%23g3)' opacity='0.9'/%3E%3C/svg%3E",
      link: "#",
      title: "Cosmos",
      description: "Deep Tech",
    },
    {
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3CradialGradient id='g4'%3E%3Cstop offset='0%25' stop-color='%2310b981'/%3E%3Cstop offset='100%25' stop-color='%23064e3b'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='100' cy='100' r='90' fill='url(%23g4)' opacity='0.9'/%3E%3C/svg%3E",
      link: "#",
      title: "Aurora",
      description: "Smart Systems",
    },
    {
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3CradialGradient id='g5'%3E%3Cstop offset='0%25' stop-color='%23f59e0b'/%3E%3Cstop offset='100%25' stop-color='%2378350f'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='100' cy='100' r='90' fill='url(%23g5)' opacity='0.9'/%3E%3C/svg%3E",
      link: "#",
      title: "Supernova",
      description: "Performance",
    },
    {
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3CradialGradient id='g6'%3E%3Cstop offset='0%25' stop-color='%23ef4444'/%3E%3Cstop offset='100%25' stop-color='%237f1d1d'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='100' cy='100' r='90' fill='url(%23g6)' opacity='0.9'/%3E%3C/svg%3E",
      link: "#",
      title: "Pulsar",
      description: "Real-time",
    },
  ];

  return (
    <div className="relative w-full min-h-screen">
      {/* Galaxy background */}
      <div className="absolute inset-0 z-0">
        <Galaxy
          density={1.0}
          starSpeed={0.1}
          glowIntensity={0.15}
          saturation={0.2}
          twinkleIntensity={0.2}
          rotationSpeed={0.02}
          transparent={false}
        />
      </div>

      {/* InfiniteMenu - positioned above galaxy but below text */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden max-w-full max-h-full">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-full h-full pointer-events-auto">
            <InfiniteMenu items={menuItems} />
          </div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 pointer-events-none">
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
