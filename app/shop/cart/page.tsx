"use client"

// Types
interface Product {
  id: string;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartTotals {
  subtotal: number;
  shipping: number;
  total: number;
}

interface ShippingAddress {
  country: string;
  city: string;
  postCode: string;
}

// Component
import React, { useState } from "react";
import cup from "@/public/cup.png";
import { Navbar } from "@/components/Navbar";
import ProductDetailsFooter from "@/components/shop/ProductDetailsFooter";
import { useRouter } from "next/navigation";

export default function Cart(){
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Lira Earrings",
      variant: "Black / Medium",
      price: 20.0,
      quantity: 3,
      image: cup?.src,
    },
    {
      id: "2",
      name: "Ollie Earrings",
      variant: "Black / Medium",
      price: 20.0,
      quantity: 1,
      image: cup?.src,
    },
    {
      id: "3",
      name: "Kaede Hair Pin",
      variant: "Black / Medium",
      price: 20.0,
      quantity: 1,
      image: cup?.src,
    },
  ]);

  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    country: "",
    city: "",
    postCode: "",
  });

  const [couponCode, setCouponCode] = useState<string>("");

  const calculateTotals = (): CartTotals => {
    const subtotal = products.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );
    // Shipping calculation would normally depend on address and weight
    const shipping = 0;
    return {
      subtotal,
      shipping,
      total: subtotal + shipping,
    };
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, quantity: Math.max(0, newQuantity) }
          : product
      )
    );
  };

  const removeProduct = (productId: string) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const totals = calculateTotals();

  const router = useRouter();

  const handleClick = ()=>{
    router.push("cart/checkout")
  }

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-2xl text-[#F6623E] font-semibold text-center mb-8">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center space-x-4 p-4 bg-white border-b border-black"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded"
                />

                <div className="flex-grow">
                  <h3 className="font-medium text-gray-800">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.variant}</p>
                  <p className="text-sm text-gray-600">
                    ${product.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex">
                  <button
                    onClick={() =>
                      updateQuantity(product.id, product.quantity - 1)
                    }
                    className="p-1 pl-2 text-white bg-[#F6623E] rounded-l"
                  >
                    -
                  </button>
                  <span className="w-8 text-white flex items-center justify-center  text-center bg-[#F6623E]">
                    {product.quantity}
                  </span>
                  <button
                    onClick={() =>
                      updateQuantity(product.id, product.quantity + 1)
                    }
                    className="p-1 pr-2 text-white bg-[#F6623E] rounded-r"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeProduct(product.id)}
                  className="text-[#F6623E] "
                >
                  ×
                </button>
              </div>
            ))}

            {/* Coupon */}

            <div className="w-full flex justify-end">
              <button className="px-4 py-2 border border-[#F6623E] text-[#F6623E] rounded hover:bg-[#F6623E] hover:text-white transition-colors">
                Update Cart
              </button>
            </div>
            <div className="flex space-x-4">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Coupon Code"
                className="flex-grow p-2 border-b border-black focus:outline-none"
              />
              <button className="px-4 py-2 bg-[#F6623E] text-white rounded hover:bg-coral-600">
                Apply Coupon
              </button>
            </div>
          </div>

          {/* Cart Totals */}
          <div className="bg-white border border-[#F6623E] p-6 rounded space-y-6">
            <h2 className="text-xl font-medium text-[#F6623E]">Cart totals</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-[#F6623E]">Subtotal</span>
                <span>${totals.subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between gap-3">
                <span className="text-[#F6623E]">Shipping</span>
                <span className="text-sm text-gray-600">
                  Shipping costs will be calculated once you have provided
                  address.
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-[#F6623E]">Calculate Shipping</h3>
              <select
                value={shippingAddress.country}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    country: e.target.value,
                  })
                }
                className="w-full p-2 border-b border-black focus:outline-none focus:border-[#F6623E]"
              >
                <option value="" className="">
                  Select Country
                </option>
                <option value="India">India</option>
                <option value="England">England</option>
              </select>

              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                placeholder="City"
                className="w-full p-2 border-b border-black focus:outline-none focus:border-[#F6623E]"
              />

              <input
                type="text"
                value={shippingAddress.postCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postCode: e.target.value,
                  })
                }
                placeholder="Post Code / ZIP"
                className="w-full p-2 border-b border-black focus:outline-none focus:border-[#F6623E]"
              />

              <button className="w-full p-2 border border-[#F6623E] text-[#F6623E] rounded hover:bg-[#F6623E] hover:text-white transition-colors">
                Update Totals
              </button>
            </div>

            <div className="flex justify-between font-medium text-lg text-[#F6623E] border-t border-black pt-5">
              <span>Total</span>
              <span>${totals.total.toFixed(2)}</span>
            </div>

            <button className="w-full p-3 bg-[#F6623E] text-white rounded hover:bg-[#f95931]" onClick={handleClick}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      <ProductDetailsFooter />
    </>
  );
};