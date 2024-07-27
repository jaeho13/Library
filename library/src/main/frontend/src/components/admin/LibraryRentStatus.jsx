import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopSide from "../side/TopSide";
import LeftSide from "../side/LeftSide";
import axios from "axios";
import ReactPaginate from "react-paginate";

const LibraryRentStatus = () => {

    const [bookRentList, setBookRentList] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 7;


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

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(bookRentList.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(bookRentList.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, bookRentList]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % bookRentList.length;
        setItemOffset(newOffset);
    };

    const rentDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const returnDate = (dateString, days) => {
        const date = new Date(dateString);
        date.setDate(date.getDate() + days);
        return rentDate(date);
    };

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

                    {currentItems.length > 0 && currentItems.map((item, index) => {
                        return (
                            <BookRentList key={index}>
                                <BookName>{item.liUserInfo.name}</BookName>
                                <BookId>{item.liUserInfo.id}</BookId>
                                <BookTitle>{item.liBookInfo.bookName}</BookTitle>
                                <BookRentDay>{rentDate(item.dateReg)}</BookRentDay>
                                <BookRentReturn>{returnDate(item.dateReg, 14)}</BookRentReturn>
                            </BookRentList>
                        )
                    })}

                    <PaginationContainer>
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel=">"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="<"
                            containerClassName={"pagination"}
                            activeClassName={"active"}
                        />
                    </PaginationContainer>

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

const PaginationContainer = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .pagination {
        display: flex;
        list-style: none;
        padding: 0;
    }

    .pagination li {
        margin: 0 5px;
        cursor: pointer;
    }

    .pagination li.active {
        font-weight: bold;
    }
`;
