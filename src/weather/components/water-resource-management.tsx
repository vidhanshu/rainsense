'use client';

import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Container from '@/src/common/components/container';
import { TCities } from './types';
import { RESERVOIR_DATA } from '../utils/constants';
import ReservoirGraph from './reservoir-graph';

type TWaterResourceManagementProps = {
    citySelected: TCities;
};
const WaterResourceManagement = ({
    citySelected,
}: TWaterResourceManagementProps) => {
    const data = RESERVOIR_DATA[citySelected];

    return (
        <Container>
            <p className="font-bold text-2xl md:text-4xl mt-10 mb-10">{`Reservoir Water Level`}</p>
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
                            styles={buildStyles({
                                // Rotation of path and trail, in number of turns (0-1)
                                rotation: 0.25,

                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                strokeLinecap: 'butt',

                                // Text size
                                textSize: '16px',

                                // How long animation takes to go from one percentage to another, in seconds
                                pathTransitionDuration: 0.5,

                                // Can specify path transition in more detail, or remove it entirely
                                // pathTransition: 'none',

                                // Colors
                                pathColor: data.reservoir_level_percentage <= 30 ? "red" : data.reservoir_level_percentage <= 60 ? "yellow" : "green",
                                textColor: '#ffff',
                                trailColor: '#ffff',
                                backgroundColor: '#007FFF',
                            })}
                            text={`${data.reservoir_level_percentage}%`}
                            value={data.reservoir_level_percentage}
                        />
                    </div>
                </div>
            </div>
            <ReservoirGraph/>
        </Container >
    );
};

export default WaterResourceManagement;
