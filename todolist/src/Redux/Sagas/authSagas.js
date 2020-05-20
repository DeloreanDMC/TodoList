import { put, call } from 'redux-saga/effects';
import { showLoader, hideLoader, initAuth, authed, hideAlert, logoutOfline} from '../ActionCreators/ActionCreators';
import { userLogin, userLogout} from '../../HTTPprovider/HTTPprovider';
import {sagaCreator, sagaFinalCreator} from './sagaCreator';

// Логика действий аутентификации
export const sagaLogin = sagaCreator(
    function* ({username,password}) {    
        yield put(showLoader());                                // Отобразить загрузку
        const {data} = yield call(userLogin,username,password); // Отправить запрос
        yield put(authed(data.name,data.role))                  // Сохранить данные ответа
        yield put(hideLoader());                                // Скрыть загрузку
        yield put(hideAlert());                                 // Спрятать сообщения об ошибках
        yield put(initAuth());
    }
);


// Логика выхода из аккаунта
export const sagaLogout = sagaFinalCreator(
    function* () {
        yield put(logoutOfline());  // Изменить состояние хрнилища
        yield put(hideLoader());    // Скрыть загрузку
    }
)(
    function* () {
        yield put(showLoader());    // Отобразить загрузку
        yield call(userLogout);     // Отправить POST '/logout'на сервер 
    }
);
