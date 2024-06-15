import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const sleepData = [
    { day: 'Monday', hours: 7 },
    { day: 'Tuesday', hours: 6.5 },
    { day: 'Wednesday', hours: 8 },
    { day: 'Thursday', hours: 7.5 },
    { day: 'Friday', hours: 6 },
    { day: 'Saturday', hours: 9 },
    { day: 'Sunday', hours: 8 },
];

const SleepAreaChart = () => (
    <ResponsiveContainer width="95%" height={300}>
        <AreaChart data={sleepData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="hours" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
    </ResponsiveContainer>
);

export default SleepAreaChart;
