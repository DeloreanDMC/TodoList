import React from 'react';
import classes from './NavigationLoader.module.css';

const NavigationLoader = () => {
    return (
        <div className={classes["box"]}>
            <div className={classes["overlay-loader"]}>
                <div className={classes["loader"]}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default NavigationLoader;