import React from "react";
import { Pie } from "react-chartjs-2";
import { LegendColor, LegendItem, LegendLabel, PieChartBind, PieChartName, PieChartSize } from "./stlyes/BookRentStatusChartStyle";


const TestChart = () => {
    const data = {
        labels: ['Red', 'Blue'],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
            ],
            hoverOffset: 4
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,  // 이 옵션을 추가합니다
        plugins: {
            legend: {
                position: 'bottom',
                display: false,  // 기본 범례를 숨깁니다
            },
            datalabels: {
                formatter: (value, ctx) => {
                    let sum = 0;
                    let dataArr = ctx.chart.data.datasets[0].data;
                    dataArr.map(data => {
                        sum += data;
                    });
                    let percentage = (value * 100 / sum).toFixed(2) + "%";
                    return percentage;
                },
                color: '#fff',
                font: {
                    weight: 'bold',
                    size: 15,
                }
            }
        }
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

export default TestChart;