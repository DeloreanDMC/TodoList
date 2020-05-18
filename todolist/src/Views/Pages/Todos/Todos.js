import React from 'react';
import classes from './Todos.module.css';
import Button from '../../Components/Button/Button';
import TodoList from './TodoList/TodoList';
import { Route } from 'react-router-dom';
import CrudComponent from './CrudComponent/CrudComponent';

const Todos = () => {
    return (
        <React.Fragment>
            <div className={classes["Todos"]}>
                <div className={classes["title"]}>
                    <div>Todo list</div>
                </div>
                <div className={classes["wrapper"]}>
                    <Button title="Add new task" navTo="/todos/create"/>
                    <TodoList/>
                </div>
            </div>
            <Route path="/todos/create" render={()=><CrudComponent view="Create" />}/>
            <Route path="/todos/edit/:id" render={({match})=><CrudComponent view="Edit" id={match.params.id}/>}/>
        </React.Fragment>
    )
};

export default Todos;