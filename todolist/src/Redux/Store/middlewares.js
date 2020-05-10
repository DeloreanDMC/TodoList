export const tokenSaver = store => next => action => {
    const result = next(action);
    localStorage['busy-list-user'] = JSON.stringify(store.getState().user);
    return result;
};