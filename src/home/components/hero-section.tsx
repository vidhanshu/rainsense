'use client';

import React from 'react';

import Container from '@/src/common/components/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import useUnit from '@/src/common/custom-hook/useUnit';

const HeroSection = () => {
    const { unit } = useUnit();

    return (
        <div className="py-20 px-40 bg-black text-white">
            <Container as="section">
                <h1 className="text-4xl font-bold">
                    Rainsense: Your Weather Oracle
                </h1>
                <p className="text-xl max-w-5xl my-6">
                    Rainsense is a weather prediction tool that uses machine
                    learning to predict the weather in your area. Also provides
                    with a water resource management system.
                </p>
                <Link href={`/weather/?unit=${unit}`}>
                    <Button size="lg" variant="secondary" className="font-bold">
                        Explore the Forecast
                    </Button>
                </Link>
            </Container>
        </div>
    );
};

export default HeroSection;
