import { put, call, select } from 'redux-saga/effects';
import { getTodos, postTodo, deleteTodo, putTodo } from '../../HTTPprovider/HTTPprovider';

import { setTodos, showLoader, hideLoader, createTask } from '../ActionCreators/ActionCreators';
import { getTodosSelect } from '../Selectors/Selectors';


// Получить список задачик
export function* sagaGetTodos() {
    const {array} = yield select(getTodosSelect);
    if (array.length===0) {
        yield put(showLoader());
    }
    const {data} = yield call(getTodos);
    data.sort((a)=>a.description!=="done"?-1:1);
    yield put(setTodos(data))
    yield put(hideLoader());
}

// Создать новую ззадачку
export function* sagaNewTask({body}) {
    yield put(showLoader());
    const {data} = yield call(postTodo, body);
    yield put(createTask(data));
    yield put(hideLoader());
}

// Удалить задачу 
export function* sagaDeleteTask({id}) {
    yield call(deleteTodo, id);   
}

// Изменить задачу
export function* sagaChangeTask({id,newdata}) {
    yield call(()=>putTodo(id,newdata));
}