import axios from "axios"
import * as action from './todos-actions'

axios.defaults.baseURL = 'https://63072734c0d0f2b80127fc98.mockapi.io/'

const fetchTodo = () => async dispatch => {

    dispatch(action.fetchTodoRequest())
    
    try {
        const todos = await axios.get('/todos')
        dispatch(action.fetchTodoSuccess(todos.data))
    } catch (error) {
        dispatch(action.fetchTodoError(error))
    }
}

const addTodo = (todo) => async dispatch => {

    dispatch(action.addTodoRequest())

    try {
        const todos = await axios.post('/todos', todo)
        dispatch(action.addTodoSuccess(todos.data))
    } catch (error) {
        dispatch(action.addTodoError(error))
    }
}

const deleteTodo = (id) => async dispatch => {

    dispatch(action.deleteTodoRequest())

    try {
        const todos = await axios.delete(`/todos/${id}`)
        dispatch(action.deleteTodoSuccess(todos.data.id))
    } catch (error) {
        dispatch(action.deleteTodoError(error.message))
    }
}

const deleteAllTodo = () => async dispatch => {

    dispatch(action.deleteAllTodoRequest())

    try {
        const todos = await axios.get(`/todos`)
        dispatch(action.deleteAllTodoSuccess(todos.data))
    } catch (error) {
        dispatch(action.deleteAllTodoError(error.message))
    }
}

const editTodo = (id, taskName) => async dispatch => {

    dispatch(action.editTodoRequest())

    try {
        const todos = await axios.put(`/todos/${id}`, {
            taskName
        })
        dispatch(action.editTodoSuccess(todos.data))
    } catch (error) {
        dispatch(action.editTodoError(error.message))
    }
}

export { fetchTodo, addTodo, deleteTodo, deleteAllTodo, editTodo }