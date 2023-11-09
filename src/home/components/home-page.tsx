import React from 'react';
import Image from 'next/image';

import HeroSection from './hero-section';
import AboutSection from './about-section';
import FeaturesSection from './features-section';
import Container from '@/src/common/components/container';

const HomePage = () => {
    return (
        <main>
            <HeroSection />
            <FeaturesSection />
            <Container as="section">
                <h1 className='font-bold text-lg mb-4'>Accuracy we achived</h1>
                <div className='flex gap-x-4 justify-between'>
                    <Image
                        src="/accuracy.png"
                        width={600}
                        height={300}
                        alt=""
                    />
                    <Image src="/loss.png" width={600} height={300} alt="" />
                </div>
            </Container>
            <AboutSection />
        </main>
    );
};

export default HomePage;
