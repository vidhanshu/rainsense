'use client';

import React from 'react';
import { Wind, Umbrella, Droplets } from 'lucide-react';

import Container from '@/src/common/components/container';
import useUnit from '@/src/common/custom-hook/useUnit';
import useFetch from '@/src/common/custom-hook/useFetch';
import { constructApiUrl } from '@/src/common/utils/construct-api-url';
import { TCities, TTodaysPrecition } from './types';

type TTodaysPredictionProps = {
    citySelected: TCities;
};
const TodaysPrediction = ({ citySelected }: TTodaysPredictionProps) => {
    const { unit, fullUnit } = useUnit();

    const { loading, data } = useFetch<TTodaysPrecition>({
        url: constructApiUrl(
            {
                current:
                    "temperature_2m,relative_humidity_2m,precipitation,rain,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m",
                temperature_unit: fullUnit,
            },
            citySelected,
            fullUnit
        ),
        dependencies: [citySelected, unit],
    });
    const { loading: isLoading, data: payload } = useFetch<{ rain: string, tip: string }>({
        url: "https://rainsense-lstm-api.onrender.com/predict",
        payload:
        {
            date: "2012-01-23",
            location: "15",
            mintemp: 13.4,
            maxtemp: 22.9,
            rainfall: 0.6,
            evaporation: "2.3",
            sunshine: "0",
            windgustdir: "11",
            windgustspeed: 44,
            winddir9am: "11",
            winddir3pm: "2",
            windspeed9am: 20,
            windspeed3pm: 24,
            humidity9am: 71,
            humidity3pm: 22,
            pressure9am: 1007.7,
            pressure3pm: 1007.1,
            cloud9am: 8,
            cloud3pm: "3",
            temp9am: 16.9,
            temp3pm: 21.8,
            raintoday: "4"
        },
        dependencies: [citySelected, unit],
    });

    if (loading || isLoading) {
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
                            {payload?.rain === "0" ? "Yes" : "No"}
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
