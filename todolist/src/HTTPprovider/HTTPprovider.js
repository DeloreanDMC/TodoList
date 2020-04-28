import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    withCredentials: true,
    headers: {
        "Access-Control-Allow-Credentials":true,
    }
});

// Аутентификация пользователя
export const userLogin = (login,password) => {
    return instance.post("/login", {
        login,
        password
    }).then(response => {
        console.log(response);
        return {
            data:response.data, 
            status:response.status
        }
    }).catch(error => {
        console.log(error);    
        return {
            data:error.response.data,
            status:error.response.status
        }
    });
};

// Выйти из аккаунта
export const userLogout = () => {
    return instance.post("/logout")
           .then(response=>{
               console.log(response);
           })
};