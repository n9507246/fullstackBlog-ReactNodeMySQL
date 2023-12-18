import Login from '@pages/login/Login'
import Register from '@pages/register/Register'
import GuestsRoute from '@hoc/GuestsRoute'

export default [
    {
        element: <GuestsRoute/>,
        children:[
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>,
            },
        ]
    }
]
