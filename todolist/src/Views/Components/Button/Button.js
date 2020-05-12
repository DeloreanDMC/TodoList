
import React from 'react';
import classes from './Button.module.css';
import { NavLink } from 'react-router-dom';

const Button = ({onClick,title,navTo, children}) => {
    return (
        <NavLink to={navTo} className={classes["button"]} onClick={onClick}>
            {title}
        </NavLink>
    );
};

export default Button;