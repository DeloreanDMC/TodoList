import {LOGIN, LOGOUT, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, GET_ME} from '../Constants/types';
import {userLogin,userLogout, getUserDate} from '../../HTTPprovider/HTTPprovider';

// Создает действие авторизации
export function login(username,password) {
    return async dispatch => {
        dispatch(showLoader());
        userLogin(username,password)
        .then(({data}) => {
            console.log("ACTION CREATOR");
            console.log(data);
            dispatch({
                type:LOGIN,
                username:data.name,
                role:data.role
            })
            dispatch(hideLoader());
            dispatch(hideAlert());
        })
        .catch(e=>{
            const status = 
                e.response 
                ?   e.response.data 
                    ?   e.response.data.message
                    :   e.response.statusText
                :   "SERVER ERROR"
                ;
            dispatch(hideLoader());
            dispatch(showAlert(status))
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

// Выход без отправки собщения серверу
export function logoutOfline() {
    return {type:LOGOUT};
}

// Загрузить данные о пользователе с сайта
export function updateUserDate() {
    return dispatch => {
       
        getUserDate()
        .then(({data})=>{
            dispatch({
                type:GET_ME,
                username: data.name,
                role: data.role
            });
        })
        .catch(e=>{
            const status = (e.response && e.response.status) 
                            || 500;
            if (status===401) dispatch(logoutOfline());
            
        });
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

// Отобразить сообщение
export function showAlert(text) {
    return dispatch => { 
        dispatch({
            type:SHOW_ALERT,
            payload:text
        })
    }   
}

// Спрятать сообщение
export function hideAlert() {
    return {
        type:HIDE_ALERT
    }
}