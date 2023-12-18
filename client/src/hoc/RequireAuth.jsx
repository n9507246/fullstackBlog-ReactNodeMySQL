import { Navigate} from 'react-router-dom'
import { Outlet } from "react-router-dom";
import useAuth from '@hooks/AuthHook';

export default function ({children}){

    const {currentUser} = useAuth()
    
    if(currentUser === null){
        return <Navigate to='/login' state={{from: location.pathname}}/>
    }
    else{
        if(children === undefined) return <Outlet/>
        else return children;
    }
    
}
