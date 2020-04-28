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

// Фильтрует массив из дочерних элементов по определенному критерию
const getFromChildren = (children, options) => {
    return children.filter(el => {
        return Object.entries(options)
               .every(par => {
                   return el[par[0]] === par[1];
               }) 
    })
}

// Красивая обертка для формы ввода
const AuthForm = ({children,onSubmit}) => {
    
    // Если ничего не передали - значит нечего оборачивать
    if (!children) return <div></div>;

    /* Поля ввода */
    const inputs = getFromChildren(children,{
        type:"input"
    });
    // Ввод логина
    const inputLogin = propsReducer(inputs[0],{
        className:classes["input-bty"],
        placeholder:inputs[0].props.name || "login"
    });
    // Вввод пароля
    const inputPassword = propsReducer(inputs[1],{
        className:classes["input-bty"],
        placeholder:inputs[1].props.name || "password"
    });
  
    /* Конопки */
    const buttons = getFromChildren(children, {
        type:"button"
    });

    // Кнопка submit
    const buttonLogin = propsReducer(buttons[0], {
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
            {buttonLogin}
        </form>
    )
};

export default AuthForm;