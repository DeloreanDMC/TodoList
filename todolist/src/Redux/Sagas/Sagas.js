import { takeEvery } from 'redux-saga/effects';
import { LOGIN, LOGOUT, GET_ME } from '../Constants/types';

import { sagaUpdateUser } from './userSagas';
import { sagaLogin, sagaLogout } from './authSagas';

export function* sagaWatcher() {
    yield takeEvery(LOGIN,sagaLogin);
    yield takeEvery(LOGOUT,sagaLogout);
    yield takeEvery(GET_ME,sagaUpdateUser);
}


