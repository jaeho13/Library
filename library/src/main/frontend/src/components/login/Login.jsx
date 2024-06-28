import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const pageLogin = () => {
        navigate("/admin")
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

                            <IdInput>

                            </IdInput>
                        </IdBind>

                        <PasswordBind>
                            <PasswordName>
                                비밀번호
                            </PasswordName>

                            <PasswordInput>

                            </PasswordInput>
                        </PasswordBind>


                    </InputBind>

                    <IdCheck>
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