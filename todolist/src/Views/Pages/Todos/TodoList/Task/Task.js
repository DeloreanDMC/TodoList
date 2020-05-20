import React, { useState, useCallback } from 'react';
import classes from './Task.module.css';
import Creator from './Creator';
import Description from './Description';
import { connect } from 'react-redux';
import { changeTaskAction, deleteTask } from '../../../../../Redux/ActionCreators/ActionCreators';

import Edit from './Edit';

// Опционально добавляет к строке параметр optional
const optionalEnd = (str,isDone,optional) => {
    if (isDone) {
        return str + optional;
    } 
    return str;
};

// Компонент одной задачи
const Task = ({task, admin, changeTask, deleteById}) => {

    // Параметры для отображения
    const {id, title, description, createdBy} = task;
    const isDone = description === "done";
    
    // Названия классов, которые могут измениться
    const like =  optionalEnd("like",isDone,"-full");
    const taskBox = optionalEnd("task-box",isDone,"-done");
    
    // Действия, которые можно совершить над задачей
    const doneIt = useCallback(() =>isDone || changeTask(id,{description:"done", title}),[id,title,changeTask,isDone]);
    const delet =  useCallback(() => deleteById(id),[id,deleteById]);

    // Всплавающее описание задачи, после клика по ней
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
                <Edit id={id} isDone={isDone} delet={delet}/>
            </div>
                {showInfo ? info : null}
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    changeTask:(id,newData)=>dispatch(changeTaskAction(id,newData)),
    deleteById:(id)=>dispatch(deleteTask(id))
});

export default connect(null,mapDispatchToProps)(Task);