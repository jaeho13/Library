import React from "react";
import { useNavigate } from "react-router-dom";
import { TopMenu, PageName, Logout } from "./styles/TopSideStyle"

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