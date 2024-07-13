import React from "react";
import styled from "styled-components";

const TopSide = (props) => {
    return (
        <>
            <TopMenu>
                <PageName>
                    {props.name}
                </PageName>
            </TopMenu>
        </>
    )
}

export default TopSide;

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