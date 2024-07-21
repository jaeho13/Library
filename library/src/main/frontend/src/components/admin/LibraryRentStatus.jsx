import React from "react";
import styled from "styled-components";
import TopSide from "../side/TopSide";
import LeftSide from "../side/LeftSide";

const LibraryRentStatus = () => {
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