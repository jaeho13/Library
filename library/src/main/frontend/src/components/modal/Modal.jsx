import React from "react";
import styled from "styled-components"



const Modal = () => {
    return (
        <>
            <ModalBackground>
                <ModalWindow>
                    삭제 되었습니다.
                    <ModalBtn>닫기</ModalBtn>
                </ModalWindow>
            </ModalBackground>
        </>
    )
}

export default Modal;

const ModalBackground = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
`

const ModalWindow = styled.div`
    width: 400px;
    height: 200px;
    border: 2px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: lightgray;
    position: relative;
`

const ModalBtn = styled.button`
    width: 100px;
    height: 30px;
    position: absolute;
    bottom: 20px;
    right: 20px;
`