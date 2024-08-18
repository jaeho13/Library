import React, { useEffect, useState } from "react";
import TopSide from "../side/TopSide";
import LeftSide from "../side/LeftSide";
import axios from "axios";
import ReactPaginate from "react-paginate";
import RemoveModal from "../modal/RemoveModal";
import AddModal from "../modal/AddModal";
import { BoardBind, BookInfoBind, BookManage, BookAdd, BookRemove, ColorListBind, BookColorList, BookColorListinfo, BookInfoListHeader, BookInfoList, BookCheck, BookTitle, BookWriter, BookGenre, BookDate, PaginationContainer, BookSearchConfirm, BookSearch } from "./stlyes/LibraryBookStatusStyle"
import SessionCheck from "../routes/SessionCheck";
import styled from "styled-components";

const LibraryBookStatus = () => {

    const [bookList, setBookList] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 7;
    const [checkedList, setCheckedList] = useState({});
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [removeModalOpen, setRemoveModalOpen] = useState(false);


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

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(bookList.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(bookList.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, bookList]);

    const pageChange = (event) => {
        const newOffset = (event.selected * itemsPerPage) % bookList.length;
        setItemOffset(newOffset);
    };

    const rentDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const boxCheck = (bookKey) => {
        setCheckedList((prevCheckedItems) => ({
            ...prevCheckedItems,
            [bookKey]: !prevCheckedItems[bookKey],
        }));
    };

    const bookAddModal = () => {
        setAddModalOpen(true);
    };

    const bookRemoveModal = () => {
        setRemoveModalOpen(true);
    };

    const bookListUpdate = async () => {
        try {
            const response = await axios.get(`/book/findBookList?param=`);
            setBookList(response.data.bookList);
            console.log("책 리스트 데이터 갱신됨");
        } catch (error) {
            console.log("책 리스트 데이터 갱신 실패");
        }
    };

    return (
        <>
            <SessionCheck />
            <TopSide name="도서 관리" />

            <BoardBind>

                <LeftSide />

                <BookInfoBind>
                    <BookManage>
                        <BookAdd onClick={bookAddModal} type="book">도서 추가</BookAdd>
                        <BookRemove onClick={bookRemoveModal}>도서 삭제</BookRemove>
                        <BookSearch />
                        <BookSearchConfirm>검색</BookSearchConfirm>
                        <ColorListBind>
                            <BookColorList />
                            <BookColorListinfo> : 대여 도서</BookColorListinfo>
                        </ColorListBind>
                    </BookManage>

                    <BookInfoListHeader>
                        <BookCheck />
                        <BookTitle>책 제목</BookTitle>
                        <BookWriter>작가</BookWriter>
                        <BookGenre>장르</BookGenre>
                        <BookDate>입고일</BookDate>
                    </BookInfoListHeader>

                    {currentItems.length > 0 && currentItems.map((item, index) => {
                        return (
                            <BookInfoList key={index}>
                                <BookCheck>
                                    <input
                                        type="checkbox"
                                        checked={!!checkedList[item.bookKey]}
                                        onChange={() => boxCheck(item.bookKey)}
                                    />
                                </BookCheck>
                                <BookTitle status={item.bookStatus}>{item.bookName}</BookTitle>
                                <BookWriter status={item.bookStatus}>{item.bookWriter}</BookWriter>
                                <BookGenre status={item.bookStatus}>{item.bookGenre}</BookGenre>
                                <BookDate status={item.bookStatus}>{rentDate(item.dateReg)}</BookDate>
                            </BookInfoList>
                        )
                    })}

                    <PaginationContainer>
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel=">"
                            onPageChange={pageChange}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="<"
                            containerClassName={"pagination"}
                            activeClassName={"active"}
                        />
                    </PaginationContainer>
                </BookInfoBind>
            </BoardBind>

            {addModalOpen && <AddModal onClose={() => setAddModalOpen(false)} type="book" onDataAdded={bookListUpdate} />}
            {removeModalOpen && <RemoveModal onClose={() => setRemoveModalOpen(false)} type="book" checkedList={checkedList} onDataRemoved={bookListUpdate} />}
        </>
    )
}

export default LibraryBookStatus;
