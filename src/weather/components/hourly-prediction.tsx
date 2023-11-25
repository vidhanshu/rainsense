'use client';

import React from 'react';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import Container from '@/src/common/components/container';
import useUnit from '@/src/common/custom-hook/useUnit';
import useFetch from '@/src/common/custom-hook/useFetch';
import { constructApiUrl } from '@/src/common/utils/construct-api-url';
import { TCities, TDaySelected, THourlyPrediction } from './types';
import RainTemperatureGraph from './rain-temperature-graph';
import { IcRain, IcSun, IcSunOrange } from '@/src/assets';
import Image from 'next/image';


type THourlyPredictionProps = {
    citySelected: TCities;
    daySelected: TDaySelected;
};
const HourlyPrediction = ({
    citySelected,
    daySelected,
}: THourlyPredictionProps) => {
    const { label, fullUnit, unit } = useUnit();

    const { loading, data } = useFetch<THourlyPrediction>({
        url: constructApiUrl(
            {
                hourly: 'temperature_2m,relative_humidity_2m,rain,wind_speed_10m,temperature_80m',
                temperature_unit: fullUnit,
            },
            citySelected,
            fullUnit
        ),
        dependencies: [unit, citySelected],
    });

    const updatedHourly: {
        time: string;
        temperature_2m: number;
        relative_humidity_2m: number;
        rain: number;
        wind_speed_10m: number;
        temperature_80m: number;
    }[] = [];

    for (let i = 0; i < 168; i++) {
        updatedHourly.push({
            time: data?.hourly?.time[i]!,
            temperature_2m: data?.hourly?.temperature_2m[i]!,
            relative_humidity_2m: data?.hourly?.relative_humidity_2m[i]!,
            rain: data?.hourly?.rain[i]!,
            wind_speed_10m: data?.hourly?.wind_speed_10m[i]!,
            temperature_80m: data?.hourly?.temperature_80m[i]!,
        });
    }

    const updatedData = { ...data, hourly: { data: updatedHourly } };

    if (loading) {
        return (
            <Container className="my-6 space-y-2">
                <div className="h-[40px] animate-pulse delay-0 bg-gray-300 rounded-lg" />
                <div className="h-[40px] animate-pulse delay-75 bg-gray-300 rounded-lg" />
                <div className="h-[40px] animate-pulse delay-150 bg-gray-300 rounded-lg" />
                <div className="h-[40px] animate-pulse delay-300 bg-gray-300 rounded-lg" />
                <div className="h-[40px] animate-pulse delay-500 bg-gray-300 rounded-lg" />
            </Container>
        );
    }

    const strip = [24 * daySelected.idx, 24 * (daySelected.idx + 1)];
    console.log(updatedData)
    return (
        <Container>
            <h1 className="text-xl font-bold mb-4">
                Hourly Weather prediction: {daySelected.day}, {daySelected.date}
            </h1>
            <Table className="text-lg">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Parameters</TableHead>
                        {data?.hourly?.time
                            ?.slice(strip[0], strip[1])
                            .map((time) => (
                                <TableCell key={time} className="font-medium">
                                    {time.split('T')[1]}
                                </TableCell>
                            ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Rain</TableCell>
                        {updatedData.hourly.data
                            .slice(strip[0], strip[1])
                            .map((d, idx) => (
                                <TableCell key={idx}>
                                    {d.rain === 0 ?
                                        <Image width={28} height={28} src={IcSunOrange} alt="" />
                                        :
                                        <Image width={28} height={28} src={IcRain} alt="" />
                                    }

                                </TableCell>
                            ))}
                    </TableRow>
                    <TableRow>
                        <TableCell>Temperature({label})</TableCell>
                        {updatedData.hourly.data
                            .slice(strip[0], strip[1])
                            .map((d, idx) => (
                                <TableCell key={idx}>
                                    {d.temperature_2m}
                                </TableCell>
                            ))}
                    </TableRow>
                    <TableRow>
                        <TableCell>Humidity(%)</TableCell>
                        {updatedData.hourly.data
                            .slice(strip[0], strip[1])
                            .map((d, idx) => (
                                <TableCell key={idx}>
                                    {d.relative_humidity_2m}
                                </TableCell>
                            ))}
                    </TableRow>
                    <TableRow>
                        <TableCell>Wind speed(km/h)</TableCell>
                        {updatedData.hourly.data
                            .slice(strip[0], strip[1])
                            .map((d, idx) => (
                                <TableCell key={idx}>
                                    {d.wind_speed_10m}
                                </TableCell>
                            ))}
                    </TableRow>
                </TableBody>
            </Table>
            <RainTemperatureGraph
                data={{
                    temperature:
                        data?.hourly?.temperature_80m?.slice(
                            strip[0],
                            strip[1]
                        ) || [],
                    rain: data?.hourly?.rain?.slice(strip[0], strip[1]) || [],
                    relative_humidity_2m:
                        data?.hourly?.relative_humidity_2m?.slice(
                            strip[0],
                            strip[1]
                        ) || [],
                    windSpeed:
                        data?.hourly?.wind_speed_10m?.slice(
                            strip[0],
                            strip[1]
                        ) || [],
                }}
            />
        </Container>
    );
};

export default HourlyPrediction;
