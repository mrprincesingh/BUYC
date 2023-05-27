import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute =({children}) => {
  const {isAuthenticated}= useSelector((store) => store.AuthReducer);
  const location= useLocation();
  //console.log("Inside Require Auth",location)

  if(!isAuthenticated ){
    return <Navigate to="/login" replace state={{data: location.pathname}} />
  }
 return children
}

export default ProtectedRoute