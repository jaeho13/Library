import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import styled from 'styled-components';
import axios from 'axios';

const UserAgeChart = () => {

    const [userCnt, setUserCnt] = useState();


    const [chartData, setChartData] = useState({
        labels: ['10대', '20대', '30대', '40대', '50대', '60대'],
        datasets: [
            {
                label: '',
                data: [], // 초기 데이터는 비어있는 배열로 설정
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
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
        fetchData();
    }, []); // 컴포넌트가 마운트될 때 한 번만 호출

    const fetchData = async () => {
        try {
            const response = await axios.get('/chartUserAge');
            const ageData = response.data.age[0]; // 서버에서 받은 데이터의 첫 번째 배열 사용
            setUserCnt(response.data.userCnt)
            updateChartData(ageData);
        } catch (error) {
            console.error('회원 연령대 데이터를 가져오는 중 오류 발생:', error);
        }
    };

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

const PieChartBind = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const BarChartSize = styled.div`
    width: 100%;
    /* border: 2px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
`;

const UserTotalCnt = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;

`