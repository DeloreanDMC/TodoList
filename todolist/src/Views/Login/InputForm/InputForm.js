import React from 'react';
import { useSelector } from 'react-redux';
import AuthForm from '../../Components/AuthForm/AuthForm';
import { getLoginInput, getAlert } from '../../../Redux/Selectors/Selectors';
import { useAuth } from '../../../Redux/Dispatches/Dispatches';

// Форма ввода данных аккаунта
const InputForm = () => {
    const {username, password} = useSelector(getLoginInput);
    const errorMessage = useSelector(getAlert);
    const {auth, usernameSetter, passwordSetter} = useAuth();
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

export default InputForm;