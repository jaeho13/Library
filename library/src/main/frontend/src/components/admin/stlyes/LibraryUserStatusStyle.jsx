import styled from "styled-components";

export const BoardBind = styled.div`
    display: flex;
    flex-direction: row;
`

export const UserListBind = styled.div`
    width: 100%;
    height: 60vh;
    border-bottom: 2px solid black;
`

export const UserManage = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const UserAdd = styled.div`
    width: 10%;
    height: 5vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2%;
`

export const UserRemove = styled.div`
    width: 10%;
    height: 5vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2%;
`

export const UserListHeader = styled.div`
    height: 5vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
`

export const UserList = styled.div`
    height: 5vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-bottom: 2px solid black;
`

export const UserCheck = styled.div`
    width: 5%;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 2px solid black;
`

export const UserNumber = styled.div`
    width: 10%;
    height: 5vh;
    border-right: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const UserId = styled.div`
    width: 25%;
    height: 5vh;
    border-right: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const UserName = styled.div`
    width: 20%;
    height: 5vh;
    border-right: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const UserSex = styled.div`
    width: 20%;
    height: 5vh;
    border-right: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const UserAge = styled.div`
    width: 20%;
    height: 5vh;
    border-right: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
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
