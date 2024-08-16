import styled from "styled-components";

export const PieChartBind = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    border-right: 2px solid black;
`

export const PieChartSize = styled.div`
    width: 100%;
    height: 30vh;
`

export const PieChartName = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const LegendItem = styled.div`
    display: flex;
    align-items: center;
`;

export const LegendColor = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${props => props.color};
    margin-right: 5px;
`;

export const LegendLabel = styled.span`
    font-size: 14px;
`;