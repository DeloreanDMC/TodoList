import React from 'react';
import classes from './Main.module.css';
import HomePage from '../HomePage/HomePage';
import {Route,Switch, Redirect} from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';

// Отображение текущей страницы
const Main = () => {
    return (
        <div className={classes["Main"]}>
            <Switch>
                <Route path="/homepage" component={HomePage}/>
                <Redirect path="/login" to="/homepage"/>
                <Route path="/404" component={PageNotFound}/>
                <Redirect to="/404"/>
            </Switch>
        </div>
    );

};

export default Main;