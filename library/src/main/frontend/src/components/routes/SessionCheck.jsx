import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const SessionCheck = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const id = sessionStorage.getItem('id');
        if (!id) {
            alert("로그인이 필요합니다.")
            navigate("/")
        }
    }, [navigate])
}

export default SessionCheck;