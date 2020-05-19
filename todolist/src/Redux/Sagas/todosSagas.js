import { put, call, select } from 'redux-saga/effects';
import { getTodos, postTodo, deleteTodo, putTodo } from '../../HTTPprovider/HTTPprovider';

import { setTodos, showLoader, hideLoader, createTask, setMemTask, setTask } from '../ActionCreators/ActionCreators';
import sagaErrorsHandler from './sagaErrorsHandler';
import ErrorDecorator from './ErrorDecorator';
import {sagaCreator} from './sagaCreator';

// Получить список задачик
export const sagaGetTodos = sagaCreator( 
    function* () {
        yield put(showLoader());
        const {data} = yield call(getTodos);
        yield put(setTodos(data));
        yield put(hideLoader());
    }
);

// Создать новую ззадачку
export const sagaNewTask = sagaCreator(
    function* ({body}) {
        yield put(setMemTask(body));
        yield put(showLoader());
        const {data} = yield call(postTodo, body);
        yield put(createTask(data));    
    }
);

// Удалить задачу 
export const sagaDeleteTask = sagaCreator(
    function* ({id}) {
        yield put(showLoader());
        yield call(deleteTodo, id);   
    }
);

// Изменить задачу
export const sagaChangeTask = sagaCreator( 
    function* ({id,newdata}) {
        yield put(setMemTask(newdata));
        yield put(showLoader());
        yield call(putTodo, id, newdata);
        yield put(setTask(id,newdata));
    }
); 