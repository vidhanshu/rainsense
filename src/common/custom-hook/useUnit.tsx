'use client';

import { useSearchParams } from 'next/navigation';

const useUnit = () => {
    const searchParams = useSearchParams();
    const unit = searchParams.get('unit');

    const checked = unit === 'c' || !unit;
    if (checked) {
        return {
            checked,
            unit: 'c',
            label: '°C',
            fullUnit: 'celsius',
        };
    }
    return {
        checked,
        unit: 'f',
        label: '°F',
        fullUnit: 'fahrenheit',
    };
};

export default useUnit;
