import { Route, Routes } from "react-router-dom"
import Home from "./component/Home/Home"
import SinglePageDetail from "./component/SinglePageDetail/SinglePageDetail"
import Profile from "./component/Profile/Profile"
import SignUp from "./component/Signup/SignUp"
import Login from "./component/Login/Login"
import ProtectedRoute from "./component/ProctedRoute/ProtectedRoute"

const MainRoute = () => {
  
    return (
      <Routes>

          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute> } />

          <Route path="/product/:id" element={<ProtectedRoute><SinglePageDetail /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    )
  }
  
  export default MainRoute