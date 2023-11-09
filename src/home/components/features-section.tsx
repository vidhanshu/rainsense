import React from 'react'
import Image from 'next/image'

import Container from '@/src/common/components/container';
import { IcDrought, IcPrecipitation, IcSun, IcWater } from '@/src/assets';

function FeaturesSection() {
    const services = [
        {
            title: 'Weather Forecasting',
            description: 'Offers real-time weather predictions for planning.',
            icon: IcSun
        },
        {
            title: 'Precipitation Monitoring',
            description: 'Tracks rainfall to manage water resources.',
            icon: IcPrecipitation
        },
        {
            title: 'Drought Monitoring',
            description: 'Alerts to water scarcity and conservation.',
            icon: IcDrought
        },
        {
            title: 'Reservoir Management',
            description: "Manages water distribution efficiently.",
            icon: IcWater
        }
    ];

    function ServiceCard({ title, description, Icon }: { title: string; description: string; Icon: any }) {
        return (
            <div>
                <div className="bg-black md:h-40 md:w-40 h-24 w-24 rounded-full flex items-center justify-center my-4 mx-auto p-7">
                <Image
                        src={Icon}
                        width={150}
                        height={30.69}
                        alt="logo"
                    />
                </div>
                <p className="text-center px-2 text-md md:text-lg md:px-20 font-bold">{title}</p>
                <p className="text-xs px-4 mt-1 md:text-sm md:px-8 text-center md:mt-2">{description}</p>
            </div>
        );
    }
    return (
        <Container as='section'>
            <div className="grid md:flex  grid-cols-2 mt-16 md:mt-20">
            {services.map((s, index) => {
                return <ServiceCard key={index} title={s.title} description={s.description} Icon={s.icon} />;
            })}
        </div>
        </Container>
        
    )
}

export default FeaturesSection