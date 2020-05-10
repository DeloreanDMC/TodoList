import React from 'react';
import classes from './TodoList.module.css';
import Task from './Task/Task';

const TodoList = () => {
    return (
    <div className={classes["ListBox"]}>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
    </div>
    );
};

export default TodoList;
