import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getName, getLoading, getTodosSelect, getFilter, isAdmin } from './Selectors';
import { filterMe, getTodosAction } from '../ActionCreators/ActionCreators';

// Переименовать в utils

export function useTodos() {
    const username = useSelector(getName);
    const checked = useSelector(getFilter);
    const loading = useSelector(getLoading);
    const admin = useSelector(isAdmin);

    let {array,filter} = useSelector(getTodosSelect);

    if (filter || !admin) {
        array = array.filter(el => el.createdBy===username);// create selector
    }
    array.sort((a)=>a.description!=="done"?-1:1); // selector
    
    const dispatch = useDispatch();
    // Проверка - отправлять не отправлять
    // Написать свою мидл вару - прверять ндо вызываться или нет
    // + еще один 

    useEffect(() => {dispatch(getTodosAction());},[]);
    const setFilter = () => dispatch(filterMe());
    
    return {array,admin, loading, setFilter,checked};
}
