import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import BookRentStatus from "./chart/BookRentStatus";
import TopSide from "../side/TopSide";
import BookStatusChart from "./chart/BookStatusChart";
import UserAgeChart from "./chart/UserAgeChart";
import LeftSide from "../side/LeftSide";

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

            <BoardBind>
                <LeftSide />

                <BookRentListBind>
                    <BookRentList>
                        <BookName>회원 이름</BookName>
                        <BookTitle>책 제목</BookTitle>
                        <BookWriter>작가</BookWriter>
                        <BookGenre>장르</BookGenre>
                        <BookRentDay>대여 날짜</BookRentDay>
                    </BookRentList>
                </BookRentListBind>

            </BoardBind>
        </>
    )
}

export default LibraryRentStatus;

const BoardBind = styled.div`
    display: flex;
    flex-direction: row;
`

const BookRentListBind = styled.div`
    width: 100%;
    height: 60vh;
    border: 2px solid red;
`

const BookRentList = styled.div`
    height: 5vh;
    border: 2px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const BookName = styled.div`
    width: 15%;
    height: 5vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const BookTitle = styled.div`
    width: 40%;
    height: 5vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BookWriter = styled.div`
    width: 15%;
    height: 5vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BookGenre = styled.div`
    width: 15%;
    height: 5vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BookRentDay = styled.div`
    width: 15%;
    height: 5vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`