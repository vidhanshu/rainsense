'use client';

import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Container from '@/src/common/components/container';
import { TCities } from './types';
import { RESERVOIR_DATA } from '../utils/constants';

type TWaterResourceManagementProps = {
    citySelected: TCities;
};
const WaterResourceManagement = ({
    citySelected,
}: TWaterResourceManagementProps) => {
    const data = RESERVOIR_DATA[citySelected];

    return (
        <Container>
            <div className="bg-black p-6 bg-no-repeat bg-cover rounded-lg">
                <div className="flex items-center justify-between">
                    <h1 className="text-white font-semibold text-3xl">
                        The reservoir <br />
                        statistics for {citySelected}
                    </h1>
                    <div>
                        <h1 className="text-6xl font-medium text-white">
                            {(data.water_amount_liters / 1e6).toFixed(1)}{' '}
                            million lit.
                        </h1>
                    </div>
                    <div className="space-y-4 w-[150px]">
                        <CircularProgressbar
                            strokeWidth={4}
                            text={`${data.reservoir_level_percentage}%`}
                            value={data.reservoir_level_percentage}
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default WaterResourceManagement;
