import {createStore, compose, applyMiddleware} from 'redux';
import {rootReducer} from '../Reducers/rootReducer';
import thunk from 'redux-thunk'
import {tokenSaver} from './middlewares';

// Фабрика хранилища
const storeCreator = () => {
    return createStore(
        rootReducer,
        compose(
            applyMiddleware(
                thunk,
                tokenSaver
            ),
            window.__REDUX_DEVTOOLS_EXTENSION__ 
            && window.__REDUX_DEVTOOLS_EXTENSION__()
        ),

    );
};

export default storeCreator;