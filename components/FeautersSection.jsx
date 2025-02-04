"use client"

import Image from "next/image";
import lab from "@/public/lab.png";
import ecology from "@/public/ecology.png";
import shield from "@/public/shield.png";
import sideimage from "@/public/sideimage.png";
import cup from "@/public/cup.png";
import flower from "@/public/flower.png";

export const FeaturesSection = () => {
    return (
        <>
        <div className="relative flex  flex-col  justify-center items-center py-16 px-4 md:px-10 lg:px-20 min-h-screen w-full bg-orange-50 ">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl text-black font-bold text-center mb-10">
                We Have The Main Process to <br /> Run The MyCycle
            </h2>

            <div className=" absolute -left-0 z-10  h-screen max-h-screen ">
                <Image src={sideimage?.src} alt=" " height={1080} width={sideimage?.width}/>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {/* Quality Assured */}
                <div className="flex flex-col items-center text-center">
                    <div className="bg-[#FFF8F6] p-4 rounded-xl">
                        <Image src={shield?.src} width={48} height={48} alt="Quality Assured" className="h-12 w-12" />
                    </div>
                    <h3 className="text-lg font-bold mt-4">Quality Assured</h3>
                    <p className="text-gray-600 mt-2 text-sm">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>

                {/* Clean Ingredients */}
                <div className="bg-orange-50 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                    <div className="bg-orange-500 p-4 rounded-xl">
                        <Image src={ecology?.src} width={48} height={48} alt="Clean Ingredients" className="h-12 w-12" />
                    </div>
                    <h3 className="text-lg font-bold mt-4">Clean Ingredients</h3>
                    <p className="text-gray-600 mt-2 text-sm">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>

                {/* Chemical Free */}
                <div className="flex flex-col items-center text-center">
                    <div className="bg-[#FFF8F6] p-4 rounded-xl">
                        <Image src={lab?.src} width={48} height={48} alt="Chemical Free" className="h-12 w-12" />
                    </div>
                    <h3 className="text-lg font-bold mt-4">Chemical Free</h3>
                    <p className="text-gray-600 mt-2 text-sm">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </div>
        </div>
            <div className=" relative bg-white py-12 sm:py-20 lg:py-28 min-h-screen max-w-screen-2xl w-full">
                <div className="container mx-auto px-4">
                    <div className="absolute top-10 z-20">
                        <Image src={flower?.src} alt="flower" height={flower?.height} width={flower?.width} className="opacity-40" />
                    </div>
                    <div className="text-center mb-12 sm:mb-20 lg:mb-28 z-10">
                        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl">
                            WHY MAKE THE SWITCH?
                        </h2>
                    </div>
               
                    {/* Sample Menstrual Cups Image (Replace with your actual image) */}
                    <div className="mt-12 sm:mt-20 lg:mt-28 flex justify-center ">
                        <Image
                            src={cup?.src} 
                            height={cup?.height}
                            width={10}
                            alt="Menstrual Cups"
                            className="max-w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

