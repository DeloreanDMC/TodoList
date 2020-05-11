import React from 'react';
import classes from './TodoList.module.css';
import Task from './Task/Task';
import ScrollArea from 'react-scrollbar';

const TodoList = () => {
    return (
    <div className={classes["ListBox"]}>
        <ScrollArea
         smoothScrolling={true}
         style={{paddingRight:"10px"}}
        >
            <Task/>
            <Task/>
            <Task/>
            <Task/>
        </ScrollArea>
        <div className={classes["only-me"]}>
            <input name="me" type="checkbox" className={classes["check"]}/>
            <label for="me" className={classes["label"]}>only me</label>
        </div>
    </div>
    );
};

export default TodoList;
