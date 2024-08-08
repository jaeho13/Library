import axios from "axios";
import React, { useRef, useState } from "react";
import { ModalBackground, ModalWindow, Label, Input, Select, ModalConfirmBtn, ModalCancelBtn } from "./styles/AddModalStyle"

const AddModal = ({ onClose, onDataAdded, type }) => {

    const bookTitleRef = useRef("");
    const writerRef = useRef("");
    const genreRef = useRef("");

    const idRef = useRef();
    const passwordRef = useRef("");
    const nameRef = useRef("");
    const sexRef = useRef("");
    const ageRef = useRef("");

    const modalClose = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const [bookName, setBookName] = useState("");
    const [bookWriter, setBookWriter] = useState("");
    const [bookGenre, setBookGenre] = useState("");

    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [userSex, setUserSex] = useState("");
    const [userAge, setUserAge] = useState("");

    const inputCheck = async () => {
        if (type === "book") {
            if (!bookTitleRef.current.value) {
                alert("책 제목을 입력해 주세요")
                return;
            } else if (!writerRef.current.value) {
                alert("작가를 입력해 주세요")
                return;
            } else if (!genreRef.current.value) {
                alert("장르를 입력해 주세요")
                return;
            }
            axios.post("/book/insertBook", {
                title: bookName,
                writer: bookWriter,
                genre: bookGenre,
            }).then(response => {
                console.log("도서 추가 성공")
                alert("추가 되었습니다.")
                onDataAdded(response.data);
                onClose();
            }).catch(error => {
                console.log("도서 추가 실패")
            })

        } else if (type === "user") {
            if (!idRef.current.value) {
                alert("아이디를 입력해 주세요")
                return;
            } else if (!passwordRef.current.value) {
                alert("비밀번호를 입력해 주세요")
                return;
            } else if (!nameRef.current.value) {
                alert("이름을 입력해 주세요")
                return;
            } else if (!sexRef.current.value) {
                alert("성별을 선택해 주세요")
                return;
            } else if (!ageRef.current.value) {
                alert("날짜를 선택해 주세요")
                return;
            }

            const date = new Date(userAge);
            const formattedDate = date.toISOString().split('T')[0].replace(/-/g, '');

            axios.post("/user/insertUser", {
                id: userId,
                pwd: userPassword,
                name: userName,
                sex: userSex,
                age: formattedDate,
            }).then(response => {
                console.log("회원 추가 성공")
                alert("추가 되었습니다.")
                onDataAdded(response.data);
                onClose();
            }).catch(error => {
                console.log("회원 추가 실패")
                alert("실패했습니다.")
                onClose();
            })
        }
    }

    return (
        <>
            <ModalBackground onClick={modalClose}>
                <ModalWindow type={type}>
                    {type === "book" && (
                        <>
                            <Label htmlFor="title">책 제목</Label>
                            <Input
                                id="title"
                                ref={bookTitleRef}
                                onChange={(e) => setBookName(e.target.value)}
                            />

                            <Label htmlFor="writer">작가</Label>
                            <Input
                                id="writer"
                                ref={writerRef}
                                onChange={(e) => setBookWriter(e.target.value)}
                            />

                            <Label>장르</Label>
                            <Select
                                ref={genreRef}
                                onChange={(e) => setBookGenre(e.target.value)}
                            >
                                <option value="">장르</option>
                                <option value="예술">예술</option>
                                <option value="인문">인문</option>
                                <option value="여행">여행</option>
                                <option value="과학">과학</option>
                                <option value="에세이">에세이</option>
                                <option value="경제">경제</option>
                                <option value="소설">소설</option>
                            </Select>
                        </>
                    )}
                    {type === "user" && (
                        <>
                            <Label htmlFor="id">아이디</Label>
                            <Input
                                id="id"
                                ref={idRef}
                                onChange={(e) => setUserId(e.target.value)}
                            />

                            <Label htmlFor="password">비밀번호</Label>
                            <Input
                                id="password"
                                type="password"
                                ref={passwordRef}
                                onChange={(e) => setUserPassword(e.target.value)}
                            />

                            <Label htmlFor="name">이름</Label>
                            <Input
                                id="name"
                                ref={nameRef}
                                onChange={(e) => setUserName(e.target.value)}
                            />

                            <Label>성별</Label>
                            <Select
                                ref={sexRef}
                                onChange={(e) => setUserSex(e.target.value)}
                            >
                                <option value="">성별</option>
                                <option value="남자">남자</option>
                                <option value="여자">여자</option>
                            </Select>

                            <Label>생년월일</Label>
                            <Input
                                ref={ageRef}
                                type="date"
                                onChange={(e) => setUserAge(e.target.value)}
                            />
                        </>
                    )}
                    <ModalConfirmBtn onClick={inputCheck}>확인</ModalConfirmBtn>
                    <ModalCancelBtn onClick={modalClose} >취소</ModalCancelBtn>
                </ModalWindow>
            </ModalBackground>
        </>
    );
};

export default AddModal;