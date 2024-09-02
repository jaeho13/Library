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

    const data = {
        labels: ['예술', '인문', '여행', '과학', '에세이', '경제', '소설'],
        datasets: [{
            data: [art, humanities, trip, science, essay, economy, novel],
            backgroundColor: [
                '#ADE1E5',
                '#99D19C',
                '#BBCE8A',
                '#FFDA76',
                '#E5BE9E',
                '#5B99C2',
                '#949BA0',
            ],
            hoverOffset: 4
        }]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
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