
import React from 'react';
import classes from './Button.module.css';

const Button = ({onClick,title}) => {
    return (
        <div className={classes["button"]}>
            {title}
        </div>
    );
};

export default Button;