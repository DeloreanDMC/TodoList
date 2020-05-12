import React from 'react';
import classes from './Header.module.css';
import UserInfo from './UserInfo/UserInfo';
import Navigation from './Navigation/Navigation';

// Навигационное меню
const Header = () => {
    return (
        <div className={classes["header"]}>
            <div className={classes["title"]}>Busy List</div>
            <UserInfo/>
            <Navigation/>
        </div>
    );
};

export default Header;