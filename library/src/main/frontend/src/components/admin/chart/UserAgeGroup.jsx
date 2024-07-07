import React from 'react';
import {
    BarChart, Bar,
    XAxis, YAxis,
    CartesianGrid, Tooltip,
    Legend, ResponsiveContainer
} from 'recharts';
import styled from 'styled-components';

const data = [
    {
        name: "부서 1",
        num: 5
    },
    {
        name: "부서 2",
        num: 3
    },
    {
        name: "부서 3",
        num: 1
    },
    {
        name: "부서 4",
        num: 2
    }
    ,
    {
        name: "부서 5",
        num: 4
    },
    {
        name: "부서 6",
        num: 2
    }
];
const UserAgeGroup = () => {
    return (
        <BarChartSize>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <Bar dataKey="num" fill="#8884d8" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis />
                </BarChart>
            </ResponsiveContainer>
        </BarChartSize>
    );
}

export default UserAgeGroup;

const BarChartSize = styled.div`
    width: 100%;
    /* height: 30vh; */
    /* border: 2px solid red; */
`
