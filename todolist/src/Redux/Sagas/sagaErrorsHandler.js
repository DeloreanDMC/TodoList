import {call} from 'redux-saga/effects';
import {createBrowserHistory} from 'history';
import { POST_TASK, CHANGE_TASK, PUT_TASK } from '../Constants/types';


export default function* sagaErrorsHandler(err,...args) {
    const history = createBrowserHistory();

    console.log("sagaErrorsHandler");
    const [action] = args;
    console.log(action);
    switch(action.type) {
        case POST_TASK: console.log(POST_TASK); yield call(()=>history.goBack()); break;
        case PUT_TASK:  console.log(PUT_TASK); yield call(()=>history.goBack()); break;
    }
}