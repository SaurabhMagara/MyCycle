"use client"

import {Navbar} from "@/components/Navbar";
import {HeroSection} from "@/components/HeroSection";
import {FeaturesSection} from "@/components/FeautersSection"

export default function Home() {
  return (
    <div className=" flex flex-col items-center  min-h-screen bg-[#FEEFE8] w-full text-black">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}
