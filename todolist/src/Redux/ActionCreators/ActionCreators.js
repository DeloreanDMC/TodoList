import {LOGIN, LOGOUT, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, GET_ME, REQUEST_LOGIN, REQUEST_LOGOUT,REQUEST_GET_ME} from '../Constants/types';
// Создает действие авторизации
export function login(username,password) {
    return {
        type: REQUEST_LOGIN,
        username,
        password
    };
}

// Установить загруженны данные о пользователе
export function authed(username,role) {
    return {
        type:LOGIN,
        username,
        role
    };
}

// Создает действие выхода из аккаунта
export function logout() {
   return {
       type: REQUEST_LOGOUT
   };
}

// Выход без отправки собщения серверу
export function logoutOfline() {
    return { 
        type:LOGOUT
    };
}

// Загрузить данные о пользователе с сайта
export function updateUserDate() {
    return {
        type:REQUEST_GET_ME
    };
}

// Обновить данны о пользователе в хранилище
export function getMe(username,role) {
    return {
        type:GET_ME,
        username,
        role
    };
}

// Показать загрузку
export function showLoader() {
    return {
        type: SHOW_LOADER
    };
}

// Скрыть загрузку
export function hideLoader() {
    return {
        type: HIDE_LOADER
    };
};

// Отобразить сообщение
export function showAlert(text) {
    return {
            type:SHOW_ALERT,
            payload:text
    };
}

// Спрятать сообщение
export function hideAlert() {
    return {
        type:HIDE_ALERT
    };
}