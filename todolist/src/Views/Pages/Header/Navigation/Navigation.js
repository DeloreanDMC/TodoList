import React from 'react';
import classes from './Navigation.module.css';
import {logout} from '../../../../Redux/ActionCreators/ActionCreators';
import {useDispatch} from 'react-redux';
import {userLogout} from '../../../../HTTPprovider/HTTPprovider';

const Navigation = (props) => {
    const dispatch = useDispatch();
    const onLogout = () => { userLogout(); dispatch(logout());};
    return (
        <div className={classes["Navigation"]}>
            <div className={classes["links-box"]}>
                <div className={classes["active-link"]}>Home page</div>
                <div className={classes["simple-link"]}>Todo List</div>
            </div>

            <div className={classes["logout"]} onClick={onLogout}>
                Logout
            </div>
        </div>
    );
};

export default Navigation;