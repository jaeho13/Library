import React from "react";
import styled from "styled-components";
import TopSide from "../side/TopSide";
import { useNavigate } from "react-router-dom";
import LeftSide from "../side/LeftSide";

const LibraryBookStatus = () => {

    const navigate = useNavigate();

    const mainPage = () => {
        navigate("/admin/main")
    }

    const rentPage = () => {
        navigate("/admin/rent")
    }

    const userPage = () => {
        navigate("/admin/user")
    }

    return (
        <>
            <TopSide name="도서 관리" />

            <BoardBind>

                <LeftSide />

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
    height: 50vh;
    border: 2px solid red;
`