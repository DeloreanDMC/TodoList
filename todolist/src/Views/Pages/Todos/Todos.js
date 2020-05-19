import React from 'react';
import classes from './Todos.module.css';
import Button from '../../Components/Button/Button';
import TodoList from './TodoList/TodoList';
import { Route } from 'react-router-dom';
import CrudComponent from './CrudComponent/CrudComponent';
import Page from '../../Components/Page/Page';

const crudComponent = (view) => {
    return ({match}) => <CrudComponent view={view} id={match.params.id}/>;
};

const Todos = () => {
    return (
        <React.Fragment>
            <Page title={"Todo list"}>
                <div className={classes["wrapper"]}>
                    <Button title="Add new task" navTo="/todos/create"/>
                    <TodoList/>
                </div>
            </Page>
            <Route path="/todos/create" render={crudComponent("Create")}/>
            <Route path="/todos/edit/:id" render={crudComponent("Edit")}/>
        </React.Fragment>
    )
};

export default Todos;