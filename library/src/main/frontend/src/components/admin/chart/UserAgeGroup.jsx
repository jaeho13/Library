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
        name: "10대",
        num: 13
    },
    {
        name: "20대",
        num: 19
    },
    {
        name: "30대",
        num: 32
    },
    {
        name: "40대",
        num: 40
    }
    ,
    {
        name: "50대",
        num: 42
    },
    {
        name: "60대",
        num: 61
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
