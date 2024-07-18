import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import BookRentStatus from "./chart/BookRentStatus";
import TopSide from "../side/Topside";
import BookStatusChart from "./chart/BookStatusChart";
import UserAgeChart from "./chart/UserAgeChart";

const LibraryAdminMain = () => {

    const navigate = useNavigate();

    const rentPage = () => {
        navigate("/admin/rent")
    }

    const bookPage = () => {
        navigate("/admin/book")
    }

    const userPage = () => {
        navigate("/admin/user")
    }

    return (
        <>
            <TopSide name="관리자 페이지" />

            <Main>
                <LeftMenu>
                    <LeftRentStatus>관리자 페이지</LeftRentStatus>
                    <LeftRentStatus onClick={rentPage}>도서 대여 현황</LeftRentStatus>
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
                        <BookStatusChart />
                        <UserAgeChart />
                    </ChartSize>
                </ChartBind>
            </Main>
        </>
    )
}

export default LibraryAdminMain;

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
    justify-content: space-around;
`