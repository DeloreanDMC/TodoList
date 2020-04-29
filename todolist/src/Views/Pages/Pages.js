import React from 'react';
import classes from './Pages.module.css';
import Header from './Header/Header';
import Main from './Main/Main';
import { useSelector } from 'react-redux';
import Loader from '../Components/Loaders/Loader/Loader';
// Отображение меню и страниц сайта
// Доступно после аутентификации
const Pages = () => {
    const loading = useSelector(state=>state.app.loading);
    return (
        <div className={classes["Pages"]}>
            <Header/>
            {loading ? <Loader/>:<Main/>}
        </div>
    );
}

export default Pages;