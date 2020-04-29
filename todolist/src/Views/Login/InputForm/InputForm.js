import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../../Redux/ActionCreators/ActionCreators';
import AuthForm from '../../Components/AuthForm/AuthForm';


// Форма ввода данных аккаунта
const InputForm = () => {
    // Хуки логина и пароля
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const errorMessage = useSelector(state=>state.app.alert);
    

    // Логика отправки формы
    const dispatch = useDispatch();
   
    const submitHandler = event => {
        console.log("Данны для отправки");
        console.log(username,password);
        dispatch(login(username,password));
    }
    
    return (
        <AuthForm onSubmit={submitHandler} error={errorMessage} >
            <input 
                type={'text'}
                name={'username'} 
                value={username} 
                required={true}
                onChange={e=>setUsername(e.target.value)}
            />
            <input 
                type={'password'}
                name={'password'} 
                value={password} 
                required={true}
                onChange={e=>setPassword(e.target.value)}
            />
            <button>LOGIN</button>
        </AuthForm> 
    )
};

export default InputForm;