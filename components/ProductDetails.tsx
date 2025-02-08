"use client"

import Image from "next/image";
import product from "@/public/product.png";

const ProductDetails = () => {
    return (
      <section className="flex flex-col max-h-screen items-center justify-center bg-[#FFF7F3] px-6 md:px-16 py-12 md:py-28 gap-16 md:gap-20">
        {/* Title */}
        <div className="text-center flex flex-col justify-center items-center">
          <h2 className="w-auto text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl z-50">
            WHAT'S IN GOOD4ME?
          </h2>
          <p className="text-center text-gray-800 w-8/12">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>
        </div>
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={product?.src} // Replace with the correct path
            alt="Product"
            width={product?.width}
            height={product?.height}
            className="object-cover"
          />
        </div>
      </section>
    );
};

export default ProductDetails;