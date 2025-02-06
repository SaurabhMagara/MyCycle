"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from '../components/ui/infinite-moving-cards'

export default function TestimonialsCarousel() {
  return (
    <>
    <div className="flex justify-center items-center">
        <h2 className="w-auto text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl z-50 py-5 md:pb-20 px-5">
          WHAT OUR HAPPY CLIENTS SAY
        </h2>
    </div>
      <div className="w-full rounded-md flex flex-col items-center relative overflow-hidden py-10  md:py-24">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        {/* Orange bg square */}
        <div className="absolute -top-96 z-10 bg-[#FFF7F3] h-[55rem] w-11/12 md:w-2/3"></div>
      </div>
    </>
  );
}

const testimonials = [
  {
    name: "Sophie M",
    role: "Management Support",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "We have perfected our formulas over time, based on your feedback. Check out hundreds of reviews on our website. We can't wait until you are a part of our Good4Me Family."
  },
  {
    name: "Coralieanne T",
    role: "Management Support",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "We have perfected our formulas over time, based on your feedback. Check out hundreds of reviews on our website. We can't wait until you are a part of our Good4Me Family."
  },
  {
    name: "Benjamin W",
    role: "Management Support",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
    text: "We have perfected our formulas over time, based on your feedback. Check out hundreds of reviews on our website. We can't wait until you are a part of our Good4Me Family."
  }
];
