import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';


const data = [
    { name: '인문,사회', value: 400 },
    { name: '에세이', value: 300 },
    { name: '과학', value: 300 },
    { name: '예술', value: 200 },
    { name: '경제', value: 200 },
    { name: '여행', value: 200 },
    { name: '소설', value: 200 },
];

const COLORS = ['#0088FE', '#FF8042', '#FFBB28', '#C5BCA9', '#E63030', '#1cdf84', '#942aeb'];

const RADIAN = Math.PI / 180;


const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x} y={y}
            textAnchor="middle"
            dominantBaseline="central"
            style={{ fontSize: '16px', fontWeight: 'bold' }}
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const BookStatusPieChart = () => {
    return (
        <>
            <PieChartBind>
                <PieChartSize>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                            // outerRadius={80}
                            // fill="#8884d8"
                            // dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </PieChartSize>

                <PieChartName>
                    {data.map((entry, index) => (
                        <div
                            key={`legend-${index}`}
                            style={{
                                color: COLORS[index % COLORS.length],
                                fontWeight: 'bold'
                            }}>
                            {`${entry.name}`}
                        </div>
                    ))}
                </PieChartName>
            </PieChartBind>


        </>
    )
}

export default BookStatusPieChart;

const PieChartBind = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-right: 2px solid black;
`

const PieChartSize = styled.div`
    width: 100%;
    height: 30vh;
    /* border: 2px solid red; */
`

const PieChartName = styled.div`
    width: 100%;
    height: 10vh;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`