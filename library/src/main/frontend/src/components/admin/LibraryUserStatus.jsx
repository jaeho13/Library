import React from "react";
import styled from "styled-components";
import TopSide from "../side/Topside";
import { useNavigate } from "react-router-dom";

const LibraryUserStatus = () => {

    const navigate = useNavigate();

    const rentPage = () => {
        navigate("/admin/rent")
    }

    const bookPage = () => {
        navigate("/admin/book")
    }

    return (
        <>
            <TopSide name="회원 관리" />

            <Main>

                <LeftMenu>
                    <LeftRentStatus onClick={rentPage}>도서 대여 현황</LeftRentStatus>
                    <LeftRentStatus onClick={bookPage}>도서 관리</LeftRentStatus>
                    <LeftRentStatus>회원 관리</LeftRentStatus>
                </LeftMenu>
            </Main>
        </>
    )
}

export default LibraryUserStatus;


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
