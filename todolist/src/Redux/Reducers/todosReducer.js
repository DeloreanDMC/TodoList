import { SET_TODOS, FILTER_ME,CREATE_TASK, CHANGE_TASK, DELETE_TASK, TASK_ERROR, SET_MEM_TASK } from "../Constants/types";

const initialState = {
    memTask:null,
    array:[],
    filter:null,
    error:null
};

export const todosReducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_TODOS: return {
            ...state,
            array:action.payload
        };
        case FILTER_ME: return {
            ...state,
            filter: !state.filter
        };
        case CHANGE_TASK: return {
            ...state,
            array:changeTask(state.array,action)
        };
        case CREATE_TASK: return {
            ...state,
            array:[...state.array,action.payload]
        };
        case DELETE_TASK: return {
            ...state,
            array:state.array.filter(el=>+el.id!==+action.id)
        };
        case TASK_ERROR: return {
            ...state,
            error:action.error
        };
        case SET_MEM_TASK: return {
            ...state,
            memTask: action.memTask
        }
        default: return state;
    }
};

// Изменение определенной задачи
function changeTask(state, {id, newdata}) {
    return state.map( el => el.id===id ? {...el,...newdata} : el);
}