import React from 'react';
import classes from './UserInfo.module.css';
import { useSelector } from 'react-redux';
import { getName } from '../../../../Redux/Selectors/Selectors';

// Информация о пользователе
const UserInfo = () => {
    const username = useSelector(getName);
    return (
        <div className={classes["UserInfo"]}>
            <div className={classes["ico-user"]}></div>
            <div className={classes["user-name"]}>{username}</div>
        </div>
    );
};

export default UserInfo;