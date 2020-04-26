import React from 'react';
import classes from './UserInfo.module.css';

const UserInfo = (props) => {
    return (
        <div className={classes["UserInfo"]}>
            <div className={classes["ico-user"]}></div>
            <div className={classes["user-name"]}>{"<username>"}</div>
        </div>
    );
};

export default UserInfo;