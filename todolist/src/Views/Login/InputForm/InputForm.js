import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {login} from '../../../Redux/ActionCreators/ActionCreators';
import AuthForm from '../../../Containers/AuthForm/AuthForm';


// Форма ввода данных аккаунта
const InputForm = () => {
    // Хуки логина и пароля
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    


    // Логика отправки формы
    const dispatch = useDispatch();
   
    const submitHandler = event => {
        console.log("Данны для отправки");
        console.log(username,password);
        dispatch(login(username,password));
    }
    

    return (
        <AuthForm onSubmit={submitHandler}>
            <input 
                type={'text'}
                name={'username'} 
                value={username} 
                onChange={e=>setUsername(e.target.value)}
            />
            <input 
                type={'password'}
                name={'password'} 
                value={password} 
                onChange={e=>setPassword(e.target.value)}
            />
            <button>LOGIN</button>
        </AuthForm> 
    )
};

export default InputForm;