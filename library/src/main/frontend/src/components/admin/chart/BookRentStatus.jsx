import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const BookRentStatus = () => {

    const [rentCnt, setRentCnt] = useState();

    const [bookCnt, setBookCnt] = useState();

    useEffect(() => {
        const loadBookStatus = async () => {
            try {
                const response = await axios.get('/chartRentList');
                setRentCnt(response.data.rentCnt);
                setBookCnt(response.data.bookCnt);
                console.log("대여 현황 데이터 들어왔다");
            } catch (error) {
                console.log("대여 현황 데이터 안 들어왔다");
            }
        };
        loadBookStatus();
    }, []);

    const data = [
        {
            name: '대여',
            value: rentCnt
        },
        {
            name: '미대여',
            value: bookCnt
        },
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
    width: 33%;
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