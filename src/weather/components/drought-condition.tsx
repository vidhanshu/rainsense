import React from 'react';
import Container from '@/src/common/components/container';
import Image from 'next/image';
import { IcDrought, IcWater } from '@/src/assets';
import { RESERVOIR_DATA } from '../utils/constants';
import { TCities } from './types';
import { Info } from 'lucide-react';
import InfoTooltip from '@/src/common/components/InfoTooltip';

function DroughtPreciction({ city }: { city: TCities }) {
    const percent = RESERVOIR_DATA[city].reservoir_level_percentage;
    return (
        <Container as="section">
            <p className="font-bold text-2xl md:text-4xl mt-10 mb-10">
                Drought Prediction
                <InfoTooltip
                    trigger={<Info className="w-4 h-4 text-black ml-4" />}
                >
                    <div>
                        <p>
                            <b>Extreme drought</b> ( &lt; 10%)
                        </p>
                        <p>
                            <b>Moderate drought</b> (10% - 20%)
                        </p>
                        <p>
                            <b>Mild drough</b> (20% - 40%)
                        </p>
                        <p>
                            <b>Normal </b> (40% - 60%)
                        </p>
                        <p>
                            <b>Surplus </b> (60% - 80%)
                        </p>
                        <p>
                            <b>Flood </b> (&gt; 80%)
                        </p>
                    </div>
                </InfoTooltip>
            </p>
            <div className="bg-black p-6 bg-no-repeat bg-cover rounded-lg">
                <div className="flex flex-col items-center justify-between">
                    <div className="text-white">
                        <Status percentage={percent} />
                    </div>
                    <div className="space-y-4"></div>
                </div>
            </div>
        </Container>
    );
}

export default DroughtPreciction;

function Status({ percentage }: { percentage: number }) {
    if (percentage < 10) {
        // Extream drought
        return (
            <div className="flex flex-col items-center gap-6 py-10">
                <Image src={IcDrought} height={80} width={80} alt="kjasf" />
                <h1 className="text-4xl">Extream drought</h1>
                <p className="text-xl text-center max-w-5xl">
                    There is a severe shortage of water for drinking,
                    sanitation, agriculture, and industry. The people may face
                    acute health risks, crop failures, livestock deaths, and
                    social unrest. The city may need to declare a state of
                    emergency and seek external assistance
                </p>
            </div>
        );
    } else if (percentage >= 10 && percentage <= 20) {
        // moderate drought
        return (
            <div className="flex flex-col items-center gap-6 py-10">
                <Image src={IcDrought} height={80} width={80} alt="kjasf" />
                <h1 className="text-4xl">moderate drought</h1>
                <p className="text-xl text-center max-w-5xl">
                    There is a significant decline in water availability and
                    quality. The people may face water rationing, increased
                    water tariffs, reduced hygiene, and lower agricultural
                    productivity. The city may need to implement water
                    conservation and harvesting measures and explore alternative
                    water sources
                </p>
            </div>
        );
    } else if (percentage > 20 && percentage <= 40) {
        // milld drought
        return (
            <div className="flex flex-col items-center gap-6 py-10">
                <Image src={IcDrought} height={80} width={80} alt="kjasf" />
                <h1 className="text-4xl">milld drought</h1>
                <p className="text-xl text-center max-w-5xl">
                    There is a slight decrease in water supply and demand. The
                    people may face occasional water shortages, higher water
                    bills, and some crop losses. The city may need to monitor
                    the water situation and promote water awareness and
                    efficiency
                </p>
            </div>
        );
    } else if (percentage > 40 && percentage <= 60) {
        // normal
        return (
            <div className="flex flex-col items-center gap-6 py-10">
                <Image src={IcDrought} height={80} width={80} alt="kjasf" />
                <h1 className="text-4xl">normal</h1>
                <p className="text-xl text-center max-w-5xl">
                    There is a balance between water availability and usage. The
                    people may have adequate access to safe and sufficient water
                    for their needs. The city may need to maintain the water
                    infrastructure and services and ensure water security and
                    sustainability
                </p>
            </div>
        );
    } else if (percentage > 60 && percentage <= 80) {
        // surplus
        return (
            <div className="flex flex-col items-center gap-6 py-10">
                <Image src={IcDrought} height={80} width={80} alt="kjasf" />
                <h1 className="text-4xl">surplus</h1>
                <p className="text-xl text-center max-w-5xl">
                    There is an excess of water supply over demand. The people
                    may have abundant and affordable water for their needs. The
                    city may need to store the excess water for future use and
                    prevent water wastage and pollution
                </p>
            </div>
        );
    } else {
        // flood
        return (
            <div className="flex flex-col items-center gap-6 py-10">
                <Image src={IcDrought} height={80} width={80} alt="kjasf" />
                <h1 className="text-4xl">flood</h1>
                <p className="text-xl text-center max-w-5xl">
                    There is an overflow of water beyond its normal limits. The
                    people may face risks of waterborne diseases, property
                    damage, displacement, and loss of life. The city may need to
                    evacuate the affected areas and provide relief and
                    rehabilitation
                </p>
            </div>
        );
    }
}
