import {createStore, compose, applyMiddleware} from 'redux';
import {rootReducer} from '../Reducers/rootReducer';
import thunk from 'redux-thunk'
import {tokenSaver} from './middlewares';
import createSagaMiddleware from 'redux-saga';
import { sagaWatcher } from '../Sagas/Sagas';


const saga = createSagaMiddleware();

// Фабрика хранилища
const storeCreator = () => {
   
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(
                thunk,
                tokenSaver,
                saga
            ),
            window.__REDUX_DEVTOOLS_EXTENSION__ 
            && window.__REDUX_DEVTOOLS_EXTENSION__()
        ),

    );
    saga.run(sagaWatcher);
    return store;
};




export default storeCreator;