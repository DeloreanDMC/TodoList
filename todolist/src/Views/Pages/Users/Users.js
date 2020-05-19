import React, { useEffect } from 'react';
import classes from './Users.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../Redux/ActionCreators/ActionCreators';
import ScrollArea from 'react-scrollbar';
import User from './User/User';
import { allUsers } from '../../../Redux/Selectors/Selectors';
import Page from '../../Components/Page/Page';

const Users = () => {
    const dispatch = useDispatch();
    useEffect(()=>{dispatch(fetchUsers());},[dispatch]);
    
    const users = useSelector(allUsers);
    
    return (
        <Page title={"Users"}>
                <div className={classes["ListBox"]}>
                    <ScrollArea
                        smoothScrolling={true}
                        style={{paddingRight:"10px"}}
                    >
                        {users.map((user,i)=><User user={user} key={i+user.name}/>)} 
                    </ScrollArea>
                </div>
        </Page>
    );
};

export default Users;
