import React from 'react';
import classes from './Page.module.css';
import { useSelector } from 'react-redux';
import Loader from '../Loaders/Loader/Loader';
import {getLoading } from '../../../Redux/Selectors/Selectors';
const Page = ({title,children}) => {
    const loading = useSelector(getLoading); 
    return (
        <Loader loading={loading}>
            <div className={classes["Page"]}>
                <div className={classes["title"]}>
                    <div>{title}</div>
                </div>
                {children}
            </div>
        </Loader>
    );

};

export default Page;