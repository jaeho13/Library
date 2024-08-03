import React from "react";
import styled from "styled-components"



const RemoveModal = ({ onClose, type }) => {

    const modalClose = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const deleteConfirm = () => {
        alert("삭제 되었습니다.");
        onClose();
    };

    return (
        <>
            <ModalBackground onClick={modalClose}>
                <ModalWindow type={type}>
                    {type === "book" && (
                        <>
                            선택한 도서 정보를 삭제하겠습니까??
                            <ModalConfirmBtn onClick={deleteConfirm}>확인</ModalConfirmBtn>
                            <ModalCancelBtn onClick={modalClose} >취소</ModalCancelBtn>
                        </>
                    )}
                    {type === "user" && (
                        <>
                            선택한 회원 정보를 삭제하겠습니까??
                            <ModalConfirmBtn onClick={deleteConfirm}>확인</ModalConfirmBtn>
                            <ModalCancelBtn onClick={modalClose} >취소</ModalCancelBtn>
                        </>
                    )}
                </ModalWindow>
            </ModalBackground>
        </>
    )
}

export default RemoveModal;

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
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: lightgray;
    position: relative;
    z-index: 10;
`

const ModalConfirmBtn = styled.button`
    width: 100px;
    height: 30px;
    border: 2px solid black;
    border-radius: 8px;
    position: absolute;
    bottom: 20px;
    right: 140px;
    cursor: pointer;
`

const ModalCancelBtn = styled.button`
    width: 100px;
    height: 30px;
    border: 2px solid black;
    border-radius: 8px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
`