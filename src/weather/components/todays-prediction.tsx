'use client';

import React from 'react';
import { Wind, Umbrella, Droplets } from 'lucide-react';

import Container from '@/src/common/components/container';
import useUnit from '@/src/common/custom-hook/useUnit';
import useFetch from '@/src/common/custom-hook/useFetch';
import { LATLONG_OF_CITIES } from '@/src/weather/utils/constants';
import { TCities, TTodaysPrecition } from './types';
import { constructApiUrl } from '@/src/common/utils/construct-api-url';

type TTodaysPredictionProps = {
    citySelected: TCities;
};
const TodaysPrediction = ({ citySelected }: TTodaysPredictionProps) => {
    const { unit, fullUnit } = useUnit();

    const { loading, data } = useFetch<TTodaysPrecition>({
        url: constructApiUrl(
            {
                current:
                    'temperature_2m,wind_speed_10m,relative_humidity_2m,rain',
                temperature_unit: fullUnit,
            },
            citySelected,
            fullUnit
        ),
        dependencies: [citySelected, unit],
    });

    if (loading) {
        return (
            <Container className="h-[162px] animate-pulse bg-gray-300 rounded-lg my-6" />
        );
    }

    return (
        <Container>
            {/* [url(/todays-weather-bg.png)] */}
            <div className="bg-black p-6 bg-no-repeat bg-cover rounded-lg">
                <div className="flex items-center justify-between">
                    <h1 className="text-white font-semibold text-3xl">
                        The weather <br />
                        today at {citySelected}
                    </h1>
                    <div>
                        <h1 className="text-6xl font-medium text-white">
                            {data?.current?.temperature_2m} °
                            {unit.toUpperCase()}
                        </h1>
                    </div>
                    <div className="space-y-4">
                        <div className="flex gap-x-4 text-white text-2xl items-center font-semibold">
                            <Wind className="w-6 h-6" />{' '}
                            {data?.current?.wind_speed_10m} km/h
                        </div>
                        <div className="flex gap-x-4 text-white text-2xl items-center font-semibold">
                            <Umbrella className="w-6 h-6" />{' '}
                            {data?.current?.rain} mm
                        </div>
                        <div className="flex gap-x-4 text-white text-2xl items-center font-semibold">
                            <Droplets className="w-6 h-6" />{' '}
                            {data?.current?.relative_humidity_2m} %
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default TodaysPrediction;
