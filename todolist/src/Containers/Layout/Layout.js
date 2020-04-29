import React from 'react';
import classes from './Layout.module.css';
import { BrowserRouter} from 'react-router-dom';
import Wellcome from './Wellcome';

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
