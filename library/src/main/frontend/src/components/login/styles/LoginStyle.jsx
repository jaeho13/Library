import styled from "styled-components"

export const LoginBind = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 2px solid red; */
    flex-direction: column;
`

export const LibraryLogo = styled.div`
    width: 30%;
    max-width: 400px;
    min-width: 400px;
    height: 10vh;
    min-height: 100px;
    border: 2px solid red;
`

export const AccountCheck = styled.div`
    width: 30%;
    max-width: 400px;
    min-width: 400px;
    height: 20vh;
    min-height: 200px;
    border: 2px solid blue;
    margin-bottom: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const InputBind = styled.div`
    width: 60%;
    height: 18vh;
    min-height: 180px;
    /* border: 2px solid black; */
    display: flex;
    flex-direction: column;
    /* justify-content: space-evenly; */
    justify-content: center;

    align-items: center;
`

export const IdBind = styled.div`
    width: 100%;
    height: 10vh;
    min-height: 100px;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const IdName = styled.div`
    width: 100%;
    height: 2vh;
    min-height: 20px;
    /* border: 2px solid black; */
`

export const IdInput = styled.input`
    width: 95%;
    height: 4vh;
    min-height: 40px;
    /* border: 2px solid black; */
    border-radius: 10px;
`

export const PasswordBind = styled.div`
    width: 100%;
    height: 10vh;
    min-height: 100px;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const PasswordName = styled.div`
    width: 100%;
    height: 2vh;
    min-height: 20px;
    /* border: 2px solid black; */
`

export const PasswordInput = styled.input`
    width: 95%;
    height: 4vh;
    min-height: 40px;
    border: 2px solid black;
    border-radius: 10px;
`

export const IdCheck = styled.button`
    width: 30%;
    max-width: 100px;
    min-height: 100px;
    height: 10vh;
    min-height: 100px;
    border: 2px solid purple;
    font-size: 1.5rem;
    cursor: pointer;
`