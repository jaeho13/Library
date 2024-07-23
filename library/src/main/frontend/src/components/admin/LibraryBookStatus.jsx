import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopSide from "../side/TopSide";
import LeftSide from "../side/LeftSide";
import axios from "axios";

const LibraryBookStatus = () => {

    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        const bookListLoad = async () => {
            try {
                const response = await axios.get("/book/findBookList");
                setBookList(response.data.bookList);
                console.log("책 리스트 데이터 들어왔다");
            } catch (error) {
                console.log("책 리스트 데이터 안 들어왔다");
            }
        };
        bookListLoad();
    }, []);

    return (
        <>
            <TopSide name="도서 관리" />

            <BoardBind>

                <LeftSide />

                <BookInfoBind>
                    <BookManage>
                        <BookAdd>도서 추가</BookAdd>
                        <BookRemove>도서 삭제</BookRemove>
                    </BookManage>

                    <BookInfoListHeader>
                        <BookCheck />
                        <BookTitle>책 제목</BookTitle>
                        <BookWriter>작가</BookWriter>
                        <BookGenre>장르</BookGenre>
                        <BookCount>권 수</BookCount>
                        <BookDate>입고일</BookDate>
                    </BookInfoListHeader>

                    {bookList.length > 0 && bookList.map((item, index) => {
                        return (
                            <BookInfoList key={index}>
                                <BookCheck />
                                <BookTitle>{item.bookName}</BookTitle>
                                <BookWriter>{item.bookWriter}</BookWriter>
                                <BookGenre>{item.bookGenre}</BookGenre>
                                <BookCount>{item.bookCnt}</BookCount>
                                <BookDate>{item.dateReg}</BookDate>
                            </BookInfoList>
                        )
                    })}
                </BookInfoBind>

            </BoardBind>

        </>
    )
}

export default LibraryBookStatus;

const BoardBind = styled.div`
    display: flex;
    flex-direction: row;
`

const BookInfoBind = styled.div`
    width: 100%;
    height: 60vh;
    border: 2px solid red;
`

const BookManage = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    border: 2px solid black;
    align-items: center;
`

const BookAdd = styled.div`
    width: 10%;
    height: 5vh;
    border: 2px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2%;
`

const BookRemove = styled.div`
    width: 10%;
    height: 5vh;
    border: 2px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2%;
`

const BookInfoListHeader = styled.div`
    height: 5vh;
    border: 2px solid blue;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

const BookInfoList = styled.div`
    height: 5vh;
    border: 2px solid blue;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

const BookCheck = styled.div`
    width: 5%;
    height: 5vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BookTitle = styled.div`
    width: 25%;
    height: 5vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BookWriter = styled.div`
    width: 25%;
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

const BookCount = styled.div`
    width: 10%;
    height: 5vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BookDate = styled.div`
    width: 20%;
    height: 5vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`