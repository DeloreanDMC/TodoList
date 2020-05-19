import {sagaErrorWrapper} from './ErrorDecorator';
import sagaErrorsHandler from './sagaErrorsHandler';
import {put} from 'redux-saga/effects';
import {hideLoader} from '../ActionCreators/ActionCreators';

export const sagaCreator = sagaErrorWrapper( 
    function* () { 
        yield put(hideLoader());
    },
    sagaErrorsHandler,
    err => err.response.status >= 500
);
