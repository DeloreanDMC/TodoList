import {GET_TODOS, LOAD_USERS} from '../Constants/types';

export const tokenSaver = store => next => action => {
    const result = next(action);
    localStorage['busy-list-user'] = JSON.stringify(store.getState().user);
    return result;
};


// Следующее время отправки запроса
const nextRequestTime = {
    [GET_TODOS]:null,
    [LOAD_USERS]:null
};

// Пора ли обновлять данные
function isDataFoul(key) {
    // Если запрос первый - отправляем
    if (nextRequestTime[key] == null) {
        return true;
    }
    // Можно ли уже отправлять?
    return new Date() >= nextRequestTime[key];
}

export const shouldDoRequest = store => next => action => {
    if (action.type in nextRequestTime) {
       if (!isDataFoul(action.type)) return;
        // Следующее обновление станет доступным через 30 секунд
        nextRequestTime[action.type] = new Date(+new Date() + 1000*30);
    }
    next(action);
}
