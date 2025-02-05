"use client"

import {Navbar} from "@/components/Navbar";
import {HeroSection} from "@/components/HeroSection";
import {FeaturesSection} from "@/components/FeautersSection"
import ProductShowcase from "@/components/ProductShowcase";
import Chart from "@/components/Chart";

export default function Home() {
  return (
    <div className=" flex flex-col items-center  min-h-screen  w-full text-black">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProductShowcase />
      <Chart />
    </div>
  );
}
