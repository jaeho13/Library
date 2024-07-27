import React from "react";
import styled from "styled-components"



const Modal = ({ onClose }) => {

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <>
            <ModalBackground onClick={handleBackgroundClick}>
                <ModalWindow>
                    삭제 되었습니다.
                    <ModalBtn onClick={onClose}>확인</ModalBtn>
                </ModalWindow>
            </ModalBackground>
        </>
    )
}

export default Modal;

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 9;
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
    z-index: 10;
`

const ModalBtn = styled.button`
    width: 100px;
    height: 30px;
    border: 2px solid black;
    border-radius: 8px;
    position: absolute;
    bottom: 20px;
    right: 20px;
`