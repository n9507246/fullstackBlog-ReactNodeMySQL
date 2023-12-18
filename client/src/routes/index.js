import {
    createBrowserRouter,
  } from "react-router-dom"
  
  
import profileRoutes from "@routes/profile/profileRoutes"
import authRoutes from "@routes/auth/authRoutes"

export default createBrowserRouter([
    ...authRoutes,
    ...profileRoutes,
])