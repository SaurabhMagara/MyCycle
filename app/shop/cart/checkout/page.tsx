"use client";

import { Navbar } from "@/components/Navbar";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface OrderItem {
  name: string;
  price: number;
}

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  country: string;
  streetAddress: string;
  postcode: string;
  town: string;
  phone: string;
  email: string;
  createAccount: boolean;
  shipToDifferent: boolean;
  orderNotes: string;
  paymentMethod: "bank" | "check" | "cash" | "paypal";
}

const Checkout: React.FC = () => {
  const [couponCode, setCouponCode] = useState("");
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    postcode: "",
    town: "",
    phone: "",
    email: "",
    createAccount: false,
    shipToDifferent: false,
    orderNotes: "",
    paymentMethod: "bank",
  });

  const orderItems: OrderItem[] = [
    { name: "Lira Earrings", price: 64 },
    { name: "Ollie Earrings", price: 10 },
    { name: "Kaede Hair Pin", price: 10 },
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0);
  const total = subtotal;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const router = useRouter();
  
    const handleClick = ()=>{
      router.push("checkout/order-details")
    }
  

  return (
    <>
    <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-2xl font-semibold mb-6 text-center">Checkout</h1>

        {/* Coupon Section */}
        <div className="mb-8">
          <p className="mb-2">
            <span>Returning customer? </span>
            <a href="#" className="text-blue-600 hover:underline">
              Click here to login
            </a>
          </p>
          <div className="bg-white border border-black p-4">
            <div className="flex flex-wrap gap-4">
              <input
                type="text"
                placeholder="Coupon Code"
                className="flex-1 min-w-[200px] p-2 border-b border-black focus:outline-none"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
                APPLY COUPON
              </button>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Billing Details */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1">First name *</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="w-full p-2 border-b border-black focus:outline-none focus:border-[#F6623E]"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block mb-1">Last name *</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  className="w-full p-2 border-b border-black focus:outline-none focus:border-[#F6623E]"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block mb-1">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  className="w-full p-2 border-b border-black focus:outline-none focus:border-[#F6623E]"
                  value={formData.companyName}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block mb-1">Country *</label>
                <select
                  name="country"
                  required
                  className="w-full p-2 border-b border-black focus:outline-none focus:border-[#F6623E]"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      country: e.target.value,
                    }))
                  }
                >
                  <option value="">Select a country</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                </select>
              </div>

              <div>
                <label className="block mb-1">Street Address *</label>
                <input
                  type="text"
                  name="streetAddress"
                  required
                  className="w-full p-2 border-b border-black focus:outline-none focus:border-[#F6623E]"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block mb-1">Postcode / ZIP *</label>
                <input
                  type="text"
                  name="postcode"
                  required
                  className="w-full p-2 border-b border-black focus:outline-none focus:border-[#F6623E]"
                  value={formData.postcode}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block mb-1">Town / City *</label>
                <input
                  type="text"
                  name="town"
                  required
                  className="w-full p-2 border-b border-black focus:outline-none focus:border-[#F6623E]"
                  value={formData.town}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block mb-1">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full p-2 border-b border-black focus:outline-none focus:border-[#F6623E]"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-2 border-b border-black focus:outline-none focus:border-[#F6623E]"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="space-y-2 mt-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="createAccount"
                  id="createAccount"
                  className="mr-2 rounded border-gray-300 focus:ring-blue-500"
                  checked={formData.createAccount}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="createAccount">Create an account?</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="shipToDifferent"
                  id="shipToDifferent"
                  className="mr-2 rounded border-gray-300 focus:ring-blue-500"
                  checked={formData.shipToDifferent}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="shipToDifferent">
                  Ship to a different address?
                </label>
              </div>
            </div>

            <div className="mt-4">
              <label className="block mb-1">Order notes</label>
              <textarea
                name="orderNotes"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                value={formData.orderNotes}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white border border-black p-6">
              <h2 className="text-xl font-semibold mb-4">Your Order</h2>
              <div className="border-b mb-4">
                <div className="flex justify-between py-2 font-semibold">
                  <span>PRODUCT</span>
                  <span>TOTAL</span>
                </div>
                {orderItems.map((item, index) => (
                  <div key={index} className="flex justify-between py-2">
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 border-b pb-4 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free shipping</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { id: "bank", label: "Direct bank transfer" },
                  { id: "check", label: "Check payments" },
                  { id: "cash", label: "Cash on delivery" },
                  { id: "paypal", label: "PayPal" },
                ].map((method) => (
                  <div key={method.id} className="flex items-center">
                    <input
                      type="radio"
                      id={method.id}
                      name="paymentMethod"
                      value={method.id}
                      checked={formData.paymentMethod === method.id}
                      onChange={() =>
                        setFormData((prev) => ({
                          ...prev,
                          paymentMethod: method.id as FormData["paymentMethod"],
                        }))
                      }
                      className="mr-2 border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor={method.id}>{method.label}</label>
                  </div>
                ))}
              </div>

              <button
              onClick={handleClick}
                
                className="w-full bg-orange-500 text-white py-3 rounded mt-6 hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Checkout;
