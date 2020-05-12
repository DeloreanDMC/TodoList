import {LOGIN, CLOSE, SET_TODOS, POST_TASK, GET_TODOS ,LOGOUT,AUTH, SET_PASSWORD,INIT_AUTH, SHOW_LOADER, SET_USERNAME, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, SET_ME,GET_ME, FILTER_ME, CHANGE_TASK, CREATE_TASK, DELETE_TASK, LOAD_USERS, SET_USERS} from '../Constants/types';
// Создает действие авторизации
export function login(username,password) {
    return {
        type: LOGIN,
        username,
        password
    };
}

// Установить загруженны данные о пользователе
export function authed(username,role) {
    return {
        type:AUTH,
        username,
        role
    };
}

// Создает действие выхода из аккаунта
export function logout() {
   return {
       type: LOGOUT
   };
}

// Выход без отправки собщения серверу
export function logoutOfline() {
    return { 
        type:CLOSE
    };
}

// Загрузить данные о пользователе с сайта
export function updateUserDate() {
    return {
        type:GET_ME
    };
}

// Обновить данны о пользователе в хранилище
export function getMe(username,role) {
    return {
        type:SET_ME,
        username,
        role
    };
}

// Показать загрузку
export function showLoader() {
    return {
        type: SHOW_LOADER
    };
}

// Скрыть загрузку
export function hideLoader() {
    return {
        type: HIDE_LOADER
    };
};

// Отобразить сообщение
export function showAlert(text) {
    return {
            type:SHOW_ALERT,
            payload:text
    };
}

// Спрятать сообщение
export function hideAlert() {
    return {
        type:HIDE_ALERT
    };
}

// Установить имя пользователя
export function setUsername(username) {
    return { 
        type: SET_USERNAME,
        payload:username
    }
}

// Установить пароль
export function setPassword(password) {
    return {
        type:SET_PASSWORD,
        payload:password
    }
}

// Сбросить введенные данные
export function initAuth() {
    return {
        type:INIT_AUTH
    }
}

// Загрузить список задач
export function getTodosAction() {
    return {
        type: GET_TODOS
    }
}

// Сохранить в хранилище данные о задачах
export function setTodos(data) {
    return { 
        type: SET_TODOS,
        payload:data
    }
}

// Включить-выключить фильтр заданий по создателю задания
export function filterMe() {
    return {
        type: FILTER_ME
    }
}

// Изменить определенное задание
export function changeTaskAction(id,newdata) {
    return {
        type:CHANGE_TASK,
        id,
        newdata
    }
};

// Сохранить данные о задании в хранилище
export function createTask(task) {
    return {
        type: CREATE_TASK,
        payload: task
    }
}

// Отправить запрос на создание задания
export function postTask(task) {
    return {
        type: POST_TASK,
        body:task
    }
}

// Удалить задачу
export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        id
    }
}

// Загрузить пользователей
export function fetchUsers() {
    return {
        type: LOAD_USERS
    }
}

// Сохранить данные о пользователях
export function saveUsers(data) {
    return {
        type: SET_USERS,
        payload:data
    }
}