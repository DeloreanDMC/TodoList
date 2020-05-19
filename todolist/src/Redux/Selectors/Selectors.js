// Селекторы данных хранилищ
export const getLoading =     state => state.app.loading;
export const getAlert =       state => state.app.alert;
export const getLoginInput =  state => state.app.loginInput;
export const getName =        state => state.user.role;
export const getTodosSelect = state => state.todos;
export const getArray =       state => state.todos.array;
export const getRole =        state => state.user.name;
export const getFilter =      state => state.todos.filter;
export const isAdmin =        state => state.user.name === "SUPERUSER";
export const allUsers =       state => state.app.users;