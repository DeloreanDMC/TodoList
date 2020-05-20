import React from 'react';
import classes from './ErrorPage.module.css';

// Отображение - «страница не найдена»
const ErrorPage = ({title}) => {
    return (
        <div>
            <div className={classes["sad"]}></div>
            <div className={classes["title"]}>{title}</div>
        </div>
    );
};

export default ErrorPage;