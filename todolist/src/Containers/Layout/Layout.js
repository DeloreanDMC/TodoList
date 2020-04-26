import React from 'react';
import classes from './Layout.module.css';
import Login from '../../Views/Login/Login';
import Pages from '../../Views/Pages/Pages';

// Самый нижний слой с фоном
// Никогда не пропадает
const Layout = () => {
  return (
    <div className={classes["Layout"]}>
      {/* <Login/> */}
      <Pages/>
    </div>
  );
}

export default Layout;
