import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopSide from "../side/TopSide";
import LeftSide from "../side/LeftSide";
import axios from "axios";

const LibraryRentStatus = () => {

    const [bookRentList, setBookRentList] = useState([]);

    useEffect(() => {
        const bookRentListLoad = async () => {
            try {
                const response = await axios.get("/book/findRentList");
                setBookRentList(response.data.rentList);
                console.log("대여된 책 리스트 데이터 들어왔다");
            } catch (error) {
                console.log("대여된 책 리스트 데이터 안 들어왔다");
            };
        };
        bookRentListLoad();
    }, [])

    return (
        <>
            <TopSide name="도서 대여 현황" />

            <BoardBind>
                <LeftSide />

                <BookRentListBind>
                    <BookRentList>
                        <BookName>회원 이름</BookName>
                        <BookId>회원 아이디</BookId>
                        <BookTitle>책 제목</BookTitle>
                        <BookRentDay>대여 날짜</BookRentDay>
                        <BookRentReturn>반납 날짜</BookRentReturn>
                    </BookRentList>

                    {bookRentList.length > 0 && bookRentList.map((item, index) => {
                        return (
                            <BookRentList key={index}>
                                <BookName>{item.liUserInfo.name}</BookName>
                                <BookId>{item.liUserInfo.id}</BookId>
                                <BookTitle>{item.liBookInfo.bookName}</BookTitle>
                                <BookRentDay>{item.dateReg}</BookRentDay>
                                <BookRentReturn>대여날짜 + 14일</BookRentReturn>
                            </BookRentList>
                        )
                    })}

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

const BookId = styled.div`
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

const BookRentReturn = styled.div`
    width: 15%;
    height: 5vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`