import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import BookRentStatus from "./chart/BookRentStatus";
import TopSide from "../side/Topside";
import BookStatusChart from "./chart/BookStatusChart";
import UserAgeChart from "./chart/UserAgeChart";

const LibraryRentStatus = () => {

    const navigate = useNavigate();

    const mainPage = () => {
        navigate("/admin/main")
    }

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
                    <LeftRentStatus onClick={mainPage}>관리자 페이지</LeftRentStatus>
                    <LeftRentStatus>도서 대여 현황</LeftRentStatus>
                    <LeftRentStatus onClick={bookPage}>도서 관리</LeftRentStatus>
                    <LeftRentStatus onClick={userPage}>회원 관리</LeftRentStatus>
                </LeftMenu>

            </Main>
        </>
    )
}

export default LibraryRentStatus;

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