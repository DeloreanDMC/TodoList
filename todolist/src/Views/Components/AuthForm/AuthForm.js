import React from 'react';
import classes from './AuthForm.module.css';


// Преобразователь пропсов
const propsReducer = (jsxElem, newProps) => {
    return {
        ...jsxElem,
        props: {
            ...jsxElem.props,
            ...newProps
        }
    }
};

// Красивая обертка для формы ввода
const AuthForm = ({input,onSubmit,error}) => {
    
    // Если ничего не передали - значит нечего оборачивать
    if (!input) return null;
    
    // Ввод логина
    const inputLogin = propsReducer(input.inputLogin,{
        className:classes["input-bty"],
        placeholder:input.inputLogin.props.name || "login"
    });
    // Вввод пароля
    const inputPassword = propsReducer(input.inputPassword,{
        className:classes["input-bty"],
        placeholder:input.inputPassword.props.name || "password"
    });
  
    // Кнопка submit
    const buttonLogin = propsReducer(input.buttonLogin, {
        className:classes["button-log"],
    });

    // Отменяем действия по умолчанию и передаем дальше
    const submitHandler = event => {
        event.preventDefault();
        onSubmit(event);
    };

    return (
        <form className={classes["form-box"]} onSubmit={submitHandler}>
            <div className={classes["inputs"]}>    
                <div className={classes["plate"]}> 
                    <div className={classes["ico-block"]}>
                        <div className={classes["ico-user"]}></div>
                    </div>
                    {inputLogin}
                </div>
                <div className={classes["plate"]}> 
                    <div className={classes["ico-block"]}>
                        <div className={classes["ico-password"]}></div>
                    </div>
                    {inputPassword}
                </div>
            </div>
            <div className={classes["error-message"]}>
                {error}
            </div>
            {buttonLogin}
        </form>
    )
};

export default AuthForm;