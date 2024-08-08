import React, { useEffect, useState } from "react";
import TopSide from "../side/TopSide";
import LeftSide from "../side/LeftSide";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { BoardBind, BookRentListBind, BookRentList, BookName, BookId, BookTitle, BookRentDay, BookRentReturn, PaginationContainer } from "./stlyes/LibraryRentStatusStyle"

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
                                <BookName>{item.name}</BookName>
                                <BookId>{item.id}</BookId>
                                <BookTitle>{item.bookName}</BookTitle>
                                <BookRentDay>{rentDate(item.rentDate)}</BookRentDay>
                                <BookRentReturn>{returnDate(item.rentDate, 14)}</BookRentReturn>
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