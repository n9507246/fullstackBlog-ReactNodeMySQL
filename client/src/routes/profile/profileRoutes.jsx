 
import DefaultLayout from "@layouts/DefaultLayout"
import Home from "@pages/home/Home"
import Profile from "@pages/profile/Profile"
import RequireAuth from "../../hoc/RequireAuth"

export default [ 
  {
    element: <RequireAuth><DefaultLayout/></RequireAuth>,
    children:[
      {path: '/', element:<Home/>},
      {path: '/profile/:id', element:<Profile/>},
      
    ]
  }
]