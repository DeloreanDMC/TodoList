import React from 'react';
import classes from "./Navigation.module.css";
import {useSelector} from "react-redux";
import NavigationLoader from "../../../Components/Loaders/NavigationLoader/NavigationLoader";
import { NavLink } from "react-router-dom";
import { getLoading, isAdmin } from '../../../../Redux/Selectors/Selectors';
import { useLogout } from '../../../../Redux/Dispatches/Dispatches';


// Навигация по страницам
const Navigation = () => {
    const loading =  useSelector(getLoading);
    const admin = useSelector(isAdmin);
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
                <NavLink  
                    className={classes["simple-link"]}
                    activeClassName={classes["active-link"]}
                    to="/todos"    
                >
                    Todo List
                </NavLink>

                {admin 
                ? <NavLink to="/users"
                    className={classes["simple-link"]}
                    activeClassName={classes["active-link"]}
                  > 
                     Users 
                 </NavLink>
                : null}
            </div>
            
            {loading?<NavigationLoader/>:null}
            
            <div className={classes["logout"]} onClick={onLogout}>
                Logout
            </div>
        </nav>
    );
};

export default Navigation;