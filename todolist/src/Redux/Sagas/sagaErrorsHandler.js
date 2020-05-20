import {call, put} from 'redux-saga/effects';
import {createBrowserHistory} from 'history';
import { POST_TASK, LOGIN, PUT_TASK } from '../Constants/types';
import { setTaskError, globalError, showAlert, logoutOfline } from '../ActionCreators/ActionCreators';


export default function* sagaErrorsHandler(err,...args) {
    const history = createBrowserHistory();

    const [action] = args;
    const {data, status} = err.response;
    
    // Если ошибка аутентификации - выкидываем на логин
    if (+status === 401) {
        return yield put(logoutOfline());
    }

    let message = status + " " + (data ? data.message: "Server error");
    
    // Ошибки сервера - отправляем в Error Boundary
    if (status>=500) {
        return yield put(globalError(message));
    }

    switch(action.type) {
        case LOGIN:  
            //  сообщения об ошибках
            yield put(showAlert(message)); 
        break;
        case POST_TASK: 
            if (action.newdata!=="done") { 
                yield call(()=>history.goBack()); 
                yield put(setTaskError(message))
            }
        break;
        case PUT_TASK:  
            yield call(()=>history.goBack()); 
            yield put(setTaskError(message))
        break;
        default: return;
    }
}