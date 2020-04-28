import { LOGIN, LOGOUT } from "../Constants/types";

// Данные о пользователе по умолчанию
const initialUser = (()=>{
    const userSavedData = localStorage['busy-list-user'];
    if (userSavedData ) {
        return JSON.parse(userSavedData);
    } else {
        return {
            authorized:false,
            name:'',
            role:''
        };
    } 
})()


// Преобразователь данных пользователя
export const userReducer = (state = initialUser, action) => {
    switch(action.type) {
        case LOGIN: return {
            ...state,
            name: action.username,
            role:     action.role,
            authorized: true
        };
        case LOGOUT: return {
            ...state,
            authorized: false
        };
        default: return state;
    }
}