"use client"

import React from 'react';
import Image from "next/image";
import hero from "@/public/hero.png";

export const HeroSection = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center sm:justify-between w-full  h-full bg-[#FEEFE8] px-4 md:px-28">
            <div className="max-w-xl w-full h-full mt-8 lg:mt-0">
                <div className="flex items-center space-x-2 mb-4">
                    <a href="#" className="text-red-500 hover:underline">Home</a>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-600">Name</span>
                </div>
                <h2 className="text-4xl md:text-6xl text-black font-bold mb-4">
                    Slogan
                    <br />
                    slogan
                </h2>
                <p className="text-gray-600 mb-8">
                    lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                </p>
                <button className="bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600 transition-colors">
                    SHOP NOW
                </button>
            </div>

            <div className="relative w-full lg:w-1/2 h-[24rem] md:h-[39rem] mb-8 lg:mb-0 overflow-hidden py-1">
                <div className="relative flex justify-center items-center h-full overflow-hidden">
                    <Image
                        src={hero?.src}
                        alt="Woman with plants"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
        </div>
    );
};