import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const stepData = [
    { day: 'Monday', steps: 7000 },
    { day: 'Tuesday', steps: 8000 },
    { day: 'Wednesday', steps: 7500 },
    { day: 'Thursday', steps: 9000 },
    { day: 'Friday', steps: 6500 },
    { day: 'Saturday', steps: 10000 },
    { day: 'Sunday', steps: 12000 },
];

const StepsBarChart = () => (
    <ResponsiveContainer width="95%" height={300}>
        <BarChart data={stepData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="steps" fill="#8884d8" />
        </BarChart>
    </ResponsiveContainer>
);

export default StepsBarChart;
