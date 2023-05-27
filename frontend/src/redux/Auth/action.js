import * as types from "./actionTypes";
import axios from "axios";


export const register = (userData) => async (dispatch) => {
  dispatch({ type: types.REGISTER_USER_REQUEST });

  axios
    .post("https://byucbackend.vercel.app/api/v1/register", userData)
    .then((res) => {
      dispatch({type: types.REGISTER_USER_SUCCESS, payload: res.data.user})
      console.log(res.data.user)
    }).catch((err)=>{
      dispatch({ type: types.REGISTER_USER_FAILURE });
      
    });
};

export const Loginuser = (userdata) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });

  axios
    .post("https://byucbackend.vercel.app/api/v1/login", userdata)
    .then((res) => {
      dispatch({type: types.LOGIN_SUCCESS, payload:res.data})
      console.log(res)
    }).catch((err)=>{
      dispatch({ type: types.LOGIN_FAILURE });
      
    });
};
