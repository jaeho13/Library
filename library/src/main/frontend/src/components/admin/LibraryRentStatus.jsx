import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import BookRentStatus from "./chart/BookRentStatus";
import TopSide from "../side/TopSide";
import BookStatusChart from "./chart/BookStatusChart";
import UserAgeChart from "./chart/UserAgeChart";
import LeftSide from "../side/LeftSide";

const LibraryRentStatus = () => {

    const navigate = useNavigate();

    const mainPage = () => {
        navigate("/admin/main")
    }

    const bookPage = () => {
        navigate("/admin/book")
    }

    const userPage = () => {
        navigate("/admin/user")
    }

    return (
        <>
            <TopSide name="도서 대여 현황" />
            <BoardBind>
                <LeftSide />
            </BoardBind>
        </>
    )
}

export default LibraryRentStatus;

const BoardBind = styled.div`
    display: flex;
    flex-direction: row;
`