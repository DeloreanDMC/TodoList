import React from 'react';
import classes from './Main.module.css';
import HomePage from '../HomePage/HomePage';
import {Route,Switch, Redirect} from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';
import Todos from '../Todos/Todos';
import { useSelector } from 'react-redux';
import { isAdmin } from '../../../Redux/Selectors/Selectors';
import Users from '../Users/Users';

// Отображение текущей страницы
const Main = () => {
    const admin = useSelector(isAdmin);
    return (
        <div className={classes["Main"]}>
            <Switch>
                <Route path="/homepage" component={HomePage}/>
                    <Redirect path="/login" to="/homepage"/>
                    <Redirect path="/" exact to="/homepage"/>
                <Route path="/todos" component={Todos}/>
                
                {admin ? <Route path="/users" component={Users}/> : null}
                
                <Route path="/404" component={PageNotFound}/>
                <Redirect to="/404"/>
            </Switch>
        </div>
    );

};

export default Main;