import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import { appReducer } from "./appReducer";
import { todosReducer } from "./todosReducer";

// Корневой преобразователь
export const rootReducer = combineReducers({
    user:userReducer,
    app:appReducer,
    todos:todosReducer
});
