import React from "react";
import styled from "styled-components";
import TopSide from "../side/Topside";
import { useNavigate } from "react-router-dom";

const LibraryBookStatus = () => {

    const navigate = useNavigate();

    const rentPage = () => {
        navigate("/admin/rent")
    }

    const userPage = () => {
        navigate("/admin/user")
    }

    return (
        <>
            <TopSide name="도서 관리" />

            <Main>
                <LeftMenu>
                    <LeftRentStatus onClick={rentPage}>도서 대여 현황</LeftRentStatus>
                    <LeftRentStatus>도서 관리</LeftRentStatus>
                    <LeftRentStatus onClick={userPage}>회원 관리</LeftRentStatus>
                </LeftMenu>

                <BookInfoBind>
                    <BookManage>
                        <BookAdd>
                            도서 추가
                        </BookAdd>
                        <BookRemove>
                            도서 삭제
                        </BookRemove>
                    </BookManage>

                    <BookInfoList>

                    </BookInfoList>
                </BookInfoBind>
            </Main>
        </>
    )
}

export default LibraryBookStatus;

const Main = styled.div`
    border: 2px solid black;
    display: flex;
    flex-direction: row;
`

const LeftMenu = styled.div`
    width: 10%;
    height: 60vh;
    border: 2px solid red;
    display: flex;
    flex-direction: column;
`

const LeftRentStatus = styled.div`
    width: 100%;
    height: 10vh;
    border: 2px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const BookInfoBind = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
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

const BookInfoList = styled.div`
    width: 100%;
    height: 3vh;
    border: 2px solid red;
`