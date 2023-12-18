import { useNavigate } from "react-router-dom"
import useAuth from "@hooks/AuthHook"

export default function(){

    const {login} = useAuth()
    const navigate = useNavigate()
    return(
        <button onClick={
            (e) => {
                e.preventDefault()
                login()
                navigate('/', {replace:true})
            }
        }>Login</button>
    )
}