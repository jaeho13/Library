import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import axios from 'axios';
import { PieChartBind, BarChartSize, UserTotalCnt } from './stlyes/UserAgeChartStyle';

const UserAgeChart = () => {

    const [userCnt, setUserCnt] = useState();

    const [chartData, setChartData] = useState({
        labels: ['10대', '20대', '30대', '40대', '50대', '60대'],
        datasets: [
            {
                label: '',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 2,
            },
        ],
    });

    useEffect(() => {
        const loadUserAge = async () => {
            try {
                const response = await axios.get('/user/chartUserAge');
                const ageData = response.data.age;
                setUserCnt(response.data.userCnt)
                updateChartData(ageData);
                console.log("유저 나이 데이터 들어왔다");
            } catch (error) {
                console.log("유저 나이 데이터 안 들어왔다");
            }
        };
        loadUserAge();
    }, [])

    const updateChartData = (ageData) => {
        setChartData(prevChartData => ({
            ...prevChartData,
            datasets: [{
                ...prevChartData.datasets[0],
                data: ageData,
            }],
        }));
    };

    const options = {
        plugins: {
            legend: {
                display: false, // 레전드 숨기기
            }
        },
        scales: {
            y: {
                ticks: {
                    callback: function (value) {
                        return Number.isInteger(value) ? value : ''; // 정수일 때만 표시하고, 아닐 경우 빈 문자열 반환
                    }
                }
            }
        }
    };

    return (
        <>
            <PieChartBind>
                <BarChartSize>
                    <Bar
                        data={chartData}
                        options={options}
                    />
                </BarChartSize>

                <UserTotalCnt>
                    전체 회원 수 : {userCnt}
                </UserTotalCnt>
            </PieChartBind>
        </>
    );
};

export default UserAgeChart;