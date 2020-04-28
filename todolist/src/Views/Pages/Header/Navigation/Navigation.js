import React from 'react';
import classes from './Navigation.module.css';
import {logout} from '../../../../Redux/ActionCreators/ActionCreators';
import {useDispatch,useSelector} from 'react-redux';
import NavigationLoader from '../../../Loaders/NavigationLoader/NavigationLoader';

const Navigation = () => {
    const dispatch = useDispatch();
    const loading =  useSelector(state=>state.app.loading);
    const onLogout = () => { dispatch(logout());};

    return (
        <div className={classes["Navigation"]}>
            <div className={classes["links-box"]}>
                <div className={classes["active-link"]}>Home page</div>
                <div className={classes["simple-link"]}>Todo List</div>
            </div>
            {loading?<NavigationLoader/>:null}
            <div className={classes["logout"]} onClick={onLogout}>
                Logout
            </div>
        </div>
    );
};

export default Navigation;