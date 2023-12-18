import { Outlet } from "react-router-dom";
import Navbar from "@components/navbar/navbar";
import LeftBar from "@components/leftBar/leftBar";
import RightBar from "@components/rightBar/rightBar";
import { useContext } from "react";
import { DarkModeContext } from "@context/darkModeContext";

export default function DefaultLayout(){

    const {darkMode} = useContext(DarkModeContext)
    
    return(
        <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
            <Navbar/>
            <div style={{display:'flex'}}>
                <LeftBar/>
                <div style={{flex: 6 }}>
                    <Outlet/>
                </div>
                <RightBar/>
            </div>
        </div>
    )
}