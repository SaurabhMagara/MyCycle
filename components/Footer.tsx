import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: <Facebook size={20} />, href: '#' },
        { icon: <Instagram size={20} />, href: '#' },
        { icon: <Twitter size={20} />, href: '#' },
        { icon: <Youtube size={20} />, href: '#' }
    ];

    const moreInfoLinks = [
        'Shipping & Delivery',
        'Refund Policy',
        'Partner Program',
        'Wholesale Portal',
        'You Buy, We Donate',
        'Privacy Policy',
        'Terms & Conditions'
    ];

    const paymentMethods = [
        { name: 'American Express', src: '/api/placeholder/40/24' },
        { name: 'Apple Pay', src: '/api/placeholder/40/24' },
        { name: 'Google Pay', src: '/api/placeholder/40/24' },
        { name: 'Mastercard', src: '/api/placeholder/40/24' },
        { name: 'PayPal', src: '/api/placeholder/40/24' },
        { name: 'Shop Pay', src: '/api/placeholder/40/24' },
        { name: 'Visa', src: '/api/placeholder/40/24' }
    ];

    return (
        <footer className="bg-white py-12 px-4 pt-16 w-full">
            <div className="flex flex-col w-full justify-center items-center">
                {/* Contents */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 w-11/12">
                    {/* About Section */}
                    <div className=" flex flex-col items-center text-center md:text-left">
                        <h2 className="text-xl font-semibold mb-4">GOOD4ME.</h2>
                        <p className="text-gray-600 text-wrap w-10/12">
                            Good health is important, so all of our products have been carefully designed to bring out the best in you.
                        </p>
                    </div>

                    {/* Newsletter Section */}
                    <div className="flex flex-col items-center text-center md:text-left">
                        <h2 className="text-xl font-semibold mb-4">Keep In Touch</h2>
                        <p className="text-gray-600 mb-4 text-wrap w-10/12">
                            Subscribe to receive new product updates, be the first to know about sales, and more.
                        </p>
                        <div className="flex w-full">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 p-2 text-black border-0 border-b border-black rounded-l focus:outline-none w-full font-semibold"
                            />
                            <button className=" text-orange-600 px-4 py-2 border-b border-black font-semibold">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>

                    {/* More Info Section */}
                    <div className="flex flex-col items-center text-center md:text-left">
                        <h2 className="text-xl font-semibold mb-4">MORE INFO</h2>
                        <ul className="space-y-2">
                            {moreInfoLinks.map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row w-11/12 justify-between items-center border-t pt-8 px-10">
                    {/* Social Links */}
                    <div className="flex justify-center space-x-4 mb-2">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                className="text-gray-600 hover:text-orange-600 transition-colors"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                    <div className="text-gray-600 mb-2 md:mb-0">
                        © 2021, <span className='text-red-500 font-semibold'>GOOD4ME.</span>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;