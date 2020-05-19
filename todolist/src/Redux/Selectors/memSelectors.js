import {getArray} from './Selectors';
import { createSelector } from 'reselect'
import {compose} from 'redux';
// Селекторы с кешированием


// Возвращает фильтры
const getFilters = (username) => {
    const notDoneFirst = el=>el.description!=="done";
    const done = el=>el.description==="done";
    // Вспомогательные функции фильтрации и сортировки
    const onlyUserTasks = array => array.filter(el => el.createdBy===username);
    const arraySortedByDone = array => [...array.filter(notDoneFirst), ...array.filter(done)];
    return {onlyUserTasks,arraySortedByDone};
};


// Выбор, какие преобразования необходимо применить
const filterFuncs = (needFilter, admin, {onlyUserTasks,arraySortedByDone}) => {
    const funcs = [];
    if (needFilter || !admin) {
        funcs.unshift(onlyUserTasks);
    };
    funcs.unshift(arraySortedByDone);
    return funcs;
}

// Получить обработанный массив задач
export const getProcessedArray = (needFilter,admin,username) => {
    const funcs = filterFuncs(needFilter,admin,getFilters(username));
    return createSelector(getArray,compose(...funcs));;    
};

// Получить задачу по её id
export const getTaskById = id => {
    return createSelector( 
        getArray,
        array=>array.find(el=>+el.id===+id)
    );
};