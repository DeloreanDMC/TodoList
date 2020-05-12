import React from 'react';
import classes from './User.module.css';
import Creator from '../../Todos/TodoList/Task/Creator';

const User = ({user}) => {
    const {login,role,name} = user;
    return (
        <div className={classes["User"]}>
            <Creator name={role}/>
            <div className={classes["ico-role"]}>
            </div>
            <div className={classes["role"]}>{name}</div>
            <div className={classes["role"]}><span className={classes["login"]}>login: </span>{login}</div>
        </div>
    );
};

export default User;