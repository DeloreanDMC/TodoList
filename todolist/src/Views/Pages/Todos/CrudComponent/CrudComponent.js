import React, { useState } from 'react';
import classes from './CrudComponent.module.css';
import { NavLink } from 'react-router-dom';
import Button from '../../../Components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { postTask, changeTaskAction } from '../../../../Redux/ActionCreators/ActionCreators';
import { getTaskById } from '../../../../Redux/Selectors/Selectors';

const CrudComponent = ({view,id})=>{

    const task = useSelector(getTaskById(id));
    const dispatch = useDispatch();
    
    const [title,setTitle] = useState(task ? task.title : "");
    const [description, setDesc] = useState(task ? task.description : "");
    const submit = ()=>dispatch(postTask({title, description}));

    const putTask = ()=>dispatch(changeTaskAction(+id,{title, description})) ;

    const action = view==="Create" ? submit : putTask;
    return (
        <React.Fragment>
            <NavLink to="/todos" className={classes["modal-box"]} >
            
            </NavLink>
            <div className={classes["title"]}>
                <div>{view==="Create" ? "Create new task" :"Edit task"}</div>
            </div>
            <div className={classes["wrapper"]}>
                <div className={classes["white-box"]}>
                    <div className={classes["title-input"]}>
                        <div className={classes["field-name"]}>
                            Title
                        </div>
                        <textarea 
                            className={classes["text-area"]} 
                            value={title} 
                            onChange={e=>setTitle(e.target.value)}/>
                    </div>
                    <div className={classes["desc-input"]}>
                        <div className={classes["field-name"]}>
                            Description
                        </div>
                        <textarea 
                            className={classes["big-text-area"]}
                            value={description}
                            onChange={e=>setDesc(e.target.value)}
                            />
                    </div>
                    <div className={classes["buttons"]}>
                        <Button title={view} navTo="/todos" onClick={action}/>
                        <Button title={"Cancel"} navTo="/todos"/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CrudComponent;