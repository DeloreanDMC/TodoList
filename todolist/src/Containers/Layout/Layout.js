import React from 'react';
import classes from './Layout.module.css';
import Login from '../../Views/Login/Login';

// Самый нижний слой с фоном
// Никогда не пропадает
const Layout = () => {
  return (
    <div className={classes["Layout"]}>
      <Login/>
    </div>
  );
}

export default Layout;
