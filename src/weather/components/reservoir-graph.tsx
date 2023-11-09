import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js';
import { RESERVOIR_DATA } from '../utils/constants';


ChartJS.register(...registerables);


function ReservoirGraph() {

    const waterAmountLitersArray = Object.values(RESERVOIR_DATA).map(cityData => cityData.water_amount_liters);

    console.log(waterAmountLitersArray);

    return (
        <div className="py-8">
            <h1 className="text-xl font-bold mb-4">
                Line graph
            </h1>
            <Line
                data={{
                    datasets: [
                        {
                            label: 'Amount (milion Litre)',
                            data: waterAmountLitersArray,
                        },
                    ],
                    labels: [
                        'Akola',
                        'Washim',
                        'Nandurbar',
                        'Dhule',
                        'Jalgaon',
                        'Buldhana',
                        'Amravati',
                        'Wardha',
                        'Gondia',
                        'Bhandara',
                        'Nagpur',
                        'Chandrapur',
                        'Gadchiroli',
                        'Yavatmal',
                        'Nanded',
                        'Hingoli',
                        'Parbhani',
                        'Jalna',
                        'Aurangabad',
                        'Nashik',
                        'Thane',
                        'Mumbai',
                        'Raigad',
                        'Ratnagiri',
                        'Sindhudurg',
                        'Satara',
                        'Sangli',
                        'Kolhapur',
                        'Solapur',
                        'Latur',
                        'Osmanabad',
                        'Beed',
                        'Ahmednagar',
                        'Pune',
                        'Palghar',
                        'Usmanabad'
                    ],
                }}
            />
        </div>
    )
}

export default ReservoirGraph