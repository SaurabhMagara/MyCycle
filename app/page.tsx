"use client"

import {Navbar} from "@/components/Navbar";
import {HeroSection} from "@/components/HeroSection";
import {FeaturesSection} from "@/components/FeautersSection"
import ProductShowcase from "@/components/ProductShowcase";
import Chart from "@/components/Chart";
import ProductDetails from "@/components/ProductDetails";
import Testimonials from "@/components/TestimonialsCarousel";
import AccordianQuestions from "@/components/AccordianQuestions";


export default function Home() {
  return (
    <div className=" flex flex-col items-center  min-h-screen  w-full text-black">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProductShowcase />
      <Chart />
      <ProductDetails />
      <Testimonials/>
      <AccordianQuestions/>
    </div>
  );
}
