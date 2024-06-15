import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const studyData = [
    { day: 'Monday', hours: 2 },
    { day: 'Tuesday', hours: 3 },
    { day: 'Wednesday', hours: 1.5 },
    { day: 'Thursday', hours: 2.5 },
    { day: 'Friday', hours: 2 },
    { day: 'Saturday', hours: 4 },
    { day: 'Sunday', hours: 3.5 },
];

const StudyLineChart = () => (
    <ResponsiveContainer width="95%" height={300}>
        <LineChart data={studyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="hours" stroke="#82ca9d" />
        </LineChart>
    </ResponsiveContainer>
);

export default StudyLineChart;
