import React from 'react';
import classes from './HomePage.module.css';
import {useSelector} from 'react-redux';
import { getName } from '../../../Redux/Selectors/Selectors';

const HomePage = () => {
    const username = useSelector(getName);
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