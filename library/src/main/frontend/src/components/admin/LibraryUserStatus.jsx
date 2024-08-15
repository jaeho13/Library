import React, { useEffect, useState } from "react";
import TopSide from "../side/TopSide";
import LeftSide from "../side/LeftSide";
import axios from "axios";
import ReactPaginate from "react-paginate";
import AddModal from "../modal/AddModal";
import RemoveModal from "../modal/RemoveModal";
import { BoardBind, UserListBind, UserManage, UserAdd, UserRemove, UserListHeader, UserList, UserCheck, UserNumber, UserId, UserName, UserSex, UserAge, PaginationContainer } from "./stlyes/LibraryUserStatusStyle"
import SessionCheck from "../routes/SessionCheck";

const LibraryUserStatus = () => {
    const [userList, setUserList] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 7;
    const [checkedList, setCheckedList] = useState({});
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [removeModalOpen, setRemoveModalOpen] = useState(false);

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

    const userAddModal = () => {
        setAddModalOpen(true);
    };

    const userRemoveModal = () => {
        setRemoveModalOpen(true);
    };

    const userListUpdate = async () => {
        try {
            const response = await axios.get("/user/findUserList");
            setUserList(response.data.userList);
            console.log("유저 리스트 데이터 갱신됨");
        } catch (error) {
            console.log("유저 리스트 데이터 갱신 실패");
        }
    };

    return (
        <>
            <SessionCheck />
            <TopSide name="회원 관리" />

            <BoardBind>

                <LeftSide />

                <UserListBind>
                    <UserManage>
                        <UserAdd onClick={userAddModal} type="user">회원 추가</UserAdd>
                        <UserRemove onClick={userRemoveModal}>회원 삭제</UserRemove>
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

            {addModalOpen && <AddModal onClose={() => setAddModalOpen(false)} type="user" onDataAdded={userListUpdate} />}
            {removeModalOpen && <RemoveModal onClose={() => setRemoveModalOpen(false)} type="user" checkedList={checkedList} onDataRemoved={userListUpdate} />}
        </>
    );
};

export default LibraryUserStatus;