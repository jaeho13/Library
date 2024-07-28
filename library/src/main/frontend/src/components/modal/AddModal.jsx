import React, { useState } from "react";
import styled from "styled-components";

const AddModal = ({ onClose, type }) => {
    const [formData, setFormData] = useState({});

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        console.log(formData); // 여기서 서버로 데이터 전송 등의 작업을 수행할 수 있습니다.
        onClose();
    };

    return (
        <>
            <ModalBackground onClick={handleBackgroundClick}>
                <ModalWindow>
                    {type === "book" && (
                        <>
                            {/* <Label htmlFor="bookTitle">책 제목</Label>
                            <Input id="bookTitle" name="bookTitle" />

                            <Label htmlFor="writer">작가</Label>
                            <Input id="writer" name="writer" />

                            <Label htmlFor="genre">장르</Label>
                            <Input id="genre" name="genre" /> */}


                            <Label>책 제목</Label>
                            <Input />

                            <Label>작가</Label>
                            <Input />

                            <Label>장르</Label>
                            <Input />
                        </>
                    )}


                    {/* {type === "book" && (
    <>
        <Label>책 제목</Label>
        <Input name="bookName" onChange={handleChange} />
        <Label>작가</Label>
        <Input name="author" onChange={handleChange} />
        <Label>장르</Label>
        <Input name="genre" onChange={handleChange} />
    </>
)}
{type === "user" && (
    <>
        <Label>아이디</Label>
        <Input name="username" onChange={handleChange} />
        <Label>비밀번호</Label>
        <Input name="password" type="password" onChange={handleChange} />
        <Label>이름</Label>
        <Input name="name" onChange={handleChange} />
        <Label>성별</Label>
        <Input name="gender" onChange={handleChange} />
        <Label>생년월일</Label>
        <Input name="birthdate" type="date" onChange={handleChange} />
    </>
)} */}

                    {/* 아이디
비밀번호
이름
성별
생년월일 */}

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
                            <Input />

                            <Label>비밀번호</Label>
                            <Input type="password" />

                            <Label>이름</Label>
                            <Input />

                            <Label>성별</Label>
                            <Input />

                            <Label>생년월일</Label>
                            <Input type="date" />
                        </>
                    )}
                    <ModalBtn onClick={handleSubmit}>확인</ModalBtn>
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
    /* width: 400px; */
    /* height: 200px; */
    width: 40%;
    max-width: 400px;
    min-width: 400px;
    height: 35vh;
    min-height: 200px;
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

const ModalBtn = styled.button`
    width: 100px;
    height: 30px;
    border: 2px solid black;
    border-radius: 8px;
    position: absolute;
    bottom: 20px;
    right: 20px;
`




// const Label = styled.label`
//     margin: 10px 0 5px;
// `;

// const Input = styled.input`
// width: 80%;
// padding: 5px;
// margin-bottom: 10px;
// border: 1px solid #ccc;
// border-radius: 4px;
// `;