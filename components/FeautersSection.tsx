"use client"

import Image from "next/image";

//Images
import lab from "@/public/lab.png";
import ecology from "@/public/ecology.png";
import shield from "@/public/shield.png";
import sideimage from "@/public/sideimage.png";
import cup from "@/public/cup.png";
import flower from "@/public/flower.png";
import money from "@/public/money.png";
import dampness from "@/public/dampness.png";
import freedom from "@/public/freedom.png";
import sanitary from "@/public/sanitary.png";

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
                    <div className="flex flex-col p-6 items-center text-center group hover:bg-orange-50 hover:rounded-xl  hover:shadow-md">
                        <div className="bg-[#FFF8F6] group-hover:bg-orange-500 text-white p-4 rounded-xl">
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

                {/* Chemical Free card*/}
                    <div className="flex flex-col p-6 items-center text-center group hover:bg-orange-50 hover:rounded-xl  hover:shadow-md">
                        <div className="bg-[#FFF8F6] group-hover:bg-orange-500 text-white p-4 rounded-xl">
                        <Image src={lab?.src} width={48} height={48} alt="Chemical Free" className="h-12 w-12" />
                    </div>
                    <h3 className="text-lg font-bold mt-4">Chemical Free</h3>
                    <p className="text-gray-600 mt-2 text-sm">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </div>
        </div>
        {/* Second screen */}
            <div className=" relative bg-white py-12 sm:py-20 lg:py-28  max-h-screen w-full">
                <div className="container mx-auto px-4">
                    {/* flower image in left side */}
                    <div className="absolute top-10 z-20">
                        <Image src={flower?.src} alt="flower" height={flower?.height} width={flower?.width} className="opacity-35" />
                    </div>
                    {/* titile */}
                    <div className="text-center mb-12 sm:mb-20 lg:mb-28 z-50">
                        <h2 className="w-auto text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl z-50">
                            WHY MAKE THE SWITCH?
                        </h2>
                    </div>
               
                   {/* Cup image */}
                    <div className="sm:mt-20 lg:mt-28 flex justify-center items-center z-50">
                        <Image
                            src={cup?.src} 
                            height={600}
                            width={500}
                            alt="Menstrual Cups"
                            className="max-w-full h-auto z-50 mix-blend-multiply"
                        />
                    </div>

                    {/* Floating benefits in desktop */}
                   
                   <div className="hidden lg:flex ">
                        <div className="absolute top-56 left-80 z-50">
                            {/* left top image */}
                            <Image src={money?.src} alt="money image" height={300} width={200}></Image>
                        </div>
                        <div className="absolute bottom-36 left-52  z-50">
                            {/* left bottom image */}
                            <Image src={freedom?.src} alt="money image" height={300} width={200}></Image>
                        </div>
                        <div className="absolute top-56 right-80  z-50">
                            {/* right top image */}
                            <Image src={sanitary?.src} alt="money image" height={300} width={200}></Image>
                        </div>
                        <div className="absolute bottom-36 right-52  z-50">
                            {/* right bottom image */}
                            <Image src={dampness?.src} alt="money image" height={300} width={200}></Image>
                        </div>
                   </div>

                    {/* benefits in mobile */}
                    <div className="lg:hidden  grid grid-cols-2 w-full gap-2 place-items-center">
                        <div className="z-50">
                            {/* left top image */}
                            <Image src={money?.src} alt="money image" height={300} width={200}></Image>
                        </div>
                        <div className="z-50">
                            {/* left bottom image */}
                            <Image src={freedom?.src} alt="money image" height={300} width={200}></Image>
                        </div>
                        <div className="z-50">
                            {/* right top image */}
                            <Image src={sanitary?.src} alt="money image" height={300} width={200}></Image>
                        </div>
                        <div className="z-50">
                            {/* right bottom image */}
                            <Image src={dampness?.src} alt="money image" height={300} width={200}></Image>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

