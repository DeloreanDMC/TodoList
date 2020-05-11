import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    withCredentials: true
});


// Извлекает необходимые данные из ответа
function getData(response) {
    console.log("get data:");
    console.log(response);
    return {
        data:response.data, 
        status:response.status
    }
}

// Аутентификация пользователя
export const userLogin = (login,password) => {
    return instance.post("/login", {
        login,
        password
    }).then(getData)
};

// Выйти из аккаунта
export const userLogout = () => {
    return instance.post("/logout")
           .catch(e=>e);
};

// Загрузить данные о пользователе
export const getUserDate = () => {
    return instance.get("/me")
    .then(getData)
}

// Загрузить список задач
export const getTodos = () => {
    return instance.get('/todos')
    .then(getData);
}

// Создать новое задание
export const postTodo = (task) => {
    return instance.post('/todos',task)
    .then(getData);
}

// Удалить задачу
export const deleteTodo = (id) => {
    return instance.delete('/todos/'+id);
}

// Изменить задачу
export const putTodo = (id,data) => {
    console.log("отправил на сервер:id="+id,"data = ",data);
    return instance.put('/todos/'+id,data).then(res=>console.log("put response =",res));
}