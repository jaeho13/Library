import styled from "styled-components"


export const BoardBind = styled.div`
    display: flex;
    flex-direction: row;
`

export const BookInfoBind = styled.div`
    width: 100%;
    height: 60vh;
    border-bottom: 2px solid black;
`

export const BookManage = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const BookAdd = styled.div`
    width: 10%;
    height: 5vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2%;
`

export const BookRemove = styled.div`
    width: 10%;
    height: 5vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2%;
`


export const BookSearch = styled.input`
    width: 30%;
    height: 5vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2%;
    font-size: 20px;
`

export const BookSearchConfirm = styled.div`
    width: 10%;
    height: 5vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2%;
`

export const ColorListBind = styled.div`
    width: 15%;
    min-width: 100px;
    display: flex;
    margin-left: auto;
`


export const BookColorList = styled.div`
    width: 30px;
    height: 3vh;
    margin-left: 10px;
    background-color: cornflowerblue;
`

export const BookColorListinfo = styled.div`
    margin-left: 10px;
`

export const BookInfoListHeader = styled.div`
    height: 5vh;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const BookInfoList = styled.div`
    height: 5vh;
    border-bottom: 2px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const BookCheck = styled.div`
    width: 5%;
    height: 5vh;
    border-right: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BookTitle = styled.div`
    width: 35%;
    height: 5vh;
    border-right: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.status === 1 ? 'white' : 'black'};
    background-color: ${props => props.status === 1 ? 'cornflowerblue' : 'transparent'};
`

export const BookWriter = styled.div`
    width: 25%;
    height: 5vh;
    border-right: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.status === 1 ? 'white' : 'black'};
    background-color: ${props => props.status === 1 ? 'cornflowerblue' : 'transparent'};
`

export const BookGenre = styled.div`
    width: 15%;
    height: 5vh;
    border-right: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.status === 1 ? 'white' : 'black'};
    background-color: ${props => props.status === 1 ? 'cornflowerblue' : 'transparent'};
`

export const BookDate = styled.div`
    width: 20%;
    height: 5vh;
    border-right: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.status === 1 ? 'white' : 'black'};
    background-color: ${props => props.status === 1 ? 'cornflowerblue' : 'transparent'};
`

export const PaginationContainer = styled.div`
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .pagination {
        display: flex;
        list-style: none;
        padding: 0;
    }

    .pagination li {
        margin: 0 5px;
        cursor: pointer;
    }

    .pagination li.active {
        font-weight: bold;
    }
`
