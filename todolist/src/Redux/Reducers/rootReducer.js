import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import { appReducer } from "./appReducer";

// Корневой преобразователь

export const rootReducer = combineReducers({
    user:userReducer,
    app:appReducer
});
