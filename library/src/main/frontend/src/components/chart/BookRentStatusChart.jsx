import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import { LegendColor, LegendItem, LegendLabel, PieChartBind, PieChartName, PieChartSize } from "./stlyes/BookRentStatusChartStyle";

const BookRentStatusChart = () => {
    const [rentCnt, setRentCnt] = useState(0);
    const [bookCnt, setBookCnt] = useState(0);

    useEffect(() => {
        const loadBookStatus = async () => {
            try {
                const response = await axios.get('/book/chartRentList');
                setRentCnt(response.data.rentCnt);
                setBookCnt(response.data.bookCnt);
                console.log("대여 현황 데이터 들어왔다");
            } catch (error) {
                console.log("대여 현황 데이터 안 들어왔다");
            }
        };
        loadBookStatus();
    }, []);

    const data = {
        labels: ['대여', '미대여'],
        datasets: [{
            data: [rentCnt, bookCnt],
            backgroundColor: [
                '#77E4C8',
                '#a0b3f8',
            ],
            hoverOffset: 4
        }]
    };

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
    )
}

export default BookRentStatusChart;