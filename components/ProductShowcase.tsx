"use client"

import Image from "next/image";
import cups from "@/public/cups.png";
import Link from "next/link";

const ProductShowcase = () => {
    return (
      <section
        id="wholesale"
        className="flex flex-col max-h-screen md:flex-row items-center justify-between bg-[#FFF7F3] px-6 md:px-16 py-12 md:py-28 rounded-bl-[250px] gap-5 md:gap-0"
      >
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center rounded-full">
          <Image
            src={cups?.src} // Replace with the correct path
            alt="Product"
            width={400}
            height={400}
            className="object-cover border-8 border-[#FEF0E7] rounded-full ring-8 ring-[#FEF0E7]"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-black">
            VITAMIN C: IMMUNITY SUPPORT (3 MONTH SUPPLY)
          </h2>

          <div className="flex items-center justify-center md:justify-start space-x-4">
            <span className="text-xl md:text-2xl font-semibold text-[#F97316]">
              $134.95 NZD
            </span>
            <span className="text-gray-500 line-through text-lg md:text-xl">
              $199.75 NZD
            </span>
          </div>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Adults take 2 soft-chews daily, or as advised by your healthcare
            professional. Our vitamins are here and ready to boost your mood,
            immunity, and overall well-being! Made in New Zealand from local and
            imported ingredients.
          </p>

          <Link href={"/shop"}>
            <button className="mt-4 px-6 py-2 border border-[#F97316] text-[#F97316] font-semibold rounded-lg hover:bg-[#F97316] hover:text-white transition">
              SHOP NOW
            </button>
          </Link>
        </div>
      </section>
    );
};

export default ProductShowcase;
