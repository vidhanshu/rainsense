import React from 'react';

import { cn } from '@/lib/utils';
import Container from '@/src/common/components/container';
import { DAYS } from '@/src/weather/utils/constants';
import { TDaySelected } from './types';

type TDayTabsProps = {
    daySelected: TDaySelected;
    handleDaySelected: (day: TDaySelected) => void;
};

const DayTabs = ({ daySelected, handleDaySelected }: TDayTabsProps) => {
    let next7Days = [];
    for (let i = 0; i < 7; i++) {
        next7Days.push(DAYS[(new Date().getDay() + i) % 7]);
    }

    return (
        <Container as="section">
            <Container>
                <p className="font-bold text-2xl md:text-2xl mt-10 ">Weekly Forecast</p>
            </Container>
            <ul className="shadow-md border rounded-lg p-4 flex items-center gap-4 flex-wrap">
                <li
                    onClick={() =>
                        handleDaySelected({
                            day: 'Today',
                            date: new Date().toISOString().split('T')[0],
                            idx: 0,
                        })
                    }
                    className={cn(
                        'px-4 py-2 border rounded-md text-center min-w-[150px] cursor-pointer',
                        daySelected.day === 'Today'
                            ? 'bg-black text-white hover:bg-black/90'
                            : 'hover:bg-gray-50'
                    )}
                >
                    <span>Today</span>
                </li>
                {next7Days.map((day, i) => (
                    <li
                        onClick={() =>
                            handleDaySelected({
                                day,
                                date: new Date(
                                    new Date().getTime() + 86400000 * (i + 1)
                                )
                                    .toISOString()
                                    .split('T')[0],
                                idx: i,
                            })
                        }
                        key={day}
                        className={cn(
                            'px-4 py-2 border rounded-md text-center min-w-[110px] cursor-pointer',
                            daySelected.day === day
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
