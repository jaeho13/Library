import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopSide from "../side/TopSide";
import LeftSide from "../side/LeftSide";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Modal from "../modal/Modal";

const LibraryUserStatus = () => {
    const [userList, setUserList] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 7;
    const [checkedList, setCheckedList] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const userListLoad = async () => {
            try {
                const response = await axios.get("/user/findUserList");
                setUserList(response.data.userList);
                console.log("유저 리스트 데이터 들어왔다");
            } catch (error) {
                console.log("유저 리스트 데이터 안 들어왔다");
            }
        };
        userListLoad();
    }, []);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(userList.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(userList.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, userList]);

    const pageChange = (event) => {
        const newOffset = (event.selected * itemsPerPage) % userList.length;
        setItemOffset(newOffset);
    };

    const boxCheck = (userKey) => {
        setCheckedList((prevCheckedItems) => ({
            ...prevCheckedItems,
            [userKey]: !prevCheckedItems[userKey],
        }));
    };

    const userRemove = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <TopSide name="회원 관리" />

            <BoardBind>

                <LeftSide />

                <UserListBind>
                    <UserManage>
                        <UserAdd>회원 추가</UserAdd>
                        <UserRemove onClick={userRemove}>회원 삭제</UserRemove>
                    </UserManage>

                    <UserListHeader>
                        <UserCheck />
                        <UserNumber>회원 번호</UserNumber>
                        <UserId>아이디</UserId>
                        <UserName>이름</UserName>
                        <UserSex>성별</UserSex>
                        <UserAge>생년월일</UserAge>
                    </UserListHeader>

                    {currentItems.length > 0 && currentItems.map((item, index) => {
                        return (
                            <UserList key={index}>
                                <UserCheck>
                                    <input
                                        type="checkbox"
                                        checked={!!checkedList[item.userKey]}
                                        onChange={() => boxCheck(item.userKey)}
                                    />
                                </UserCheck>
                                <UserNumber>{item.userKey}</UserNumber>
                                <UserId>{item.id}</UserId>
                                <UserName>{item.name}</UserName>
                                <UserSex>{item.sex}</UserSex>
                                <UserAge>{item.age}</UserAge>
                            </UserList>
                        );
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

                </UserListBind>
            </BoardBind>

            {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
        </>
    );
};

export default LibraryUserStatus;

const BoardBind = styled.div`
    display: flex;
    flex-direction: row;
`

const UserListBind = styled.div`
    width: 100%;
    height: 60vh;
    border-bottom: 2px solid black;
`

const UserManage = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const UserAdd = styled.div`
    width: 10%;
    height: 5vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2%;
`

const UserRemove = styled.div`
    width: 10%;
    height: 5vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2%;
`

const UserListHeader = styled.div`
    height: 5vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
`

const UserList = styled.div`
    height: 5vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-bottom: 2px solid black;
`

const UserCheck = styled.div`
    width: 5%;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 2px solid black;
`

const UserNumber = styled.div`
    width: 10%;
    height: 5vh;
    border-right: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const UserId = styled.div`
    width: 25%;
    height: 5vh;
    border-right: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const UserName = styled.div`
    width: 20%;
    height: 5vh;
    border-right: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const UserSex = styled.div`
    width: 20%;
    height: 5vh;
    border-right: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const UserAge = styled.div`
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
