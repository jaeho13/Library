import React from "react";
import styled from "styled-components";
import TopSide from "../side/TopSide";
import LeftSide from "../side/LeftSide";

const LibraryUserStatus = () => {

    return (
        <>
            <TopSide name="회원 관리" />
            <BoardBind>
                <LeftSide />
            </BoardBind>
        </>
    )
}

export default LibraryUserStatus;

const BoardBind = styled.div`
    display: flex;
    flex-direction: row;
`