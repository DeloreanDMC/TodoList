import { put, call } from 'redux-saga/effects';
import { getUserDate, getUsers } from '../../HTTPprovider/HTTPprovider';
import { getMe, saveUsers, showLoader, hideLoader } from '../ActionCreators/ActionCreators';
import {sagaCreator} from './sagaCreator';

// Логика обновления данных о пользователе
export const sagaUpdateUser = sagaCreator(
    function* sagaUpdateUser() {
            const {data} = yield call(getUserDate);
            yield put(getMe(data.name,data.role));
    }
);

// Логика загрузки данных о всех пользователях
export const sagaLoadUsers = sagaCreator(
    function* sagaLoadUsers() {
        yield put(showLoader());
        const {data} = yield call(getUsers);
        yield put(saveUsers(data));
        yield put(hideLoader());
    }
);