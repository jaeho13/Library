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

export const Label = styled.label`
    width: 80%;
    text-align: start;
    margin-bottom: 3px;
`

export const Input = styled.input`
    width: 80%;
    padding: 5px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
`

export const Select = styled.select`
    width: 83%;
    padding: 5px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
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