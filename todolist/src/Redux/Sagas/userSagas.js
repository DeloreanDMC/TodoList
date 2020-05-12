import { put, call, select } from 'redux-saga/effects';
import { getUserDate, getUsers } from '../../HTTPprovider/HTTPprovider';
import { logoutOfline, getMe, saveUsers, showLoader, hideLoader } from '../ActionCreators/ActionCreators';
import { allUsers } from '../Selectors/Selectors';

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

// Логика загрузки данных о всех пользователях
export function* sagaLoadUsers() {
    const users = yield select(allUsers);
    if (users.length === 0) {
        yield put(showLoader());
    }
    const {data} = yield call(getUsers);
    yield put(saveUsers(data));
    yield put(hideLoader());


}