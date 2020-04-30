import {takeEvery, put, call} from 'redux-saga/effects';
import { REQUEST_LOGIN,REQUEST_LOGOUT, REQUEST_GET_ME } from '../Constants/types';
import { showLoader, hideLoader, showAlert, authed, hideAlert, logoutOfline, getMe } from '../ActionCreators/ActionCreators';
import { userLogin, userLogout, getUserDate } from '../../HTTPprovider/HTTPprovider';

export function* sagaWatcher() {
    yield takeEvery(REQUEST_LOGIN,sagaLogin);
    yield takeEvery(REQUEST_LOGOUT,sagaLogout);
    yield takeEvery(REQUEST_GET_ME,sagaUpdateUser);
}

// Логика действий аутентификации
function* sagaLogin({username,password}) {    
    try {
        yield put(showLoader());                                // Отобразить загрузку
        const {data} = yield call(userLogin,username,password); // Отправить запрос
        yield put(authed(data.name,data.role))                  // Сохранить данные ответа
        yield put(hideLoader());                                // Скрыть загрузку
        yield put(hideAlert());                                 // Спрятать сообщения об ошибках
    } catch(e) {
        // Если ошибка пришла с сервера - достать сообщение иначе ОШИЬКА СЕРВЕРА
        const status = (e.response && e.response.data.message) || "SERVER ERROR";
        yield put(hideLoader());                                // Скрыть загрузку
        yield put(showAlert(status))                            // Спрятать сообщения об ошибках
    }
}

// Логика выхода из аккаунта
function* sagaLogout() {
    try {
        yield put(showLoader());    // Отобразить загрузку
        yield call(userLogout);     // Отправить POST '/logout'на сервер 
    } finally {
        yield put(logoutOfline());  // Изменить состояние хрнилища
        yield put(hideLoader());    // Скрыть загрузку
    }
}

// Логика обновления данных о пользователе
function* sagaUpdateUser() {
    try {
        const data = yield call(getUserDate);
        yield put(getMe(data.name,data.role));
    } catch(e) {
        const status = (e.response && e.response.status) || 500;
        // Если ошибка аутентификации  
        if (status===401) {
            yield put(logoutOfline());
        } 
    }
}