import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/HomePage"
import { Login } from "../Pages/Login"
import { SignUp } from "../Pages/Signup"


const AllRoutes=()=>{
return (
    <Routes>
        <Route path="/" element={ <Home /> }  />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
    </Routes>
)
};

export default AllRoutes