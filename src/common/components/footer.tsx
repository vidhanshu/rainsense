'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useUnit from '../custom-hook/useUnit';

const Footer = () => {
    const { checked } = useUnit();

    return (
        <footer className="bg-black text-white py-8 mt-20">
            <div className="container space-y-4 mx-auto flex flex-col items-center justify-center">
                <Link href={`/${checked ? '?unit=c' : '?unit=f'}`}>
                    <Image
                        src="/logo-dark.svg"
                        width={150}
                        height={30.69}
                        alt="logo"
                    />
                </Link>
                <p className="text-sm  mb-4">
                    Providing accurate weather forecasts and water resource
                    management solutions.
                </p>
                <div className="flex space-x-4">
                    <Link
                        href="/weather?unit=c"
                        className="hover:text-gray-400 transition duration-300 hover:underline"
                    >
                        See Weather
                    </Link>
                </div>
                <div className="mt-4 text-sm">
                    &copy; {new Date().getFullYear()} Rainsense
                </div>
            </div>
        </footer>
    );
};

export default Footer;
