"use client"

import {Navbar} from "@/components/Navbar";
import {HeroSection} from "@/components/HeroSection";
import {FeaturesSection} from "@/components/FeautersSection"
import ProductShowcase from "@/components/ProductShowcase";
import Chart from "@/components/Chart";
import ProductDetails from "@/components/ProductDetails";
import Testimonials from "@/components/TestimonialsCarousel";
import AccordianQuestions from "@/components/AccordianQuestions";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="relative flex flex-col items-center  min-h-screen  w-full text-black scroll-smooth">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProductShowcase />
      <Chart />
      <ProductDetails />
      <Testimonials/>
      <AccordianQuestions/>
      <Footer/>
    </div>
  );
}
