import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { LoginBind, LibraryLogo, AccountCheck, InputBind, IdBind, PasswordBind, IdName, IdInput, PasswordName, PasswordInput, IdCheck } from "./styles/LoginStyle";

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
                sessionStorage.setItem("id", id);
                navigate("/admin/main");
            } else {
                alert("아이디 비밀번호를 확인해 주세요.")
            }
        }).catch(error => {
            alert("로그인 정보를 확인해 주세요.")
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