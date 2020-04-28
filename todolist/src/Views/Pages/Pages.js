import React from 'react';
import classes from './Pages.module.css';
import Header from './Header/Header';
import Main from './Main/Main';
// Отображение меню и страниц сайта
// Доступно после аутентификации
const Pages = (props) => {

    return (
        <div className={classes["Pages"]}>
            <Header/>
            <Main/>
        </div>
    );
}

export default Pages;