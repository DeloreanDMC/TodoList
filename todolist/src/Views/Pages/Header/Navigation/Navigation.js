import React from 'react';
import classes from "./Navigation.module.css";
import {logout} from "../../../../Redux/ActionCreators/ActionCreators";
import {useDispatch,useSelector} from "react-redux";
import NavigationLoader from "../../../Components/Loaders/NavigationLoader/NavigationLoader";
import { NavLink } from "react-router-dom";


// Навигация по страницам
const Navigation = () => {
    const dispatch = useDispatch();
    const loading =  useSelector(state=>state.app.loading);
    const onLogout = () => { dispatch(logout());};

    return (
        <nav className={classes["Navigation"]}>
            <div className={classes["links-box"]}>
                <NavLink 
                    className={classes["simple-link"]}
                    activeClassName={classes["active-link"]} 
                    
                    to="/homepage">Home page</NavLink>
                <div className={classes["simple-link"]}>Todo List</div>
            </div>
            {loading?<NavigationLoader/>:null}
            <div className={classes["logout"]} onClick={onLogout}>
                Logout
            </div>
        </nav>
    );
};

export default Navigation;