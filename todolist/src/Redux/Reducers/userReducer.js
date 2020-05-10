import { AUTH, CLOSE, SET_ME } from "../Constants/types";

// Данные о пользователе по умолчанию
const initialUser = (()=>{
    const userSavedData = localStorage['busy-list-user'];
    if (userSavedData) {
        return {...JSON.parse(userSavedData),needUpdate:true};
    } else {
        return {
            authorized:false,
            needUpdate:false,
            name:'',
            role:''
        };
    } 
})()


// Преобразователь данных пользователя
export const userReducer = (state = initialUser, action) => {
    switch(action.type) {
        case AUTH: return {
            ...state,
            name: action.username,
            role:     action.role,
            authorized: true,
            needUpdate:false
        };
        case CLOSE: return {
            ...state,
            authorized: false
        };
        case SET_ME: return {
            ...state,
            needUpdate:false,
            name: action.username,
            role: action.role
        };

        default: return state;
    }
}