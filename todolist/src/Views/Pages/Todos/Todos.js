import React from 'react';
import classes from './Todos.module.css';
import Button from '../../Components/Button/Button';
import TodoList from './TodoList/TodoList';

const Todos = () => {
    return (
        <div className={classes["Todos"]}>
             <div className={classes["title"]}>
                <div>Todo list</div>
            </div>
            <div className={classes["wrapper"]}>
                <Button title="Add new task"/>
                <TodoList/>
            </div>
           
        </div>
    )
};

export default Todos;