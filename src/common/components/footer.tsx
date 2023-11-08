'use client';

import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 mt-20">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <div className="text-2xl font-semibold mb-2">RAINSENSE</div>
                <p className="text-sm mb-4">
                    Providing accurate weather forecasts and water resource management solutions.
                </p>
                <div className="flex space-x-4">
                    <a href="/about" className="hover:text-gray-400 transition duration-300">
                        About Us
                    </a>
                    <a href="/services" className="hover:text-gray-400 transition duration-300">
                        Services
                    </a>
                    <a href="/contact" className="hover:text-gray-400 transition duration-300">
                        Contact
                    </a>
                </div>
                <div className="mt-4 text-sm">&copy; {new Date().getFullYear()} Weather Resource Management</div>
            </div>
        </footer>
    );
};

export default Footer;
