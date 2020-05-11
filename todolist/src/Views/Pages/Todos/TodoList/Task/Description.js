import React from 'react';
import classes from './Task.module.css';

const Description = ({description}) => {
    return (
        <div className={classes["description"]}>
            {description}
        </div>
    );
};

export default Description;