import * as types from "./actionTypes";

const signUpstate = {
    userData: {},
    isAuthenticated: false,
    isLoading: false,
    isError: false,
}

export const userreducer= (state=signUpstate,action) =>{
  
    const {type,payload}= action;

    switch(type){
    
        case types.REGISTER_USER_REQUEST:
         
            return{
              ...state,
              isLoading:true,
              isAuthenticated:false,
            }
  
        case types.REGISTER_USER_SUCCESS:
  
            return{
                ...state,
                isLoading: false,
                isAuthenticated: false,
                user: payload,
            }
        
        case types.REGISTER_USER_FAILURE:
            return{
                ...state,
                isLoading: false,
                isAuthenticated:false,
                user: null,
                isError: true
            }

            case types.LOGIN_REQUEST:
                return{
                    ...state,
                    isLoading: true,
                    isAuthenticated:false,
                }
             case types.LOGIN_SUCCESS:
                return{
                    ...state,
                    isLoading: false,
                    isAuthenticated:true,
                    user: payload
                } 
             case types.LOGIN_FAILURE:
                return{
                    ...state,
                    isLoading: false,
                    isAuthenticated:false,
                    isError:true
                }     
        default:
            return state
    }

}
