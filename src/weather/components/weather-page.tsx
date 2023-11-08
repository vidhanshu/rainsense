'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';

import Container from '@/src/common/components/container';
import StateInteractiveMap from './state-interactive-map';
import { TCities } from './types';
import DayTabs from './day-tabs';
import TodaysPrediction from './todays-prediction';
import HourlyPrediction from './hourly-prediction';

const WeatherPage = () => {
    const { city } = useParams() ?? {};
    const [prediction, setPrediction] = useState({});
    const [citySelected, setCitySelected] = useState<TCities>('Nagpur');
    const [daySelected, setDaySelected] = useState<string>('Today');

    const handleChangeSelected = (newCitySelected: TCities) => {
        setCitySelected(newCitySelected);
    };

    const handleDaySelected = (newDaySelected: string) => {
        setDaySelected(newDaySelected);
    };

    return (
        <main className="py-8">
            <Container>
                <h1 className="text-2xl font-bold text-center">
                    Showing rainfall prediction for{' '}
                    <span className="underline">{citySelected}</span>
                </h1>
            </Container>
            <DayTabs
                daySelected={daySelected}
                handleDaySelected={handleDaySelected}
            />
            <TodaysPrediction citySelected={citySelected} />
            <Container
                as="section"
                className="flex flex-col items-center justify-center"
            >
                <StateInteractiveMap
                    selected={citySelected}
                    handleChangeSelected={handleChangeSelected}
                />
            </Container>
            <HourlyPrediction />
        </main>
    );
};

export default WeatherPage;
