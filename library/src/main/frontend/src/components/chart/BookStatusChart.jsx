import React, { useEffect, useState } from 'react';
import { Pie } from "react-chartjs-2";
import axios from 'axios';
import { PieChartBind, PieChartSize, PieChartName, LegendItem, LegendColor, LegendLabel } from './stlyes/BookStatusChartStyles';

const BookStatusChart = () => {

    const [art, setArt] = useState();

    const [humanities, setHumanities] = useState();

    const [trip, setTrip] = useState();

    const [science, SetScience] = useState();

    const [essay, SetEssay] = useState();

    const [economy, SetEconomy] = useState();

    const [novel, SetNovel] = useState();

    useEffect(() => {
        const loadBookGenre = async () => {
            try {
                const response = await axios.get('/book/chartGenreList');
                setArt(response.data.art);
                setHumanities(response.data.humanities);
                setTrip(response.data.trip);
                SetScience(response.data.science);
                SetEssay(response.data.essay);
                SetEconomy(response.data.economy);
                SetNovel(response.data.novel);
                console.log("분야 현황 데이터")
            } catch (error) {
                console.log("분야 현황 데이터 안 들어왔다");
            }
        }
        loadBookGenre();
    }, [])

    // const data = [
    //     {
    //         name: '예술',
    //         value: art
    //     },
    //     {
    //         name: '인문',
    //         value: humanities
    //     },
    //     {
    //         name: '여행',
    //         value: trip
    //     },
    //     {
    //         name: '과학',
    //         value: science
    //     },
    //     {
    //         name: '에세이',
    //         value: essay
    //     },
    //     {
    //         name: '경제',
    //         value: economy
    //     },
    //     {
    //         name: '소설',
    //         value: novel
    //     },
    // ];

    const data = {
        labels: ['예술', '인문', '여행', '과학', '에세이', '경제', '소설'],
        datasets: [{
            data: [art, humanities, trip, science, essay, economy, novel],
            backgroundColor: [
                '#0088FE',
                '#FF8042',
                '#FFBB28',
                '#C5BCA9',
                '#E63030',
                '#1cdf84',
                '#942aeb',
            ],
            hoverOffset: 4
        }]
    }

    // const COLORS = ['#0088FE', '#FF8042', '#FFBB28', '#C5BCA9', '#E63030', '#1cdf84', '#942aeb'];

    // const RADIAN = Math.PI / 180;


    // const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    //     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    //     const x = cx + radius * Math.cos(-midAngle * RADIAN);
    //     const y = cy + radius * Math.sin(-midAngle * RADIAN);

    //     return (
    //         <text
    //             x={x} y={y}
    //             textAnchor="middle"
    //             dominantBaseline="central"
    //             style={{ fontSize: '16px', fontWeight: 'bold' }}
    //         >
    //             {`${(percent * 100).toFixed(0)}%`}
    //         </text>
    //     );
    // };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                formatter: (value, ctx) => {
                    let sum = 0;
                    let dataArr = ctx.chart.data.datasets[0].data;
                    dataArr.map(data => {
                        sum += data;
                    });
                    let percentage = (value * 100 / sum).toFixed(0) + "%";
                    return percentage;
                },
                color: '#fff',
                font: {
                    weight: 'bold',
                    size: 16,
                }
            }
        },
    };


    return (
        <>
            <PieChartBind>
                <PieChartSize>
                    <Pie data={data} options={options} />
                </PieChartSize>

                <PieChartName>
                    {data.labels.map((label, index) => (
                        <LegendItem key={index}>
                            <LegendColor color={data.datasets[0].backgroundColor[index]} />
                            <LegendLabel>{label}</LegendLabel>
                        </LegendItem>
                    ))}
                </PieChartName>
            </PieChartBind>


        </>
    )
}

export default BookStatusChart;