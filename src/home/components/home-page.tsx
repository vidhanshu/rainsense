import React from 'react';
import HeroSection from './hero-section';
import AboutSection from './about-section';
import FeaturesSection from './features-section';
import Footer from '@/src/common/components/footer';

const HomePage = () => {
    return (
        <main>
            <HeroSection />
            <FeaturesSection />
            <AboutSection />
            <Footer/>
        </main>
    );
};

export default HomePage;
