import { put, call } from 'redux-saga/effects';
import { showLoader, hideLoader, initAuth, showAlert, authed, hideAlert, logoutOfline} from '../ActionCreators/ActionCreators';
import { userLogin, userLogout} from '../../HTTPprovider/HTTPprovider';

// Логика действий аутентификации
export function* sagaLogin({username,password}) {    
    try {
        yield put(showLoader());                                // Отобразить загрузку
        const {data} = yield call(userLogin,username,password); // Отправить запрос
        yield put(authed(data.name,data.role))                  // Сохранить данные ответа
        yield put(hideLoader());                                // Скрыть загрузку
        yield put(hideAlert());                                 // Спрятать сообщения об ошибках
        yield put(initAuth());
    } catch(e) {
        // Если ошибка пришла с сервера - достать сообщение иначе ОШИЬКА СЕРВЕРА
        const status = (e.response && e.response.data.message) || "SERVER ERROR";
        yield put(hideLoader());                                // Скрыть загрузку
        yield put(showAlert(status))                            //  сообщения об ошибках
    }
}

// Логика выхода из аккаунта
export function* sagaLogout() {
    try {
        yield put(showLoader());    // Отобразить загрузку
        yield call(userLogout);     // Отправить POST '/logout'на сервер 
    } finally {
        yield put(logoutOfline());  // Изменить состояние хрнилища
        yield put(hideLoader());    // Скрыть загрузку
    }
}
