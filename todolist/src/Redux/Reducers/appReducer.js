import { SHOW_LOADER,SET_USERS, SET_PASSWORD, INIT_AUTH, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, SET_USERNAME } from "../Constants/types";

const initialState = {
    loading: false,
    users:[],
    loginInput: {
        username:"",
        password:""
    },
    error:null
};


export const appReducer = (state = initialState,action) => {
    switch(action.type) {
        case SHOW_LOADER: return {
            ...state,
            loading:true
        };
        case HIDE_LOADER: return {
            ...state,
            loading:false
        };
        case SHOW_ALERT: return {
            ...state,
            alert:action.payload
        };
        case HIDE_ALERT: return {
            ...state,
            alert:null
        }
        case SET_USERNAME: return {
            ...state,
            loginInput: {
                ...state.loginInput,
                username:action.payload
            }
        };
        case SET_PASSWORD: return {
            ...state,
            loginInput: {
                ...state.loginInput,
                password:action.payload
            }
        };
        case INIT_AUTH: return {
            ...state,
            loginInput: {
                username:"",
                password:""
            }
        };
        case SET_USERS: return {
            ...state,
            users:action.payload
        };

        default: return state;
    }
}