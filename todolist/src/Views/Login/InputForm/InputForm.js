import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { login } from '../../../Redux/ActionCreators/ActionCreators';
import LoginForm from '../../../Containers/LoginForm/LoginForm';


// Форма ввода данных аккаунта
const InputForm = () => {
    // Хуки логина и пароля
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    // Логика отправки формы
    const dispatch = useDispatch();
    const submitHandler = event => {
        // dispatch(login(null,null));
    }
    
    return (
        <LoginForm onSubmit={submitHandler}>
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
        </LoginForm> 
    )
};

export default InputForm;