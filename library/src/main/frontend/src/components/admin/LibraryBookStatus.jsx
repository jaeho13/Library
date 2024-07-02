import React from "react";
import styled from "styled-components";

const LibraryBookStatus = () => {
    return (
        <>
            <TopMenu>
                <PageName>
                    도서 관리
                </PageName>
            </TopMenu>


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

export default LibraryBookStatus;

const TopMenu = styled.div`
    width: 100%;
    height: 20vh;
    border: 2px solid blue;
    display: flex;
    align-items: center;
`

const PageName = styled.div`
    width: 30%;
    height: 15vh;
    border: 2px solid red;
    margin-left: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    font-size: 1.5rem;
`

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