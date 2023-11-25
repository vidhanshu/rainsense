import React from 'react';
import Container from '@/src/common/components/container';

function AboutSection() {
    return (
        <Container as="section">
            <div className="flex md:flex-row flex-col gap-6 mt-20">
                <div className="flex flex-col gap-2 md:w-1/2">
                    <p className="font-bold text-md md:text-lg">Who Are We</p>
                    <p className="text-sm md:text-base border min-h-[180px] border-gray-200 px-4 py-4 rounded-xl">
                        Welcome to RAINSENSE, your trusted online resource for
                        up-to-date weather forecasts, climate data, and water
                        management insights. We are passionate about providing
                        accurate weather predictions, monitoring precipitation,
                        and ensuring efficient water resource distribution.
                        Explore our platform to make informed decisions and
                        contribute to a sustainable and water-secure future.
                    </p>
                </div>
                <div className="flex flex-col gap-2 md:w-1/2">
                    <p className="font-bold text-md md:text-lg">What We Do</p>
                    <p className="text-sm md:text-base border min-h-[180px] border-gray-200 px-4 py-4 rounded-xl">
                        At RAINSENSE, we deliver reliable weather forecasts,
                        precipitation monitoring, and expert water resource
                        management insights. Our platform empowers you to plan
                        ahead, stay informed about weather conditions, and make
                        smart choices for efficient water utilization. Join us
                        in contributing to a sustainable and water-secure
                        future.
                    </p>
                </div>
            </div>
        </Container>
    );
}

export default AboutSection;
