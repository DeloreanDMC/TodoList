import React from 'react';
import classes from './PageNotFound.module.css';

// Отображение - «страница не найдена»
const PageNotFound = () => {
    return (
        <div>
            <div className={classes["sad"]}></div>
            <div className={classes["title"]}>404 Page Not Found</div>
        </div>
    );
};

export default PageNotFound;