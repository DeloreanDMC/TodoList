import { login, setUsername, setPassword, logout } from '../ActionCreators/ActionCreators';
import {useDispatch} from 'react-redux';

// Хуки для аутентиффикации пользователя
export function useAuth() {
    const dispatch = useDispatch();
    const auth = (username,password) => dispatch(login(username,password));
    const usernameSetter = (username) => dispatch(setUsername(username));
    const passwordSetter = (password) => dispatch(setPassword(password));
    return {auth,usernameSetter,passwordSetter};
}

// Хуки для выхода из аккаунта
export function useLogout() {
    const dispatch = useDispatch();
    return () => dispatch(logout());
}