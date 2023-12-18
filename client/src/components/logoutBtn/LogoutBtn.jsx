import { useNavigate } from "react-router-dom"
import useAuth from "@hooks/AuthHook";

export default function(){
    const {logout} = useAuth() 
    const navigate = useNavigate()
    return(
        <button onClick={(e) => {
            e.preventDefault();
            if(confirm("Выйти из аккаунта?")){
              logout()
              navigate('/login', {replace:true})
            }
            
          }}>Logout</button>
    )
}