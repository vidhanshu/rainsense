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

export type TDaySelected = {
    day: string;
    date: string;
    idx: number;
};

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

export type THourlyPrediction = {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    hourly_units: {
        time: string;
        temperature_2m: string;
        relative_humidity_2m: string;
        rain: string;
        wind_speed_10m: string;
        temperature_80m: string;
    };
    hourly: {
        time: string[];
        temperature_2m: number[];
        relative_humidity_2m: number[];
        rain: number[];
        wind_speed_10m: number[];
        temperature_80m: number[];
    };
};
// export type TUpdatedHourlyPrediction = {
//     latitude: number;
//     longitude: number;
//     generationtime_ms: number;
//     utc_offset_seconds: number;
//     timezone: string;
//     timezone_abbreviation: string;
//     elevation: number;
//     hourly_units: {
//         time: string;
//         temperature_2m: string;
//         relative_humidity_2m: string;
//         rain: string;
//         wind_speed_10m: string;
//         temperature_80m: string;
//     };
//     hourly: {
//         data: {
//             time: string;
//             temperature_2m: number;
//             relative_humidity_2m: number;
//             rain: number;
//             wind_speed_10m: number;
//             temperature_80m: number;
//         }[];
//     };
// };
