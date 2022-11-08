import { combineReducers } from "redux";
import { createSlice, createReducer } from "@reduxjs/toolkit";
// import { filterChange } from './todos-actions'
import { fetchTodo, addTodo, deleteTodo, deleteAllTodo, editTodo, completeTodo } from './todos-operation'

const todoSlice = createSlice({
    name: 'todos',
    initialState: { todos: [], filter: '', loading: false },
    reducers: {
        filterChange: (state, { payload }) => {
            state.filter = payload
        }
    },
    extraReducers: {
        [fetchTodo.fulfilled]: (state, { payload }) => {
            state.todos = payload.reverse()
            state.loading = false
        },
        [addTodo.fulfilled]: (state, { payload }) => {
            state.todos = [payload, ...state.todos]
            state.loading = false
        },
        [deleteTodo.fulfilled]: (state, { payload }) => {
            state.todos = state.todos.filter(todo => todo.id !== payload)
            state.loading = false
        },
        [editTodo.fulfilled]: (state, { payload }) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === payload.id) return payload
                return todo
            })
            state.loading = false
        },
        [completeTodo.fulfilled]: (state, { payload }) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === payload.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                } else {
                    return todo
                }
            })
            state.loading = false
        },

        [fetchTodo.pending]: (state, _) => {
            state.loading = true
        },
        [fetchTodo.rejected]: (state, _) => {
            state.loading = false
        },
        [addTodo.pending]: (state, _) => {
            state.loading = true
        },
        [addTodo.rejected]: (state, _) => {
            state.loading = false
        },
        [deleteTodo.pending]: (state, _) => {
            state.loading = true
        },
        [deleteTodo.rejected]: (state, _) => {
            state.loading = false
        },
        [editTodo.pending]: (state, _) => {
            state.loading = true
        },
        [editTodo.rejected]: (state, _) => {
            state.loading = false
        },
        [completeTodo.pending]: (state, _) => {
            state.loading = true
        },
        [completeTodo.rejected]: (state, _) => {
            state.loading = false
        }
    }
})

export const { filterChange } = todoSlice.actions
export default todoSlice.reducer

// const todosReducer = createReducer([], {
//     [fetchTodo.fulfilled]: (_, { payload }) => payload.reverse(),
//     [addTodo.fulfilled]: (state, { payload }) => [payload, ...state],
//     [deleteTodo.fulfilled]: (state, { payload }) => state.filter((todo) => todo.id !== payload),
//     [editTodo.fulfilled]: (state, { payload }) => state.map(todo => {
//         if (todo.id === payload.id) return payload
//         return todo
//     }),
//     [deleteAllTodo.fulfilled]: (_, { payload }) => [],
//     [completeTodo.fulfilled]: (state, { payload }) => state.map(todo => {
//         if (todo.id === payload.id) {
//             return {
//                 ...todo,
//                 completed: !todo.completed
//             }
//         } else {
//             return todo
//         }
//     })
// })

// const filterReducer = createReducer('', {
//     [filterChange]: (_, { payload }) => payload
// })

// const loading = createReducer(false, {
//     [fetchTodo.pending]: () => true,
//     [fetchTodo.fulfilled]: () => false,
//     [fetchTodo.rejected]: () => false,
//     [addTodo.pending]: () => true,
//     [addTodo.fulfilled]: () => false,
//     [addTodo.rejected]: () => false,
//     [deleteTodo.pending]: () => true,
//     [deleteTodo.fulfilled]: () => false,
//     [deleteTodo.rejected]: () => false,
//     [editTodo.pending]: () => true,
//     [editTodo.fulfilled]: () => false,
//     [editTodo.rejected]: () => false,
//     [completeTodo.pending]: () => true,
//     [completeTodo.fulfilled]: () => false,
//     [completeTodo.rejected]: () => false,
// })

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



// export default combineReducers({
//     todos: todosReducer,
//     filter: filterReducer,
//     loading
// })