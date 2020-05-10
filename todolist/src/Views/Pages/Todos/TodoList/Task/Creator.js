import React from 'react';
import classes from './Task.module.css';
// Информация о создателе задачи
const Creator = ({name})=> {
    return (
    <div className={classes["creator"]}>
        <div className={classes["ico-user"]}>
        </div>
        <div className={classes["user-name"]}>
            {name}
        </div>
    </div>);
};

export default Creator;