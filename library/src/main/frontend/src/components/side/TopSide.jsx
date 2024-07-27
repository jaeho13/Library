import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TopSide = (props) => {

    const navigate = useNavigate();

    const pageLogout = () => {
        navigate("/")
    }

    return (
        <>
            <TopMenu>
                <PageName>
                    {props.name}
                </PageName>

                <Logout onClick={pageLogout}>
                    로그아웃
                </Logout>
            </TopMenu>
        </>
    )
}

export default TopSide;

const TopMenu = styled.div`
    width: 100%;
    height: 20vh;
    border: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const PageName = styled.div`
    width: 30%;
    height: 15vh;
    border: 2px solid black;
    margin-left: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
`

const Logout = styled.div`
    width: 10%;
    height: 3vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 12vh;
    margin-right: 1%;
`