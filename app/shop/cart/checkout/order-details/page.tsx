"use client"

import { Navbar } from "@/components/Navbar";
import React, { useState, useEffect } from "react";

interface OrderItem {
  name: string;
  price: number;
}

interface OrderDetails {
  orderNumber: string;
  email: string;
  paymentMethod: string;
  orderDate: string;
  deliveryOption: string;
  deliveryAddress: {
    street: string;
    area: string;
    city: string;
    country: string;
  };
  contactNumber: string;
  items: OrderItem[];
}

const OrderConfirmation: React.FC = () => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    // Set timeout to hide banner after 3 seconds
    const timer = setTimeout(() => {
      setShowBanner(false);
    }, 3000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this runs once on mount

  const orderDetails: OrderDetails = {
    orderNumber: "1879605573994",
    email: "kristianthemes@gmail.com",
    paymentMethod: "Mastercard************7865",
    orderDate: "October 8,2020",
    deliveryOption: "Standard delivery",
    deliveryAddress: {
      street: "Kristian holst 34",
      area: "old street W1F",
      city: "7NJ london",
      country: "United Kingdom",
    },
    contactNumber: "+44 8749790988",
    items: [
      { name: "Lira Earrings", price: 64 },
      { name: "Ollie Earrings", price: 10 },
      { name: "Kaede Hair Pin", price: 10 },
    ],
  };

  const subtotal = orderDetails.items.reduce(
    (sum, item) => sum + item.price,
    0
  );
  const total = subtotal;

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-4">
        {/* Success Banner with animation */}
        <div
          className={`
          transition-all duration-500 ease-in-out
          ${
            showBanner
              ? "opacity-100 max-h-20"
              : "opacity-0 max-h-0 overflow-hidden"
          }
          bg-orange-500 text-white p-4 flex items-center gap-2 mb-8
        `}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>We've received your order</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Rest of the component remains the same */}
          {/* Order Details Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-medium">Order Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm text-gray-600 uppercase mb-1">
                    ORDER NUMBER
                  </h3>
                  <p>{orderDetails.orderNumber}</p>
                </div>

                <div>
                  <h3 className="text-sm text-gray-600 uppercase mb-1">
                    EMAIL
                  </h3>
                  <p>{orderDetails.email}</p>
                </div>

                <div>
                  <h3 className="text-sm text-gray-600 uppercase mb-1">
                    PAYMENT METHOD
                  </h3>
                  <p>{orderDetails.paymentMethod}</p>
                </div>

                <div>
                  <h3 className="text-sm text-gray-600 uppercase mb-1">
                    ORDER DATE
                  </h3>
                  <p>{orderDetails.orderDate}</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm text-gray-600 uppercase mb-1">
                    DELIVERY OPTIONS
                  </h3>
                  <p>{orderDetails.deliveryOption}</p>
                </div>

                <div>
                  <h3 className="text-sm text-gray-600 uppercase mb-1">
                    DELIVERY ADDRESS
                  </h3>
                  <p>{orderDetails.deliveryAddress.street}</p>
                  <p>{orderDetails.deliveryAddress.area}</p>
                  <p>{orderDetails.deliveryAddress.city}</p>
                  <p>{orderDetails.deliveryAddress.country}</p>
                </div>

                <div>
                  <h3 className="text-sm text-gray-600 uppercase mb-1">
                    CONTACT NUMBER
                  </h3>
                  <p>{orderDetails.contactNumber}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div>
            <h2 className="text-2xl font-medium mb-8">Order Summary</h2>
            <div className="border border-black p-6">
              <div className="border-b border-black pb-4 mb-4">
                <div className="flex justify-between font-medium mb-4 border-b border-black pb-4">
                  <span>PRODUCT</span>
                  <span>TOTAL</span>
                </div>
                {orderDetails.items.map((item, index) => (
                  <div key={index} className="flex justify-between py-2">
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <div className="flex justify-between border-b border-black py-4">
                  <span>SUBTOTAL</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between border-b border-black py-4">
                  <span>SHIPPING</span>
                  <span>Free shipping</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>TOTAL</span>
                  <span>${total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderConfirmation;
