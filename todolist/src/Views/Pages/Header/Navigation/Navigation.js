import React from 'react';
import classes from './Navigation.module.css';

const Navigation = (props) => {
    return (
        <div className={classes["Navigation"]}>
            <div className={classes["links-box"]}>
                <div className={classes["active-link"]}>Home page</div>
                <div className={classes["simple-link"]}>Todo List</div>
            </div>

            <div className={classes["logout"]}>
                Logout
            </div>
        </div>
    );
};

export default Navigation;