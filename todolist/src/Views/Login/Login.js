import React from 'react';
import classes from './Login.module.css';
import InputForm from './InputForm/InputForm';
import Loader from '../Components/Loaders/Loader/Loader';
import { useSelector } from 'react-redux';
import { getLoading } from '../../Redux/Selectors/Selectors';

// Страница аутентификации
const Login = () => {
    const loading = useSelector(getLoading);

    if (loading) {
        return <Loader/>
    } 
    
    return (
        <div className={classes["wrapper"]}>
            <div className={classes["login-box"]}>
                <div className={classes["title"]}>Busy List</div>
                <InputForm/>
            </div>
        </div>
    );
};

export default Login;