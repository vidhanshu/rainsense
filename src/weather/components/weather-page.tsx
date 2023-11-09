'use client';

import React, { useState } from 'react';

import Container from '@/src/common/components/container';
import StateInteractiveMap from './state-interactive-map';
import DayTabs from './day-tabs';
import TodaysPrediction from './todays-prediction';
import HourlyPrediction from './hourly-prediction';
import { TCities, TDaySelected } from './types';
import WaterResourceManagement from './water-resource-management';

const WeatherPage = () => {
    const [citySelected, setCitySelected] = useState<TCities>('Nagpur');
    const [daySelected, setDaySelected] = useState<TDaySelected>({
        day: 'Today',
        date: new Date().toISOString().split('T')[0],
        idx: 0,
    });

    const handleChangeSelected = (newCitySelected: TCities) => {
        setCitySelected(newCitySelected);
    };

    const handleDaySelected = (newDaySelected: TDaySelected) => {
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
            <DayTabs
                daySelected={daySelected}
                handleDaySelected={handleDaySelected}
            />
            <HourlyPrediction
                citySelected={citySelected}
                daySelected={daySelected}
            />
            <WaterResourceManagement citySelected={citySelected} />
        </main>
    );
};

export default WeatherPage;
