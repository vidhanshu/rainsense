import React from 'react'
import Container from '@/src/common/components/container';
import Image from 'next/image';
import { IcDrought, IcWater } from '@/src/assets';
import ReservoirGraph from './reservoir-graph';
import { RESERVOIR_DATA } from '../utils/constants';
import { TCities } from './types';

function DroughtPreciction({ city }: { city: TCities }) {
    const percent = RESERVOIR_DATA[city].reservoir_level_percentage
    return (
        <Container as='section'>
            <p className="font-bold text-2xl md:text-4xl mt-10 mb-10">{`Drought Prediction`}</p>
            <div className="bg-black p-6 bg-no-repeat bg-cover rounded-lg">
                <div className="flex flex-col items-center justify-between">

                    <div className='text-white'>
                        <Status percentage={63} />
                    </div>
                    <div className="space-y-4">

                    </div>
                </div>
            </div>
        </Container>
    )
}

export default DroughtPreciction


function Status({ percentage }: { percentage: number }) {
    if (percentage < 40) {
        return (
            <div className='flex flex-col items-center gap-6 py-10'>
                <Image src={IcDrought} height={80} width={80} alt="kjasf" />
                <p className='text-xl'>Dought condition might occur soon</p>
            </div>
        )
    }
    if (percentage > 40) {
        return (
            <div className='flex flex-col items-center gap-6 py-10'>
                <Image src={IcWater} height={80} width={80} alt="kjasf" />
                <p className='text-xl'>Good Amount of Water Resource i available in the city</p>
            </div>
        )
    }
}

