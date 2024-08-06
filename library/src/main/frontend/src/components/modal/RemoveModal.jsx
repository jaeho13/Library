import axios from "axios";
import React from "react";
import styled from "styled-components"

const RemoveModal = ({ onClose, type, checkedList, onDataRemoved }) => {

    const modalClose = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const userListDelete = async () => {
        try {
            const userKeys = Object.keys(checkedList).filter(key => checkedList[key]);
            if (userKeys.length === 0) {
                alert("삭제할 회원을 선택해 주세요.");
                onClose();
                return;
            }
            if (userKeys.length > 1) {
                alert("삭제할 회원을 한 명씩 선택해 주세요.");
                onClose();
                return;
            }
            const userKey = userKeys[0]
            await axios.post(`/user/deleteUser?userKey=${userKey}`);
            alert("삭제 되었습니다.");
            console.log("유저 정보 삭제 실패");
            onDataRemoved();
            onClose();
        } catch (error) {
            alert("유저 정보 삭제 실패");
            onClose();
            console.log("유저 정보 삭제 실패");
        }
    };

    return (
        <>
            <ModalBackground onClick={modalClose}>
                <ModalWindow type={type}>
                    {type === "book" && (
                        <>
                            도서 정보를 삭제하겠습니까??
                            <ModalConfirmBtn>확인</ModalConfirmBtn>
                            <ModalCancelBtn onClick={modalClose} >취소</ModalCancelBtn>
                        </>
                    )}
                    {type === "user" && (
                        <>
                            회원 정보를 삭제하겠습니까??
                            <ModalConfirmBtn onClick={userListDelete}>확인</ModalConfirmBtn>
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