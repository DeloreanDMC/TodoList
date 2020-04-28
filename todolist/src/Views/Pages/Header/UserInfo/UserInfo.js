import React from 'react';
import classes from './UserInfo.module.css';
import {useSelector} from 'react-redux';


const UserInfo = () => {
    const username = useSelector(state=>state.user.name);

    return (
        <div className={classes["UserInfo"]}>
            <div className={classes["ico-user"]}></div>
            <div className={classes["user-name"]}>{username}</div>
        </div>
    );
};

export default UserInfo;