import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getName, getRole, getLoading, getTodosSelect, getFilter } from './Selectors';
import { filterMe, getTodosAction } from '../ActionCreators/ActionCreators';

export function useTodos() {
    const username = useSelector(getName);
    const userrole = useSelector(getRole);
    const checked = useSelector(getFilter);
    const loading = useSelector(getLoading);
    const admin = userrole==="SUPERUSER";

    let {array,filter} = useSelector(getTodosSelect);

    if (filter || !admin) {
        array = array.filter(el => el.createdBy===username);
    }
    
    const dispatch = useDispatch();
    useEffect(() => {dispatch(getTodosAction());},[dispatch]);
    const setFilter = () => dispatch(filterMe());
    
    return {array,admin, loading, setFilter,checked};
}
