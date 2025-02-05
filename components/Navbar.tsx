"use client"

import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";

const Search = dynamic(() => import("lucide-react").then((mod) => mod.Search), { ssr: false });
const User = dynamic(() => import("lucide-react").then((mod) => mod.User), { ssr: false });
const ShoppingCart = dynamic(() => import("lucide-react").then((mod) => mod.ShoppingCart), { ssr: false });
const Menu = dynamic(() => import("lucide-react").then((mod) => mod.Menu), { ssr: false });
const X = dynamic(() => import("lucide-react").then((mod) => mod.X), { ssr: false });


export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);


    return (
        <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-white shadow w-full">
            <div className="flex items-center">
                <h1 className="text-2xl font-bold text-black">
                    My C<span className="text-red-500">y</span>cle
                </h1>
            </div>

            <div className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-red-500">HOME</a>
                <a href="#" className="text-gray-700 hover:text-red-500">SHOP</a>
                <a href="#" className="text-gray-700 hover:text-red-500">FAQ'S</a>
                <a href="#" className="text-gray-700 hover:text-red-500">STOCKISTS</a>
                <a href="#" className="text-gray-700 hover:text-red-500">WHOLESALE</a>
                <a href="#" className="text-gray-700 hover:text-red-500">CONTACT</a>
            </div>

            <div className="flex items-center space-x-4">
                <div className="md:hidden">
                    {/* Only render menu when client is mounted */}
                    {isClient && (
                        <div className="md:hidden">
                            {isMenuOpen ? (
                                <X className="w-6 h-6 text-gray-700" onClick={() => setIsMenuOpen(false)} />
                            ) : (
                                <Menu className="w-6 h-6 text-gray-700" onClick={() => setIsMenuOpen(true)} />
                            )}
                        </div>
                    )}
                </div>
                <Search className="w-5 h-5 text-gray-700 hidden md:block cursor-pointer hover:text-red-500" />
                <User className="w-5 h-5 text-gray-700 hidden md:block cursor-pointer hover:text-red-500" />
                <div className="relative hidden md:block">
                    <ShoppingCart className="w-5 h-5 text-gray-700 cursor-pointer hover:text-red-500" />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        0
                    </span>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden fixed top-16 left-0 w-full bg-white shadow-md py-4 px-4 z-10">
                    <div className="flex flex-col space-y-4">
                        <a href="#" className="text-red-500">HOME</a>
                        <a href="#" className="text-gray-700">SHOP</a>
                        <a href="#" className="text-gray-700">FAQ'S</a>
                        <a href="#" className="text-gray-700">STOCKISTS</a>
                        <a href="#" className="text-gray-700">WHOLESALE</a>
                        <a href="#" className="text-gray-700">CONTACT</a>
                    </div>
                </div>
            )}
        </nav>
    );
};