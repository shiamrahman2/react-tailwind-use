import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
const students = [
  { name: "Rahim", physics: 85, chemistry: 90, math: 95 },
  { name: "Karim", physics: 75, chemistry: 80, math: 70 },
  { name: "Anika", physics: 92, chemistry: 88, math: 91 },
  { name: "Nusrat", physics: 68, chemistry: 74, math: 72 },
  { name: "Sakib", physics: 89, chemistry: 85, math: 80 },
  { name: "Mehedi", physics: 95, chemistry: 90, math: 93 },
  { name: "Shima", physics: 70, chemistry: 78, math: 65 },
  { name: "Tanvir", physics: 88, chemistry: 82, math: 86 },
  { name: "Rafi", physics: 60, chemistry: 65, math: 70 },
  { name: "Joya", physics: 98, chemistry: 94, math: 96 }
];

const ResultChart = () => {
    return (
        <div className='mt-20 ml-50'>
            <LineChart width={600} height={400} data={students}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="physics" stroke='red' strokeWidth={1}></Line>
                 <Line dataKey="chemistry" stroke='blue' strokeWidth={2}></Line>
                 <Line dataKey="math" stroke='orange' strokeWidth={3}></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;