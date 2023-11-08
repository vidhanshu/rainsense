'use client';

import React, { useState } from 'react';

import StateInteractiveMap from './state-interactive-map';
import { TCities } from './types';

const WeatherPage = () => {
    const [selected, setSelected] = useState<TCities>('Nagpur');

    const handleChangeSelected = (newSelected: TCities) => {
        setSelected(newSelected);
    };

    return (
        <div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-2xl font-bold text-center'>Select City</h1>
                <StateInteractiveMap
                    selected={selected}
                    handleChangeSelected={handleChangeSelected}
                />
            </div>
        </div>
    );
};

export default WeatherPage;
