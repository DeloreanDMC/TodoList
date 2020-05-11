import React, { useState } from 'react';
import classes from './Task.module.css';
import Creator from './Creator';
import Description from './Description';
import { useDispatch } from 'react-redux';
import { changeTaskAction, deleteTask } from '../../../../../Redux/ActionCreators/ActionCreators';
import { NavLink } from 'react-router-dom';

const Task = ({task, admin}) => {

    const {id, title, description, createdBy} = task;
    const isdone = description === "done";
    const like = "like" + (isdone?"-full":"");
    const taskBox = "task-box" + (isdone?"-done":"");
    const dispatch = useDispatch();

    const doneIt = () => dispatch(changeTaskAction(id,{description:"done", title}));
    const delet = () => dispatch(deleteTask(id));

    const edit = (
    <React.Fragment>
        <div className={classes["edit"]}>
            {isdone ? null : (
                <NavLink to={"/todos/edit/"+id} className={classes["edit-image"]}>
                </NavLink>)}
        </div>
        <div className={classes["edit"]}>
            <div className={classes["delete-image"]} onClick={delet}>
            </div>
        </div>
    </React.Fragment>    
    
    );

    const info = <Description description={description}/>
    const [showInfo,setInfo] = useState(false);
    const switchInfo = () => setInfo(!showInfo);
    
    return (
        <div className={classes["Task"]}>
           {admin ? <Creator name={createdBy}/> : null}  
            <div className={classes[taskBox]}>
                <div className={classes["execute"]}>
                    <div className={classes[like]} onClick={doneIt}>
                    </div>
                </div>
                <div className={classes["title"]} onClick={switchInfo}>
                    {title}
                </div>
                {edit}
            </div>
                {showInfo ? info : null}
        </div>
    );
};

export default Task;