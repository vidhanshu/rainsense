import React from 'react';

import Container from '@/src/common/components/container';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
    return (
        <Container as="section">
            <div className="space-y-6">
                <h1 className="text-4xl font-bold">
                    Rainsense: Your Weather Oracle
                </h1>
                <p className="text-xl">
                    Rainsense is a weather prediction tool that uses machine
                    learning to predict the weather in your area. Also provides
                    with a water resource management system.
                </p>
                <Button size="lg">Explore the Forecast</Button>
            </div>
        </Container>
    );
};

export default HeroSection;
