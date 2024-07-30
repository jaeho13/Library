import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopSide from "../side/TopSide";
import LeftSide from "../side/LeftSide";
import axios from "axios";
import ReactPaginate from "react-paginate";
import RemoveModal from "../modal/RemoveModal";
import AddModal from "../modal/AddModal";

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

    const bookAdd = () => {
        setAddModalOpen(true);
    };

    const bookRemove = () => {
        setRemoveModalOpen(true);
    };

    const bookListUpdate = async () => {
        try {
            const response = await axios.get("/book/findBookList");
            setBookList(response.data.bookList);
            console.log("책 리스트 데이터 갱신됨");
        } catch (error) {
            console.log("책 리스트 데이터 갱신 실패");
        }
    };

    return (
        <>
            <TopSide name="도서 관리" />

            <BoardBind>

                <LeftSide />

                <BookInfoBind>
                    <BookManage>
                        <BookAdd onClick={bookAdd} type="book">도서 추가</BookAdd>
                        <BookRemove onClick={bookRemove}>도서 삭제</BookRemove>
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
                                <BookTitle>{item.bookName}</BookTitle>
                                <BookWriter>{item.bookWriter}</BookWriter>
                                <BookGenre>{item.bookGenre}</BookGenre>
                                <BookDate>{rentDate(item.dateReg)}</BookDate>
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
            {removeModalOpen && <RemoveModal onClose={() => setRemoveModalOpen(false)} />}
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
    border-bottom: 2px solid black;
`

const BookManage = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const BookAdd = styled.div`
    width: 10%;
    height: 5vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2%;
`

const BookRemove = styled.div`
    width: 10%;
    height: 5vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2%;
`

const BookInfoListHeader = styled.div`
    height: 5vh;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

const BookInfoList = styled.div`
    height: 5vh;
    border-bottom: 2px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

const BookCheck = styled.div`
    width: 5%;
    height: 5vh;
    border-right: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BookTitle = styled.div`
    width: 35%;
    height: 5vh;
    border-right: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BookWriter = styled.div`
    width: 25%;
    height: 5vh;
    border-right: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BookGenre = styled.div`
    width: 15%;
    height: 5vh;
    border-right: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BookDate = styled.div`
    width: 20%;
    height: 5vh;
    border-right: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const PaginationContainer = styled.div`
    width: 100%;
    height: 8vh;
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
`
