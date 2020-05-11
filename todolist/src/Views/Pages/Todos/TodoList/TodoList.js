import React from 'react';
import classes from './TodoList.module.css';
import Task from './Task/Task';
import ScrollArea from 'react-scrollbar';
import NavigationLoader from '../../../Components/Loaders/NavigationLoader/NavigationLoader';
import { useTodos } from '../../../../Redux/Selectors/hoks';
const TodoList = () => {
    const {array, admin, loading, setFilter, checked} = useTodos();
    if (loading) return <NavigationLoader/>
    const filter = admin ?
        <div className={classes["only-me"]}>
            <input name="me" type="checkbox" checked={checked} className={classes["check"]} onClick={setFilter}/>
            <label htmlFor="me" className={classes["label"]}>only me</label>
        </div>
        :null;

    const tasks = array.map( (el,i) => <Task key={i} task={el} admin={admin}/>);

    return (
    <div className={classes["ListBox"]}>
        <ScrollArea
         smoothScrolling={true}
         style={{paddingRight:"10px"}}
        >
            {tasks}
        </ScrollArea>
        {filter}
    </div>
    );
};

export default TodoList;
