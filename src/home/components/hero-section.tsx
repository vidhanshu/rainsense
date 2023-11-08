import React from 'react';

import Container from '@/src/common/components/container';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
    return (
        <div className="py-20 px-40 bg-black text-white">
            <Container as="section" className="space-y-6 ">
                <h1 className="text-4xl font-bold">
                    Rainsense: Your Weather Oracle
                </h1>
                <p className="text-xl mr-20">
                    Rainsense is a weather prediction tool that uses machine
                    learning to predict the weather in your area. Also provides
                    with a water resource management system.
                </p>
                <Button size="lg" variant="secondary" className='font-bold'>
                    Explore the Forecast
                </Button>
            </Container>
        </div>
    );
};

export default HeroSection;
