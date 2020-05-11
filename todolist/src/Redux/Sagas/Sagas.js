import { takeEvery } from 'redux-saga/effects';
import { LOGIN, LOGOUT, GET_ME, GET_TODOS, POST_TASK, DELETE_TASK, CREATE_TASK, CHANGE_TASK } from '../Constants/types';

import { sagaUpdateUser } from './userSagas';
import { sagaLogin, sagaLogout } from './authSagas';
import { sagaGetTodos, sagaNewTask, sagaDeleteTask, sagaChangeTask } from './todosSagas';

export function* sagaWatcher() {
    yield takeEvery(LOGIN,sagaLogin);
    yield takeEvery(LOGOUT,sagaLogout);
    yield takeEvery(GET_ME,sagaUpdateUser);
    yield takeEvery(GET_TODOS, sagaGetTodos);
    yield takeEvery(POST_TASK, sagaNewTask);
    yield takeEvery(DELETE_TASK, sagaDeleteTask);
    yield takeEvery(CHANGE_TASK, sagaChangeTask);
}


