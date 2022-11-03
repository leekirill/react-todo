import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

axios.defaults.baseURL = 'https://63072734c0d0f2b80127fc98.mockapi.io/'

const fetchTodo = createAsyncThunk(
    'todos/fetchTodo',
    async () => {
        const { data } = await axios.get('/todos')
        return data
  }
)

const addTodo = createAsyncThunk('todos/addTodo',
    async (todo) => {
        const { data } = await axios.post('/todos', todo)
        return data
  }
)

const deleteTodo = createAsyncThunk('todos/daleteTodo',
    async (id) => {
        const { data } = await axios.delete(`/todos/${id}`)
        return data.id
  }
)


const editTodo = createAsyncThunk('todos/editTodo',
    async (id, taskName) => {
        const { data } = await axios.put(`/todos/${id}`, { taskName })
        return data
  }
)

const completeTodo = createAsyncThunk('todos/completeTodo',
    async (id, completeState) => {
        const { data } = await axios.put(`/todos/${id}`, {
            completed: completeState
        })
        return data

  }
)

const deleteAllTodo = () => async dispatch => {
    return
}


// const completeTodo = (id, completeState) => async dispatch => {

//     dispatch(action.completeTodoRequest())

//     try {
//         const todos = await axios.put(`/todos/${id}`, {
//             completed: completeState
//         })
//         dispatch(action.completeTodoSuccess(todos.data))
//     } catch (error) {
//         dispatch(action.completeTodoError(error.message))
//     }
// }

// const deleteAllTodo = () => async dispatch => {
//     dispatch(action.deleteAllTodoSuccess())

//     try {
//         const todo = await axios.get('/todos')
//         dispatch(action.deleteAllTodoSuccess(todo.data))
//     } catch (error) {
//         dispatch(action.deleteAllTodoError(error.message))
//     }
// }

export { fetchTodo, addTodo, deleteTodo, deleteAllTodo, editTodo, completeTodo }