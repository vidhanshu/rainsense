'use client';

import React, { useState } from 'react';

import Container from '@/src/common/components/container';
import StateInteractiveMap from './state-interactive-map';
import DayTabs from './day-tabs';
import TodaysPrediction from './todays-prediction';
import HourlyPrediction from './hourly-prediction';
import { TCities, TDaySelected } from './types';
import WaterResourceManagement from './water-resource-management';
import DroughtPreciction from './drought-condition';

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

            <Container
                as="section"
                className="flex flex-col items-center justify-center"
            >
                <Container>
                    <p className="font-bold text-2xl md:text-2xl mt-10 ">Interactive Map</p>
                </Container>
                <StateInteractiveMap
                    selected={citySelected}
                    handleChangeSelected={handleChangeSelected}
                />
            </Container>
            <Container>
                <p className="font-bold text-2xl md:text-4xl mt-10 ">{`Rainfall Prediction for`} {citySelected}</p>
            </Container>
            <TodaysPrediction citySelected={citySelected} />
            <DayTabs
                daySelected={daySelected}
                handleDaySelected={handleDaySelected}
            />
            <HourlyPrediction
                citySelected={citySelected}
                daySelected={daySelected}
            />
            <WaterResourceManagement citySelected={citySelected} />
            <DroughtPreciction city={citySelected} />
        </main>
    );
};

export default WeatherPage;
