import styled from "styled-components";

export const ModalBackground = styled.div`
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

export const ModalWindow = styled.div`
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

export const ModalConfirmBtn = styled.button`
    width: 100px;
    height: 30px;
    border: 2px solid black;
    border-radius: 8px;
    position: absolute;
    bottom: 20px;
    right: 140px;
    cursor: pointer;
`

export const ModalCancelBtn = styled.button`
    width: 100px;
    height: 30px;
    border: 2px solid black;
    border-radius: 8px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
`