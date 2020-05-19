import React from 'react';
import classes from './Layout.module.css';
import Wellcome from './Wellcome';
import ErrorBoundary from './ErrorBoundary';

// Самый нижний слой с фоном
// Никогда не пропадает
const Layout = () => {
  return (
        <ErrorBoundary>
          <div className={classes["Layout"]}>
            <Wellcome/>
          </div>
        </ErrorBoundary>
  );
}

export default Layout;
