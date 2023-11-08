import { TCities } from '@/src/weather/components/types';
import { LATLONG_OF_CITIES } from '@/src/weather/utils/constants';

export const constructApiUrl = (
    params: { [key: string]: string },
    city: TCities,
    unit: string
) => {
    const { lat, long } = LATLONG_OF_CITIES[city] ?? {};
    const stringPrams = Object.keys(params)
        .map((key) => `${key}=${params[key]}`)
        .join('&');
    return `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&${stringPrams}&temperature_unit=${unit}`;
};
