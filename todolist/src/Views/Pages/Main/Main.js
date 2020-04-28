import React from 'react';
import classes from './Main.module.css';
import HomePage from '../HomePage/HomePage';
import {Route,Switch, Redirect} from 'react-router-dom';

// Отображение текущей страницы
const Main = () => {
    return (
        <div className={classes["Main"]}>
            <Switch>
                <Route path="/homepage" component={HomePage}/>
                <Redirect path="/login" to="/homepage"/>
            </Switch>
        </div>
    );

};

export default Main;