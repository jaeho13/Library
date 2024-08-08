import React from "react";
import { useNavigate } from "react-router-dom";
import { Main, LeftMenu, LeftRentStatus } from "./styles/LeftSideStyle"

const LeftSide = (props) => {

    const navigate = useNavigate();

    const mainPage = () => {
        navigate("/admin/main")
    }

    const rentPage = () => {
        navigate("/admin/rent")
    }

    const bookPage = () => {
        navigate("/admin/book")
    }

    const userPage = () => {
        navigate("/admin/user")
    }

    return (
        <>
            <Main>
                <LeftMenu>
                    <LeftRentStatus onClick={mainPage}>관리자 페이지</LeftRentStatus>
                    <LeftRentStatus onClick={rentPage}>도서 대여 현황</LeftRentStatus>
                    <LeftRentStatus onClick={bookPage}>도서 관리</LeftRentStatus>
                    <LeftRentStatus onClick={userPage}>회원 관리</LeftRentStatus>
                </LeftMenu>
            </Main>
        </>
    )
}

export default LeftSide;