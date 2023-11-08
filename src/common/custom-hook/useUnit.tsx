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
        };
    }
    return {
        checked,
        unit: 'f',
    };
};

export default useUnit;
