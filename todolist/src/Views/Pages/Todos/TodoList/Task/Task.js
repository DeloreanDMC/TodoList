import React from 'react';
import classes from './Task.module.css';
import Creator from './Creator';

const Task = ({task}) => {
    return (
        <div className={classes["Task"]}>
            <Creator name={"user"}/> {/*Или див у которого есть размер*/}
            <div className={classes["task-box"]}>
                <div className={classes["execute"]}>
                    <div className={classes["like"]}>
                    </div>
                </div>
                <div className={classes["title"]}>
                    Get bread
                </div>
            </div>
        </div>
    );
};

export default Task;