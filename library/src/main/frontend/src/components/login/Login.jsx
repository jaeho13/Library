import React from "react";
import styled from "styled-components";

const Login = () => {
    return (
        <>
            <LoginBind>

                <InputBind>
                    <IdInput />
                    <PasswordInput />
                </InputBind>

                <CheckId>확인</CheckId>
            </LoginBind>

        </>
    )
}

export default Login;


const LoginBind = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const InputBind = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid blue;
`

const IdInput = styled.input`
    width: 100%;
    height: 10vh;
    border: 2px solid red;
`

const PasswordInput = styled.input`
    width: 100%;
    height: 10vh;
    border: 2px solid red;
`

const CheckId = styled.button`
    width: 20%;
    height: 5vh;
    border: 2px solid red;
    cursor: pointer;
`