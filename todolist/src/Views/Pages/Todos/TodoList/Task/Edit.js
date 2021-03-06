import React from 'react';
import classes from './Task.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMemTask, setTaskError } from '../../../../../Redux/ActionCreators/ActionCreators';

 const Edit = ({id,isDone,delet}) => {
    const dispatch = useDispatch();
    const clearMem = ()=>{dispatch(setMemTask(null)); dispatch(setTaskError(null))};
    const editComponent = isDone 
        ? null 
        : ( <NavLink to={"/todos/edit/"+id} onClick={clearMem} className={classes["edit-image"]}>
            </NavLink>);

     return (
        <>
            <div className={classes["edit"]}>
                {editComponent}
            </div>
            <div className={classes["edit"]}>
                <div className={classes["delete-image"]} onClick={delet}>
                </div>
            </div>
        </>  
     );  
};

export default Edit;