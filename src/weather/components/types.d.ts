export type TCities =
    | 'Akola'
    | 'Washim'
    | 'Nandurbar'
    | 'Dhule'
    | 'Jalgaon'
    | 'Buldhana'
    | 'Amravati'
    | 'Wardha'
    | 'Gondia'
    | 'Bhandara'
    | 'Nagpur'
    | 'Chandrapur'
    | 'Gadchiroli'
    | 'Yavatmal'
    | 'Nanded'
    | 'Hingoli'
    | 'Parbhani'
    | 'Jalna'
    | 'Aurangabad'
    | 'Nashik'
    | 'Thane'
    | 'Mumbai'
    | 'Raigad'
    | 'Ratnagiri'
    | 'Sindhudurg'
    | 'Satara'
    | 'Sangli'
    | 'Kolhapur'
    | 'Solapur'
    | 'Latur'
    | 'Osmanabad'
    | 'Beed'
    | 'Ahmednagar'
    | 'Pune'
    | 'Palghar'
    | 'Usmanabad';

export type TTodaysPrecition = {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_units: {
        time: string;
        interval: string;
        temperature_2m: string;
        wind_speed_10m: string;
        rain: string;
    };
    current: {
        time: string;
        interval: number;
        temperature_2m: number;
        wind_speed_10m: number;
        rain: number;
        relative_humidity_2m: number;
    };
};
