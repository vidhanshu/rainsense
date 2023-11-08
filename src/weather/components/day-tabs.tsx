import React from 'react';

import { cn } from '@/lib/utils';
import Container from '@/src/common/components/container';
import { DAYS } from '@/src/weather/utils/constants';

type TDayTabsProps = {
    daySelected: string;
    handleDaySelected: (day: string) => void;
};

const DayTabs = ({ daySelected, handleDaySelected }: TDayTabsProps) => {
    let next7Days = [];
    for (let i = 0; i < 7; i++) {
        next7Days.push(DAYS[(new Date().getDay() + i) % 7]);
    }

    return (
        <Container as="section">
            <ul className="shadow-md border rounded-lg p-4 flex items-center gap-4 flex-wrap">
                <li
                    onClick={() => handleDaySelected('Today')}
                    className={cn(
                        'px-4 py-2 border rounded-md text-center min-w-[150px] cursor-pointer',
                        daySelected === 'Today'
                            ? 'bg-black text-white hover:bg-black/90'
                            : 'hover:bg-gray-50'
                    )}
                >
                    <span>Today</span>
                </li>
                {next7Days.map((day) => (
                    <li
                        onClick={() => handleDaySelected(day)}
                        key={day}
                        className={cn(
                            'px-4 py-2 border rounded-md text-center min-w-[110px] cursor-pointer',
                            daySelected === day
                                ? 'bg-black text-white hover:bg-black/90'
                                : 'hover:bg-gray-50'
                        )}
                    >
                        <span>{day}</span>
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export default DayTabs;
