import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import BookStatusPieChart from "./chart/BookStatusPieChart";
import BookRentStatus from "./chart/BookRentStatus";
import UserAgeGroup from "./chart/UserAgeGroup";
import TopSide from "../side/Topside";

const LibraryRentStatus = () => {

    const navigate = useNavigate();

    const bookPage = () => {
        navigate("/admin/book")
    }

    const userPage = () => {
        navigate("/admin/user")
    }

    return (
        <>
            <TopSide name="도서 대여 현황" />

            <Main>
                <LeftMenu>
                    <LeftRentStatus>도서 대여 현황</LeftRentStatus>
                    <LeftRentStatus onClick={bookPage}>도서 관리</LeftRentStatus>
                    <LeftRentStatus onClick={userPage}>회원 관리</LeftRentStatus>
                </LeftMenu>

                <ChartBind>
                    <ChartNameBind>
                        <ChartName>도서 대출 현황</ChartName>
                        <ChartName>도서 분야 현황</ChartName>
                        <ChartName>회원  연령대</ChartName>
                    </ChartNameBind>

                    <ChartSize>
                        <BookRentStatus />
                        <BookStatusPieChart />
                        <UserAgeGroup />
                    </ChartSize>
                </ChartBind>
            </Main>
        </>
    )
}

export default LibraryRentStatus;

const TopMenu = styled.div`
    width: 100%;
    height: 20vh;
    border: 2px solid blue;
    display: flex;
    align-items: center;
`

const PageName = styled.div`
    width: 30%;
    height: 15vh;
    border: 2px solid red;
    margin-left: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    font-size: 1.5rem;
`

const Main = styled.div`
    border: 2px solid black;
    display: flex;
    flex-direction: row;
`

const LeftMenu = styled.div`
    width: 10%;
    height: 60vh;
    border: 2px solid red;
    display: flex;
    flex-direction: column;
`

const LeftRentStatus = styled.div`
    width: 100%;
    height: 10vh;
    border: 2px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const LeftBookStatus = styled.div`
    width: 100%;
    height: 10vh;
    border: 2px solid black;
`

const LeftUserStatus = styled.div`
    width: 100%;
    height: 10vh;
    border: 2px solid green;
`

const ChartBind = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const ChartNameBind = styled.div`
    width: 100%;
    height: 20vh;
    border: 2px solid black;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const ChartName = styled.div`
    width: 30%;
    height: 10vh;
    border: 2px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
`

const ChartSize = styled.div`
    width: 100%;
    height: 40vh;
    border: 2px solid green;
    display: flex;
    flex-direction: row;
`