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
    const setFilter = () => dispatch(filterMe());
    
    useEffect(() => {dispatch(getTodosAction());},[]);

    return {array,admin, setFilter,checked};
}
