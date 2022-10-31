import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { fetchTodoRequest, fetchTodoSuccess, fetchTodoError, addTodoRequest, addTodoSuccess, addTodoError, deleteTodoRequest, deleteTodoSuccess, deleteTodoError, editTodoRequest, editTodoSuccess, editTodoError, deleteAllTodoRequest, deleteAllTodoSuccess, deleteAllTodoError, completeTodoRequest, completeTodoSuccess, completeTodoError, filterChange } from './todos-actions'

const todosReducer = createReducer([], {
    [fetchTodoSuccess]: (_, { payload }) => payload.reverse(),
    [addTodoSuccess]: (state, { payload }) => [payload, ...state],
    [deleteTodoSuccess]: (state, { payload }) => state.filter((todo) => todo.id !== payload),
    [editTodoSuccess]: (state, { payload }) => state.map(todo => {
        if (todo.id === payload.id) return payload
        return todo
    }),
    [deleteAllTodoSuccess]: (_, { payload }) => [],
    [completeTodoSuccess]: (state, { payload }) => state.map(todo => {
        if (todo.id === payload.id) {
            return {
                ...todo,
                completed: !todo.completed
            }
        } else {
            return todo
        }
    })
})

const filterReducer = createReducer('', {
    [filterChange]: (_, { payload }) => payload
})

const loading = createReducer(false, {
    [fetchTodoRequest]: () => true,
    [fetchTodoSuccess]: () => false,
    [fetchTodoError]: () => false,
    [addTodoRequest]: () => true,
    [addTodoSuccess]: () => false,
    [addTodoError]: () => false,
    [deleteTodoRequest]: () => true,
    [deleteTodoSuccess]: () => false,
    [deleteTodoError]: () => false,
    [editTodoRequest]: () => true,
    [editTodoSuccess]: () => false,
    [editTodoError]: () => false,
    [completeTodoRequest]: () => true,
    [completeTodoSuccess]: () => false,
    [completeTodoError]: () => false
})

// const todosReducer = (state = [], { type, payload }) => {
//     switch (type) {
//         case types.ADD:
//             if (payload.title !== '') {
//                 localStorage.setItem("state", JSON.stringify([ payload, ...state ]));
//                 return [ payload, ...state ]
//             } else {
//                 toast.error("Впишите задачу");
//                 return;
//             }
//         case types.DELETE:
//             if (window.confirm("Вы уверены?") === true) {
//                 return state.filter((todo) => todo.id !== payload)
//             } else {
//                 return state
//             }
//         ;
//         case types.DELETE_All:
//             if(window.confirm("Вы уверены?") === false) return state;
//             return payload;
        
//         case types.UPDATE:
//             return state.map(todo => {
//                 if (todo.id === payload) {
//                     return {
//                         ...todo,
//                         completed: !todo.completed
//                     }
//                 }
//                 return todo
//             });
//         case types.EDIT:
//             return state.map(todo => {
//                 if (todo.id === payload) {
//                     console.log(todo.title)
//                 }
//                 return todo
//             })
//         default: 
//             return state
//     }
// }

// const filterReducer = (state = '', { type, payload }) => {
//     switch (type) {
//         case types.FILTER_CHANGE:
//             return payload
//         default:
//             return state
//     }
// }



export default combineReducers({
    todos: todosReducer,
    filter: filterReducer,
    loading
})