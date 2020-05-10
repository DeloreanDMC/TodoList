import { put, call } from 'redux-saga/effects';
import { getUserDate } from '../../HTTPprovider/HTTPprovider';
import { logoutOfline, getMe } from '../ActionCreators/ActionCreators';
// Логика обновления данных о пользователе
export function* sagaUpdateUser() {
    try {
        const {data} = yield call(getUserDate);
        yield put(getMe(data.name,data.role));
    } catch(e) {
        const status = (e.response && e.response.status) || 500;
        // Если ошибка аутентификации  
        if (status===401) {
            yield put(logoutOfline());
        } 
    }
}