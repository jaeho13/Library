import React from "react";
import styled from "styled-components";
import TopSide from "../side/Topside";

const LibraryUserStatus = () => {
    return (
        <>
            <TopSide name="회원 관리" />


            <LeftMenu>
                <LeftRentStatus>

                </LeftRentStatus>

                <LeftBookStatus>

                </LeftBookStatus>

                <LeftUserStatus>

                </LeftUserStatus>
            </LeftMenu>
        </>
    )
}

export default LibraryUserStatus;

const LeftMenu = styled.div`
    width: 10%;
    height: 80vh;
    border: 2px solid red;
    display: flex;
    flex-direction: column;
`

const LeftRentStatus = styled.div`
    width: 100%;
    height: 10vh;
    border: 2px solid blue;
`

const LeftBookStatus = styled.div`
    width: 100%;
    height: 10vh;
    border: 2px solid black;
`

const LeftUserStatus = styled.div`
    width: 100%;
    height: 10vh;
    border: 2px solid green;
`