import React from 'react';
import classes from "./Navigation.module.css";
import {useSelector} from "react-redux";
import NavigationLoader from "../../../Components/Loaders/NavigationLoader/NavigationLoader";
import { NavLink } from "react-router-dom";
import { getLoading } from '../../../../Redux/Selectors/Selectors';
import { useLogout } from '../../../../Redux/Dispatches/Dispatches';


// Навигация по страницам
const Navigation = () => {
    const loading =  useSelector(getLoading);
    const onLogout = useLogout();

    return (
        <nav className={classes["Navigation"]}>
            <div className={classes["links-box"]}>
                <NavLink 
                    className={classes["simple-link"]}
                    activeClassName={classes["active-link"]}     
                    to="/homepage"
                >
                    Home page
                </NavLink>
                <div className={classes["simple-link"]}>
                    Todo List
                </div>
            </div>
            {loading?<NavigationLoader/>:null}
            <div className={classes["logout"]} onClick={onLogout}>
                Logout
            </div>
        </nav>
    );
};

export default Navigation;