"use client"

import Image from "next/image";
import cupinhand from "@/public/cupinhand.png";
import chart from "@/public/Chart.png";

const Chart = () => {
    return (
        // Both are images
        <section className="flex flex-col max-h-screen gap-10 md:flex-row items-center justify-between bg-white px-6 md:px-16 py-12 md:py-28">
            {/* Left Side: Image */}
            <div className="w-full md:w-2/3 flex justify-center rounded-full">
                <Image
                    src={chart?.src} // Replace with the correct path
                    alt="Chart"
                    width={chart?.width}
                    height={chart?.height}
                    className="object-cover"
                />
            </div>

            {/* Right Side: Content */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                <Image
                    src={cupinhand?.src} // Replace with the correct path
                    alt="Cup"
                    width={500}
                    height={500}
                    className="object-cover"
                />
            </div>
        </section>
    );
};

export default Chart;
