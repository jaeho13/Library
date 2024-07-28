import React, { useRef, useState } from "react";
import styled from "styled-components";

const AddModal = ({ onClose, type }) => {

    const bookTitleRef = useRef(null);
    const writerRef = useRef(null);
    const genreRef = useRef(null);

    const idRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);
    const sexRef = useRef(null);
    const birthRef = useRef(null);

    const modalClose = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const inputCheck = () => {
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
            } else if (!birthRef.current.value) {
                alert("날짜를 선택해 주세요")
                return;
            }
        }
        alert("추가 되었습니다.")
        onClose();
    }

    return (
        <>
            <ModalBackground onClick={modalClose}>
                <ModalWindow type={type}>
                    {type === "book" && (
                        <>
                            {/* <Label htmlFor="bookTitle">책 제목</Label>
                            <Input id="bookTitle" name="bookTitle" />

                            <Label htmlFor="writer">작가</Label>
                            <Input id="writer" name="writer" />

                            <Label htmlFor="genre">장르</Label>
                            <Input id="genre" name="genre" /> */}

                            <Label>책 제목</Label>
                            <Input ref={bookTitleRef} />

                            <Label>작가</Label>
                            <Input ref={writerRef} />

                            <Label>장르</Label>
                            <Select ref={sexRef}>
                                <option value="">장르</option>
                                <option value="art">예술</option>
                                <option value="humanities">인문</option>
                                <option value="trip">여행</option>
                                <option value="science">과학</option>
                                <option value="essay">에세이</option>
                                <option value="economy">경제</option>
                                <option value="novel">소설</option>
                            </Select>
                        </>
                    )}

                    {/* <Label>작가</Label>
                        <Input name="author" onChange={handleChange} /> */}

                    {type === "user" && (
                        <>
                            {/* <Label htmlFor="id">아이디</Label>
                            <Input id="id" name="id" />

                            <Label htmlFor="password">비밀번호</Label>
                            <Input id="password" name="password" type="password" />

                            <Label htmlFor="name">이름</Label>
                            <Input id="name" name="name" />

                            <Label htmlFor="sex">성별</Label>
                            <Input id="sex" name="sex" />

                            <Label htmlFor="birth">생년월일</Label>
                            <Input id="birth" name="birth" type="date" /> */}

                            <Label>아이디</Label>
                            <Input ref={idRef} />

                            <Label>비밀번호</Label>
                            <Input ref={passwordRef} type="password" />

                            <Label>이름</Label>
                            <Input ref={nameRef} />

                            <Label>성별</Label>
                            <Select ref={sexRef}>
                                <option value="">성별</option>
                                <option value="male">남성</option>
                                <option value="female">여성</option>
                            </Select>

                            <Label>생년월일</Label>
                            <Input ref={birthRef} type="date" />
                        </>
                    )}
                    <ModalBtn onClick={inputCheck}>확인</ModalBtn>
                </ModalWindow>
            </ModalBackground>
        </>
    );
};

export default AddModal;

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
    width: 40%;
    max-width: 400px;
    min-width: 400px;
    height: ${({ type }) => (type === 'book' ? '23vh' : '35vh')};
    min-height: ${({ type }) => (type === 'book' ? '200px' : '300px')};
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    justify-content: star;
    align-items: center;
    border-radius: 8px;
    background-color: lightgray;
    position: relative;
    z-index: 10;
    padding: 20px;
`

const Label = styled.label`
    width: 80%;
    text-align: start;
    margin-bottom: 3px;
`

const Input = styled.input`
    width: 80%;
    padding: 5px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
`

const Select = styled.select`
    width: 83%;
    padding: 5px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
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