'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import useUnit from '@/src/common/custom-hook/useUnit';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { checked } = useUnit();

    return (
        <nav className="border-b">
            <div className="flex justify-between items-center max-w-7xl mx-auto py-4">
                <Link href={`/${checked ? '?unit=c' : '?unit=f'}`}>
                    <Image
                        src="/logo.svg"
                        width={150}
                        height={30.69}
                        alt="logo"
                    />
                </Link>

                <div className="flex gap-x-8 items-center">
                    <div className="flex items-center gap-x-2">
                        °F
                        <Switch
                            checked={checked}
                            onClick={() => {
                                router.push(
                                    `${pathname}/?unit=${checked ? 'f' : 'c'}`
                                );
                            }}
                        />
                        °C
                    </div>
                    <ul>
                        <li>
                            <Link
                                href={`/weather/${
                                    checked ? '?unit=c' : '?unit=f'
                                }`}
                            >
                                <Button size="sm">Predict</Button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
