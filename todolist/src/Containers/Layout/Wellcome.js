import React from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import Login from '../../Views/Login/Login';
import Pages from '../../Views/Pages/Pages';
import { updateUserDate} from '../../Redux/ActionCreators/ActionCreators';

// Описывает логику входа на сайт
const Wellcome = () => {
    const {authorized,needUpdate} = useSelector(state=>state.user);
    const dispatch = useDispatch();
    // Если пользователь авторизован
    if (authorized) {
      // Запустить синхранизацию
      if (needUpdate) dispatch(updateUserDate());
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
};

export default Wellcome;
  