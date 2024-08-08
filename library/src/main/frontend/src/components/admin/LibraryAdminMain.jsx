import React from "react";
import BookRentStatusChart from "./chart/BookRentStatusChart";
import TopSide from "../side/TopSide";
import BookStatusChart from "./chart/BookStatusChart";
import UserAgeChart from "./chart/UserAgeChart";
import LeftSide from "../side/LeftSide";
import { BoardBind, ChartBind, ChartNameBind, ChartName, ChartSize } from "./stlyes/LibraryAdminMainStyle"

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