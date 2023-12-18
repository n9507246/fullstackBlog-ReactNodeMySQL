import { Navigate} from 'react-router-dom'
import { Outlet } from "react-router-dom";
import useAuth from '@hooks/AuthHook';

export default function ({children}){

    const {currentUser} = useAuth() 
    const user = currentUser;

    if(user === null && children === undefined){
        return < Outlet />
    }
    
    if(user === null && children !== undefined){
        return children
    }

    return <Navigate to='/' state={{from: location.pathname}}/>
}
