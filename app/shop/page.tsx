"use client"

import React, { useState } from 'react';
import { Heart, Mail, Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';
import cup from "@/public/cup.png";
import cups from "@/public/cups.png"
import cupinhand from "@/public/cupinhand.png"
import product from "@/public/product.png"
import { Navbar } from '@/components/Navbar';
import ProductDetailsTabs from '@/components/shop/ProductDetailsTabs';
import ProductDetailsFooter from '@/components/shop/ProductDetailsFooter';

interface ProductImage {
    id: number;
    url: string;
}

export default function ProductDetail() {
    const images: ProductImage[] = [
        { id: 1, url: `${cup?.src}` },
        { id: 2, url: `${product?.src}` },
        { id: 3, url: `${cupinhand?.src}` },
        { id: 4, url: `${cups?.src}` },
    ];

    const [selectedImage, setSelectedImage] = useState(images[0].url);
    const [selectedSize, setSelectedSize] = useState('S-M');
    const [quantity, setQuantity] = useState(1);

    return (
      <>
        <Navbar />
        <div className="max-w-screen mx-auto px-4 py-8">
          {/* Product Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4 md:flex md:flex-row-reverse gap-5">
              {/* Main Image */}
              <div className="aspect-square w-full rounded-lg overflow-hidden">
                <img
                  src={selectedImage}
                  alt="Lira Earrings"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Thumbnail Images */}
              <div className=" grid grid-cols-4 md:flex md:flex-col gap-2 justify-around">
                {images.map((image) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(image.url)}
                    className={`aspect-square rounded-md overflow-hidden ${
                      selectedImage === image.url ? "ring-2 ring-pink-300 " : ""
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={`Product thumbnail ${image.id}`}
                      className="h-24 w-28 object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <h1 className="text-3xl font-medium">Lira Earrings</h1>
              <div className="text-xl">$ 20.00</div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                <span className="text-sm text-gray-600">1 customer review</span>
              </div>

              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                placerat, augue a volutpat hendrerit, sapien tortor faucibus
                augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
                facilisis consequat sed eu felis.
              </p>

              {/* Quantity Selector */}
              <div className="flex gap-4 items-center">
                <div className="flex border rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 bg-[#F6623E] text-white font-medium text-xl"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 bg-[#F6623E] text-white font-medium text-xl">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2  bg-[#F6623E] font-medium text-xl text-white"
                  >
                    +
                  </button>
                </div>

                <button className="border border-[#C3B1B1] text-[#C3B1B1] hover:bg-[#F6623E] hover:border-0 hover:text-[white] px-8 py-2 w-2/3 rounded transition-colors">
                  ADD TO CART
                </button>
              </div>

              {/* Size Selection */}
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedSize("S-M")}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === "S-M"
                      ? "border-[#F6623E] text-[#F6623E]"
                      : ""
                  }`}
                >
                  S-M
                </button>
                <button
                  onClick={() => setSelectedSize("M-L")}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === "M-L"
                      ? "border-[#F6623E] text-[#F6623E]"
                      : ""
                  }`}
                >
                  M-L
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 items-center pt-4">
                <button className="hover:text-[#F6623E]">
                  <Heart size={20} />
                </button>
                <button className="hover:text-[#F6623E]">
                  <Mail size={20} />
                </button>
                <button className="hover:text-[#F6623E]">
                  <Facebook size={20} />
                </button>
                <button className="hover:text-[#F6623E]">
                  <Instagram size={20} />
                </button>
                <button className="hover:text-[#F6623E]">
                  <Twitter size={20} />
                </button>
              </div>

              {/* Product Meta */}
              <div className="space-y-2 text-sm text-gray-600">
                <p>SKU: 12</p>
                <p>Categories: Fashion, Style</p>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <ProductDetailsTabs />

          {/* Footer */}
          <ProductDetailsFooter />
        </div>
      </>
    );
};