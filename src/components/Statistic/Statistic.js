import React from 'react';

import { useLoaderData } from "react-router-dom";

import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
const Statistic = () => {
    const statistics = useLoaderData();
    console.log(statistics);
    const data = [
        {
            name: statistics.data[0].name,
            uv: statistics.data[0].total,
            pv: 117,
            amt: 120,
        },
        {
            name: statistics.data[1].name,
            uv: statistics.data[1].total,
            pv: 117,
            amt: 120,
        },
        {
            name: statistics.data[2].name,
            uv: statistics.data[2].total,
            pv: 117,
            amt: 120,
        },
        {
            name: statistics.data[3].name,
            uv: statistics.data[3].total,
            pv: 117,
            amt: 120,
        },
    ];
    return (
        <div>
            <h1 className="text-3xl text-center ">Lets check  Our Total Quiz</h1>
            <div className="flex justify-center items-center mt-14">
                <LineChart width={500} height={400} data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    <XAxis dataKey="name"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
        </div>
    );
};

export default Statistic;