import {LOGIN, LOGOUT, SHOW_LOADER, HIDE_LOADER} from '../Constants/types';
import {userLogin,userLogout} from '../../HTTPprovider/HTTPprovider';

// Создает действие авторизации
export function login(username,password) {
    return async dispatch => {
        dispatch(showLoader());
        userLogin(username,password)
        .then(({data}) => {
            console.log('ACTION CREATOR');
            console.log(data);
            dispatch({
                type:LOGIN,
                username:data.name,
                role:data.role
            })
            dispatch(hideLoader());
        })
    }
}

// Создает действие выхода из аккаунта
export function logout() {
    return async dispatch => {
        dispatch(showLoader());
        userLogout()
        .finally(()=> {
            dispatch({type:LOGOUT})
            dispatch(hideLoader())
        })
    }
}

// Показать загрузку
export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

// Скрыть загрузку
export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
};