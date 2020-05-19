import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getName, getFilter, isAdmin } from './Selectors';
import { getProcessedArray } from './memSelectors';
import { filterMe, getTodosAction } from '../ActionCreators/ActionCreators';

export function useTodos() {
    const username = useSelector(getName);
    const checked = useSelector(getFilter);
    const admin = useSelector(isAdmin);
    const filter = useSelector(getFilter);
    const array = useSelector(getProcessedArray(filter,admin,username));


    const dispatch = useDispatch();
    // Проверка - отправлять не отправлять
    // Написать свою мидл вару - прверять ндо вызываться или нет
    // + еще один 

    useEffect(() => {dispatch(getTodosAction());},[dispatch]);
    const setFilter = () => dispatch(filterMe());
    
    return {array,admin, setFilter,checked};
}
