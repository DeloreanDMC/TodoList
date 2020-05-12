import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getName, getLoading, getTodosSelect, getFilter, isAdmin } from './Selectors';
import { filterMe, getTodosAction } from '../ActionCreators/ActionCreators';

export function useTodos() {
    const username = useSelector(getName);
    const checked = useSelector(getFilter);
    const loading = useSelector(getLoading);
    const admin = useSelector(isAdmin);

    let {array,filter} = useSelector(getTodosSelect);

    if (filter || !admin) {
        array = array.filter(el => el.createdBy===username);
    }
    array.sort((a)=>a.description!=="done"?-1:1);
    
    const dispatch = useDispatch();
    useEffect(() => {dispatch(getTodosAction());},[dispatch]);
    const setFilter = () => dispatch(filterMe());
    
    return {array,admin, loading, setFilter,checked};
}
