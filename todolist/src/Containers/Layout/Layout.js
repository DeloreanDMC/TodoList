import React from 'react';
import classes from './Layout.module.css';
import Login from '../../Views/Login/Login';
import Pages from '../../Views/Pages/Pages';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {useSelector} from 'react-redux';


const Wellcome = () => {
  const {authorized} = useSelector(state=>state.user);
  return authorized ? <Pages/> : <Login/>;
}

// Самый нижний слой с фоном
// Никогда не пропадает
const Layout = () => {
  return (
    <BrowserRouter>
      <div className={classes["Layout"]}>
        <Route path="/" component={Wellcome} />
      </div>
    </BrowserRouter>
  );
}

export default Layout;
