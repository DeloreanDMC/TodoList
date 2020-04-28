import React from 'react';
import classes from './HomePage.module.css';
import {useSelector} from 'react-redux';

const HomePage = () => {
    const username = useSelector(state=>state.user.name);
    return (
        <div className={classes["HomePage"]}>
            <div className={classes["title"]}>
                <div>Home Page</div>
            </div>
            <div className={classes["section"]}>
                <div>Welcome {username}</div>
            </div>
        </div>
    );
};

export default HomePage;