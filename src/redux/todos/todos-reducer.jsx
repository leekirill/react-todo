import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addTodoRequest, addTodoSuccess, addTodoError, deleteTodo, deleteAllTodo, updateTodo, editTodo, filterChange, fetchTodoSuccess } from './todos-actions'
import { toast } from "react-toastify";

const todosReducer = createReducer([], {
    [fetchTodoSuccess]: (_, { payload }) => payload,

    [addTodoSuccess]: (state, { payload }) => {
        if (payload.title !== '') {
            return [payload, ...state]
        } else {
            toast.error("Впишите задачу");
            return;
        }
    },
    [deleteTodo]: (state, { payload }) => {
        if (window.confirm("Вы уверены?") === true) {
            return state.filter((todo) => todo.id !== payload)
        } else {
            return state
        }
    },
    [deleteAllTodo]: (state, _) => {

        if (window.confirm("Вы уверены?") === false) {
            return state
        } else {
            return [];
        }
    },
    [updateTodo]: (state, { payload }) => {
        
        return state.map(todo => {
            if (todo.id === payload) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
                return todo
        });
    }
})

const filterReducer = createReducer('', {
    [filterChange]: (_, { payload }) => {
        return payload
    }
})

const loading = createReducer(false, {
    [addTodoRequest]: true,
    [addTodoSuccess]: false,
    [addTodoError]: false
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