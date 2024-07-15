import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const BookStatusChart = () => {

    const [art, artSet] = useState();

    const [humanities, humanitiesSet] = useState();

    const [trip, tripSet] = useState();

    const [science, scienceSet] = useState();

    const [essay, essaySet] = useState();

    const [economy, economySet] = useState();

    const [novel, novelSet] = useState();

    useEffect(() => {
        const loadBookGenre = async () => {
            try {
                const response = await axios.get('/chartGenreList');
                artSet(response.data.art);
                humanitiesSet(response.data.humanities);
                tripSet(response.data.trip);
                scienceSet(response.data.science);
                essaySet(response.data.essay);
                economySet(response.data.economy);
                novelSet(response.data.novel);
                console.log("분야 현황 데이터")
            } catch (error) {
                console.log("분야 현황 데이터 안 들어왔다");
            }
        }
        loadBookGenre();
    }, [])

    const data = [
        {
            name: '예술',
            value: art
        },
        {
            name: '인문',
            value: humanities
        },
        {
            name: '여행',
            value: trip
        },
        {
            name: '과학',
            value: science
        },
        {
            name: '에세이',
            value: essay
        },
        {
            name: '경제',
            value: economy
        },
        {
            name: '소설',
            value: novel
        },
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

export default BookStatusChart;

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