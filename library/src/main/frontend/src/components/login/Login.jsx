import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
// import { LoginBind, LibraryLogo, AccountCheck, InputBind, IdBind, PasswordBind, IdName, IdInput, PasswordName, PasswordInput, IdCheck } from "./styles/LoginStyle";

const Login = () => {

    const navigate = useNavigate();

    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");

    const checkLogin = () => {
        axios.post('/loginAdmin', {
            id: id,
            pwd: pwd
        }).then(response => {
            if (response.data.result) {
                console.log("데이터 확인 성공")
                navigate("/admin/main");
            } else {
                alert("아이디 비밀번호를 확인해 주세요.")
            }
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
                                placeholder="id"
                            />
                        </IdBind>

                        <PasswordBind>
                            <PasswordName>
                                비밀번호
                            </PasswordName>

                            <PasswordInput
                                type="password"
                                value={pwd}
                                onChange={(e) => setPwd(e.target.value)}
                                placeholder="password"
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
    /* border: 2px solid red; */
    flex-direction: column;
`

const LibraryLogo = styled.div`
    width: 30%;
    max-width: 400px;
    min-width: 400px;
    height: 10vh;
    min-height: 100px;
    border: 2px solid red;
`

const AccountCheck = styled.div`
    width: 30%;
    max-width: 400px;
    min-width: 400px;
    height: 20vh;
    min-height: 200px;
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
    min-height: 180px;
    /* border: 2px solid black; */
    display: flex;
    flex-direction: column;
    /* justify-content: space-evenly; */
    justify-content: center;

    align-items: center;
`

const IdBind = styled.div`
    width: 100%;
    height: 10vh;
    min-height: 100px;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const IdName = styled.div`
    width: 100%;
    height: 2vh;
    min-height: 20px;
    /* border: 2px solid black; */
`

const IdInput = styled.input`
    width: 95%;
    height: 4vh;
    min-height: 40px;
    /* border: 2px solid black; */
    border-radius: 10px;
`

const PasswordBind = styled.div`
    width: 100%;
    height: 10vh;
    min-height: 100px;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const PasswordName = styled.div`
    width: 100%;
    height: 2vh;
    min-height: 20px;
    /* border: 2px solid black; */
`

const PasswordInput = styled.input`
    width: 95%;
    height: 4vh;
    min-height: 40px;
    border: 2px solid black;
    border-radius: 10px;
`

const IdCheck = styled.button`
    width: 30%;
    max-width: 100px;
    min-height: 100px;
    height: 10vh;
    min-height: 100px;
    border: 2px solid purple;
    font-size: 1.5rem;
    cursor: pointer;
`