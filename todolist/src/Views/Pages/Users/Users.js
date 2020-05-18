import React, { useEffect } from 'react';
import classes from './Users.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../Redux/ActionCreators/ActionCreators';
import ScrollArea from 'react-scrollbar';
import User from './User/User';
import { allUsers, getLoading } from '../../../Redux/Selectors/Selectors';
import Loader from '../../Components/Loaders/Loader/Loader';

const Users = () => {
    const dispatch = useDispatch();
    useEffect(()=>{dispatch(fetchUsers());},[dispatch]);
    const users = useSelector(allUsers);
    const loading = useSelector(getLoading);
    if (loading) return <Loader/>;
    return (
        <div className={classes["Users"]}>
            <div className={classes["title"]}>
                <div>Users</div>
            </div>
            <div className={classes["ListBox"]}>
            <ScrollArea
                smoothScrolling={true}
                style={{paddingRight:"10px"}}
            >
                {users.map(user=><User user={user}/>)} 
            </ScrollArea>
            </div>
        </div>
    );
};

export default Users;
