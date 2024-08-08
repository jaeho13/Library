import styled from "styled-components";

export const BoardBind = styled.div`
    display: flex;
    flex-direction: row;
`

export const BookRentListBind = styled.div`
    width: 100%;
    height: 60vh;
    border-bottom: 2px solid black
`

export const BookRentList = styled.div`
    height: 5vh;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const BookName = styled.div`
    width: 15%;
    height: 5vh;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BookId = styled.div`
    width: 15%;
    height: 5vh;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BookTitle = styled.div`
    width: 40%;
    height: 5vh;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BookRentDay = styled.div`
    width: 15%;
    height: 5vh;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BookRentReturn = styled.div`
    width: 15%;
    height: 5vh;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PaginationContainer = styled.div`
    width: 100%;
    height: 5vh;
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