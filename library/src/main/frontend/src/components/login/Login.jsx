import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
// import { LoginBind, LibraryLogo, AccountCheck, InputBind, IdBind, PasswordBind, IdName, IdInput, PasswordName, PasswordInput, IdC } from "./styles/LoginStyle";

const Login = () => {

    const navigate = useNavigate();

    const [id, setId] = useState();
    const [pw, setPw] = useState();

    const checkLogin = () => {
        axios.post("/loginAdmin", {
            id: "admin",
            pw: "a12345",
        }).then(response => {
            console.log("데이터 확인 성공")
            navigate("/admin");
        }).catch(error => {
            console.log("데이터 확인 실패")
        })
    }


    return (
        <>
            <LoginBind>
                <LibraryLogo>

                </LibraryLogo>
                <AccountCheck>
                    <InputBind>

                        <IdBind>
                            <IdName>
                                아이디
                            </IdName>

                            <IdInput
                                type="text"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                            />
                        </IdBind>

                        <PasswordBind>
                            <PasswordName>
                                비밀번호
                            </PasswordName>

                            <PasswordInput
                                type="password"
                                value={pw}
                                onChange={(e) => setPw(e.target.value)}
                            />
                        </PasswordBind>

                    </InputBind>

                    <IdCheck onClick={checkLogin}>
                        확인
                    </IdCheck>
                </AccountCheck>
            </LoginBind>
        </>
    )
}

export default Login;

const LoginBind = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid red;
    flex-direction: column;
`

const LibraryLogo = styled.div`
    width: 30%;
    height: 15vh;
    border: 2px solid red;
`

const AccountCheck = styled.div`
    width: 30%;
    height: 20vh;
    border: 2px solid blue;
    margin-bottom: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

const InputBind = styled.div`
    width: 60%;
    height: 18vh;
    /* border: 2px solid black; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const IdBind = styled.div`
    width: 100%;
    height: 10vh;
    /* border: 2px solid red; */
`

const PasswordBind = styled.div`
    width: 100%;
    height: 10vh;
    /* border: 2px solid red; */
    
`

const IdName = styled.div`
    width: 100%;
    height: 2vh;
    /* border: 2px solid black; */
`

const IdInput = styled.input`
    width: 95%;
    height: 4vh;
    /* border: 2px solid black; */
    border-radius: 10px;
    margin-top: 1vh;
`

const PasswordName = styled.div`
    width: 100%;
    height: 2vh;
    /* border: 2px solid black; */
`

const PasswordInput = styled.input`
    width: 95%;
    height: 4vh;
    /* border: 2px solid black; */
    border-radius: 10px;
    margin-top: 1vh;
`

const IdCheck = styled.button`
    width: 30%;
    height: 10vh;
    border: 2px solid purple;
    font-size: 1.5rem;
    cursor: pointer;
`