import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

import { THourlyPrediction } from './types';

ChartJS.register(...registerables);

type TRainTemperatureGraphProps = {
    data: {
        temperature: THourlyPrediction['hourly']['temperature_80m'];
        rain: THourlyPrediction['hourly']['rain'];
        relative_humidity_2m: number[];
        windSpeed: number[];
    };
};
const RainTemperatureGraph = ({ data }: TRainTemperatureGraphProps) => {
    return (
        <div className="py-8">
            <h1 className="text-xl font-bold mb-4">
                Line graph
            </h1>
            <Line
                data={{
                    datasets: [
                        {
                            label: 'Temperature',
                            data: data.temperature,
                        },
                        {
                            label: 'Rain',
                            data: data.rain,
                        },
                        {
                            label: 'Humidity',
                            data: data.relative_humidity_2m,
                        },
                        {
                            label: 'Wind Speed',
                            data: data.windSpeed,
                        },
                    ],
                    labels: [
                        '00:00',
                        '01:00',
                        '02:00',
                        '03:00',
                        '04:00',
                        '05:00',
                        '06:00',
                        '07:00',
                        '08:00',
                        '09:00',
                        '10:00',
                        '11:00',
                        '12:00',
                        '13:00',
                        '14:00',
                        '15:00',
                        '16:00',
                        '17:00',
                        '18:00',
                        '19:00',
                        '20:00',
                        '21:00',
                        '22:00',
                        '23:00',
                    ],
                }}
            />
        </div>
    );
};

export default RainTemperatureGraph;
