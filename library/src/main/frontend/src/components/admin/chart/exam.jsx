import axios from "axios";
import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";

const Exam = () => {

    const [rentCnt, setRentCnt] = useState();

    const [bookCnt, setBookCnt] = useState();

    axios.get('/chartRentList')
        .then(function (Response) {
            setRentCnt(Response.data.rentCnt);
            setBookCnt(Response.data.bookCnt);
            console.log("대여 현황 데이터 들어왔다");
        })
        .catch(function (error) {
            console.log("대여 현황 데이터 안 들어왔다");
        })


    const data = {
        labels: [
            '대여',
            '미대여'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [rentCnt, bookCnt],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)'
            ],
            hoverOffset: 4
        }]
    };

    return (
        <>
            <BarChartSize>
                <Pie
                    data={data}
                />
            </BarChartSize>
        </>
    )
}

export default Exam;

const BarChartSize = styled.div`
    width: 100%;
    /* height: 30vh; */
    border: 2px solid red;
`
