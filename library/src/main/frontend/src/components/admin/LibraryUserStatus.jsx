import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopSide from "../side/TopSide";
import LeftSide from "../side/LeftSide";
import axios from "axios";

const LibraryUserStatus = () => {

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        const userListLoad = async () => {
            try {
                const response = await axios.get("/findUserList")
                setUserList(response.data.userList);
                console.log("유저 리스트 데이터 들어왔다")
            } catch (error) {
                console.log("유저 리스트 데이터 안 들어왔다");
            }
        };
        userListLoad();
    }, [])

    return (
        <>
            <TopSide name="회원 관리" />
            <BoardBind>
                <LeftSide />

                <UserListBind>

                    <UserManage>
                        <UserAdd>
                            회원 추가
                        </UserAdd>
                        <UserRemove>
                            회원 삭제
                        </UserRemove>
                    </UserManage>

                    <UserList>
                        <UserCheck />
                        <UserNumber>회원 번호</UserNumber>
                        <UserId>아이디</UserId>
                        <UserName>이름</UserName>
                        <UserSex>성별</UserSex>
                        <UserAge>생년월일</UserAge>
                    </UserList>

                    {userList.length > 0 && userList.map((item, index) => {
                        return (
                            <UserList key={index}>
                                <UserCheck />
                                <UserNumber>{item.userKey}</UserNumber>
                                <UserId>{item.id}</UserId>
                                <UserName>{item.name}</UserName>
                                <UserSex>{item.sex}</UserSex>
                                <UserAge>{item.age}</UserAge>
                            </UserList>
                        )
                    })}

                </UserListBind>
            </BoardBind>
        </>
    )
}

export default LibraryUserStatus;

const BoardBind = styled.div`
    display: flex;
    flex-direction: row;
`

const UserListBind = styled.div`
    width: 100%;
    height: 60vh;
    border: 2px solid red;
`

const UserManage = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    border: 2px solid black;
    align-items: center;
`

const UserAdd = styled.div`
    width: 10%;
    height: 5vh;
    border: 2px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2%;
`

const UserRemove = styled.div`
    width: 10%;
    height: 5vh;
    border: 2px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2%;
`

const UserList = styled.div`
    height: 5vh;
    border: 2px solid blue;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

const UserCheck = styled.div`
    width: 10%;
    height: 5vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const UserNumber = styled.div`
    width: 10%;
    height: 5vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const UserId = styled.div`
    width: 20%;
    height: 5vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const UserName = styled.div`
    width: 20%;
    height: 5vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const UserSex = styled.div`
    width: 20%;
    height: 5vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const UserAge = styled.div`
    width: 20%;
    height: 5vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`