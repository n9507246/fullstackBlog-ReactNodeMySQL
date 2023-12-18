import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext()
export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('TOKEN')) || null
    )

    useEffect(()=>{
        localStorage.setItem('TOKEN', JSON.stringify(currentUser))
    }, [currentUser])

    const login = () => {
        setCurrentUser(
            {
                id: 1, 
                name: 'BAD ASS', 
                profile_picture: 'https://yobte.ru/uploads/posts/2019-11/znojnye-krasotki-113-foto-22.jpg'
            })
    } 
    const logout = () => {
        setCurrentUser(null)
    } 


    return <AuthContext.Provider value={{currentUser, login, logout}}>{children}</AuthContext.Provider>

}