import axios from "axios";
import React from "react";
import { ModalBackground, ModalWindow, ModalConfirmBtn, ModalCancelBtn } from "./styles/RemoveModalStyle"

const RemoveModal = ({ onClose, type, checkedList, onDataRemoved }) => {

    const modalClose = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const bookListDelete = async () => {
        try {
            const bookKeys = Object.keys(checkedList).filter(key => checkedList[key]);
            if (bookKeys.length === 0) {
                alert("삭제할 도서를 선택해 주세요.");
                onClose();
                return;
            }
            if (bookKeys.length > 1) {
                alert("삭제할 도서를 하나씩 선택해 주세요.");
                onClose();
                return;
            }
            const bookKey = bookKeys[0]
            await axios.post(`/book/deleteBook?bookKey=${bookKey}`);
            alert("삭제 되었습니다.");
            console.log("도서 정보 삭제 성공");
            onDataRemoved();
            onClose();
            window.location.reload();
        } catch (error) {
            alert("도서 정보 삭제 실패");
            onClose();
            console.log("도서 정보 삭제 실패");
        }
    }

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
            console.log("유저 정보 삭제 성공");
            onDataRemoved();
            onClose();
            window.location.reload();
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
                            <ModalConfirmBtn onClick={bookListDelete}>확인</ModalConfirmBtn>
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