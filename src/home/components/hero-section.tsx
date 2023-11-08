import React from 'react';

import Container from '@/src/common/components/container';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
    return (
        // <Container as="section">
            <div className="space-y-6 py-20 px-40 bg-black text-white border">
                <h1 className="text-4xl font-bold">
                    Rainsense: Your Weather Oracle
                </h1>
                <p className="text-xl mr-20">
                    Rainsense is a weather prediction tool that uses machine
                    learning to predict the weather in your area. Also provides
                    with a water resource management system.
                </p>
                <Button size="lg" variant='secondary'>Explore the Forecast</Button>
            </div>
        // </Container>
    );
};

export default HeroSection;
