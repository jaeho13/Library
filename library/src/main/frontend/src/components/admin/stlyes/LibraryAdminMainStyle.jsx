import styled from "styled-components"

export const BoardBind = styled.div`
    display: flex;
    flex-direction: row;
`

export const ChartBind = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const ChartNameBind = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const ChartName = styled.div`
    width: 30%;
    height: 10vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ChartSize = styled.div`
    width: 100%;
    height: 40vh;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`