import React from 'react';
import { ComposedChart, Line, Bar, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const combinedData = [
    { day: 'Monday', steps: 7, study: 2, sleep: 7 },
    { day: 'Tuesday', steps: 8, study: 3, sleep: 6.5 },
    { day: 'Wednesday', steps: 7, study: 1.5, sleep: 8 },
    { day: 'Thursday', steps: 9, study: 2.5, sleep: 7.5 },
    { day: 'Friday', steps: 6.5, study: 2, sleep: 6 },
    { day: 'Saturday', steps: 10, study: 4, sleep: 9 },
    { day: 'Sunday', steps: 12, study: 3.5, sleep: 8 },
];

const CombinedChart = () => (
    <ResponsiveContainer width="95%" height={400}>
        <ComposedChart data={combinedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="steps" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="study" stroke="#ff7300" />
            <Area type="monotone" dataKey="sleep" fill="#8884d8" stroke="#8884d8" />
        </ComposedChart>
    </ResponsiveContainer>
);

export default CombinedChart;
