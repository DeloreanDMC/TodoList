import React from 'react';
import classes from './Layout.module.css';
import Login from '../../Views/Login/Login';
import Pages from '../../Views/Pages/Pages';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux';

// Описывает логику входа на сайт
const Wellcome = () => {
  const {authorized} = useSelector(state=>state.user);
  // Если пользователь авторизован
  if (authorized) {
    // Отобразить станицы сайта
    return <Pages/>;
  } else {
    // Вернуть форму аутентификации
    return (
      <Switch>
        <Route path="/login" component={Login}/>
        <Redirect to="/login"/>
      </Switch>); 
  } 
}

// Самый нижний слой с фоном
// Никогда не пропадает
const Layout = () => {
  return (
    <BrowserRouter>
      <div className={classes["Layout"]}>
        <Wellcome/>
      </div>
    </BrowserRouter>
  );
}

export default Layout;
