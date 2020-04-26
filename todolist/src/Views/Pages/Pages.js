import React from 'react';
import classes from './Pages.module.css';
import Header from './Header/Header';
// Отображение меню и страниц сайта
// Доступно после аутентификации
const Pages = (props) => {
    return (
        <div className={classes["Pages"]}>
            <Header/>

            <main>main</main>
        </div>
    );
}

export default Pages;