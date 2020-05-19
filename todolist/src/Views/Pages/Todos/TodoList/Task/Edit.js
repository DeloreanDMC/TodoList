import React from 'react';
import classes from './Task.module.css';
import { NavLink } from 'react-router-dom';

 const Edit = ({id,isDone,delet}) => {
    
    const editComponent = isDone 
        ? null 
        : ( <NavLink to={"/todos/edit/"+id} className={classes["edit-image"]}>
            </NavLink>);

     return (
        <React.Fragment>
            <div className={classes["edit"]}>
                {editComponent}
            </div>
            <div className={classes["edit"]}>
                <div className={classes["delete-image"]} onClick={delet}>
                </div>
            </div>
        </React.Fragment>  
     );  
};

export default Edit;