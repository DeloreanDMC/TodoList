import React from 'react';
import classes from "./Navigation.module.css";
import {connect} from "react-redux";
import NavigationLoader from "../../../Components/Loaders/NavigationLoader/NavigationLoader";
import { NavLink } from "react-router-dom";
import { getLoading, isAdmin } from '../../../../Redux/Selectors/Selectors';
import { logout } from '../../../../Redux/ActionCreators/ActionCreators';


// Навигация по страницам
const Navigation = ({loading,admin,onLogout}) => {
 
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

const mapStateToProps = state => ({
    loading:getLoading(state),
    admin: isAdmin(state)
});

const mapDispatchToProps = dispatch => ({
    onLogout: () => dispatch(logout())
});

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);