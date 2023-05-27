import {legacy_createStore,combineReducers,compose,applyMiddleware} from "redux";
import thunk from "redux-thunk";

import {userreducer as AuthReducer} from "./Auth/reducer";

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer=combineReducers({
    
    AuthReducer,
});

let initialState={};

const store= legacy_createStore(rootReducer,initialState,composeEnhancers(applyMiddleware(thunk)));

export {store};