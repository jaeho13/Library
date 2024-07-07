import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';


const data = [
    { name: '대여', value: 200 },
    { name: '미대여', value: 200 },
];

const COLORS = ['#43fa1e', '#25c7bf'];

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

const BookRentStatus = () => {
    return (
        <>
            <PieChartBind>
                <PieChartSize>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                startAngle={90} // 시작 각도
                                endAngle={-270} // 끝 각도
                                label={renderCustomizedLabel}
                            // outerRadius={80}
                            // fill="#8884d8"
                            // dataKey="value"
                            // style={{ border: '2px solid black' }}
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
                            // key={`legend-${index}`}
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

export default BookRentStatus;

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