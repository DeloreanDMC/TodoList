import React, { useState, useCallback} from 'react';
import classes from './CrudComponent.module.css';
import { NavLink } from 'react-router-dom';
import Button from '../../../Components/Button/Button';
import { connect } from 'react-redux';
import { postTask, changeTaskAction } from '../../../../Redux/ActionCreators/ActionCreators';
import { getTaskById } from '../../../../Redux/Selectors/memSelectors';
import { getTaskError, getMemTask } from '../../../../Redux/Selectors/Selectors';

const CrudComponent = ({view,id, getTask, post, put, memTask})=>{
    
    const task = memTask || getTask(id);
    
    const [title,setTitle] = useState(task && task.title || "");
    const [description, setDesc] = useState(task && task.description || "");
    
    const submit  = useCallback(()=>post(title, description),[title,description]);
    const putTask = useCallback(()=>put(id,title,description),[id, title, description]);

   
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
                            required={true}
                            className={classes["text-area"]} 
                            value={title} 
                            onChange={e=>setTitle(e.target.value)}
                        />
                    </div>
                    <div className={classes["desc-input"]}>
                        <div className={classes["field-name"]}>
                            Description
                        </div>
                        <textarea 
                            required={true}
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

const mapStateToProps = state => ({
    getTask:(id)=>getTaskById(id)(state),
    error: getTaskError(state),
    memTask: getMemTask(state)
});

const mapDispatchToProps = dispatch => ({
    post:(title, description)=>dispatch(postTask({title, description})),
    put:(id,title,description)=>dispatch(changeTaskAction(+id,{title, description}))
});

export default connect(mapStateToProps,mapDispatchToProps)(CrudComponent);