import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';


const data = [
    { name: '철학', value: 400 },
    { name: '과학', value: 300 },
    { name: '예술', value: 300 },
    { name: '역사', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;


const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const BookStatusPieChart = () => {
    return (
        <>
            <PieChartSize>

                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                <PieChartName>
                    {data.map((entry, index) => (
                        <div key={`legend-${index}`} style={{ color: COLORS[index % COLORS.length], margin: '20px 0' }}>
                            {`${entry.name}`}
                        </div>
                    ))}
                </PieChartName>
            </PieChartSize>

        </>
    )
}


export default BookStatusPieChart;

const PieChartSize = styled.div`
    width: 100%;
    /* height: 30vh; */
    border: 2px solid red;
`

const PieChartName = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`