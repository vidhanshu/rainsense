'use client';

import React from 'react';
import { Wind, Umbrella, Droplets } from 'lucide-react';

import Container from '@/src/common/components/container';
import { LATLONG_OF_CITIES } from '@/src/weather/utils/constants';
import useUnit from '@/src/common/custom-hook/useUnit';
import { TCities, TTodaysPrecition } from './types';
import useFetch from '@/src/common/custom-hook/useFetch';

type TTodaysPredictionProps = {
    citySelected: TCities;
};
const TodaysPrediction = ({ citySelected }: TTodaysPredictionProps) => {
    const { unit } = useUnit();

    const { loading, data } = useFetch<TTodaysPrecition>({
        url: `https://api.open-meteo.com/v1/forecast?latitude=${
            LATLONG_OF_CITIES[citySelected].lat
        }&longitude=${
            LATLONG_OF_CITIES[citySelected].long
        }&current=temperature_2m,wind_speed_10m,relative_humidity_2m,rain&temperature_unit=${
            unit === 'c' ? 'celsius' : 'fahrenheit'
        }`,
        dependencies: [citySelected, unit],
    });

    if (loading) {
        return (
            <Container className="h-[162px] animate-pulse bg-gray-300 rounded-lg my-6" />
        );
    }

    return (
        <Container>
            <div className="bg-[url(/todays-weather-bg.png)] p-6 bg-no-repeat bg-cover rounded-lg">
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
