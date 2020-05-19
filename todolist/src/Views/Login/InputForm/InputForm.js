import React from 'react';
import {connect } from 'react-redux';

import AuthForm from '../../Components/AuthForm/AuthForm';
import { getLoginInput, getAlert } from '../../../Redux/Selectors/Selectors';
import { login, setUsername, setPassword } from '../../../Redux/ActionCreators/ActionCreators';

// Форма ввода данных аккаунта
const InputForm = ({
    userInfo, errorMessage, 
    auth, usernameSetter, passwordSetter}) => {
    const {username, password} = userInfo; 
    const submitHandler = () => auth(username, password);
    
    return (
        <AuthForm onSubmit={submitHandler} error={errorMessage} 
            input={{
            inputLogin:
            <input 
                type={'text'}
                name={'username'} 
                value={username} 
                required={true}
                onChange={e=>usernameSetter(e.target.value)}
            />,
            inputPassword:
            <input 
                type={'password'}
                name={'password'} 
                value={password} 
                required={true}
                onChange={e=>passwordSetter(e.target.value)}
            />,
            buttonLogin:
            <button>LOGIN</button>}}
        />
    )
};

const mapStateToProps = state => ({
    userInfo: getLoginInput(state),
    errorMessage: getAlert(state)
});

const mapDispatchToProps = dispatch => ({
    auth:(username,password)  => dispatch(login(username,password)),
    usernameSetter:(username) => dispatch(setUsername(username)),
    passwordSetter:(password) => dispatch(setPassword(password)),
});

export default connect(mapStateToProps,mapDispatchToProps)(InputForm);