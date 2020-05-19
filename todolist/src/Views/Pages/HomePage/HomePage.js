import React from 'react';
import classes from './HomePage.module.css';
import {useSelector} from 'react-redux';
import { getName } from '../../../Redux/Selectors/Selectors';
import Page from '../../Components/Page/Page';

const HomePage = () => {
    const username = useSelector(getName);
    return (
        <Page title="Home page">
            <div className={classes["section"]}>
                <div>Welcome {username}</div>
            </div>
        </Page>
       
    );
};

export default HomePage;