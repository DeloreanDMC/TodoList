import {createStore, compose, applyMiddleware} from 'redux';
import {rootReducer} from '../Reducers/rootReducer';
import thunk from 'redux-thunk'

const tokenSaver = store => next => action => {
    const result = next(action);
    localStorage['busy-list-user'] = JSON.stringify(store.getState().user);
    return result;
}

// Фабрика хранилища
const storeCreator = () => {
    return createStore(
        rootReducer,
        compose(
            applyMiddleware(
                thunk,
                tokenSaver
            ),
            // devtools
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ),

    );
};

export default storeCreator;