import React from 'react';
import classes from './Login.module.css';
import InputForm from './InputForm/InputForm';

// Страница аутентификации
const Login = () => {
    return (
        <div className={classes["wrapper"]}>
            <div className={classes["login-box"]}>
                <div className={classes["title"]}>Busy List</div>
                <InputForm/>
            </div>
        </div>
    );
};

export default Login;