import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,  } from 'recharts';
import './Statistics.css';

const Statistics = () => {
    const data =[
        {"id":1,name:"React",total:8},
        {"id":2,name:"JavaScript",total:9},
        {"id":4,name:"CSS",total:8},
        {"id":5,name:"Git",total:11}
    ]
    return (
        <div className='cart'>
            
            <LineChart  width={500} height={400} data={data}>
        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <CartesianGrid></CartesianGrid>
        <Legend></Legend>
        </LineChart>
           
            
        </div>
    );
};

export default Statistics;