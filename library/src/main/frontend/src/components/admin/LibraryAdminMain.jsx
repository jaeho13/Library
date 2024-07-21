import React from "react";
import styled from "styled-components";
import BookRentStatusChart from "./chart/BookRentStatusChart";
import TopSide from "../side/TopSide";
import BookStatusChart from "./chart/BookStatusChart";
import UserAgeChart from "./chart/UserAgeChart";
import LeftSide from "../side/LeftSide";

const LibraryAdminMain = () => {
    return (
        <>
            <TopSide name="관리자 페이지" />

            <BoardBind>
                <LeftSide />

                <ChartBind>
                    <ChartNameBind>
                        <ChartName>도서 대출 현황</ChartName>
                        <ChartName>도서 분야 현황</ChartName>
                        <ChartName>회원  연령대</ChartName>
                    </ChartNameBind>

                    <ChartSize>
                        <BookRentStatusChart />
                        <BookStatusChart />
                        <UserAgeChart />
                    </ChartSize>
                </ChartBind>
            </BoardBind>
        </>
    )
}

export default LibraryAdminMain;

const BoardBind = styled.div`
    display: flex;
    flex-direction: row;
`

const ChartBind = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const ChartNameBind = styled.div`
    width: 100%;
    height: 20vh;
    border: 2px solid black;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const ChartName = styled.div`
    width: 30%;
    height: 10vh;
    border: 2px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
`

const ChartSize = styled.div`
    width: 100%;
    height: 40vh;
    border: 2px solid green;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`