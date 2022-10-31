import { createAction } from '@reduxjs/toolkit'

const fetchTodoRequest = createAction('todos/fetchTodoRequest')
const fetchTodoSuccess = createAction('todos/fetchTodoSuccess')
const fetchTodoError = createAction('todos/fetchTodoError')

const addTodoRequest = createAction('todos/addTodoRequest')
const addTodoSuccess = createAction('todos/addTodoSuccess')
const addTodoError = createAction('todos/addTodoError')

const deleteTodoRequest = createAction('todos/deleteTodoRequest')
const deleteTodoSuccess = createAction('todos/deleteTodoSuccess')
const deleteTodoError = createAction('todos/deleteTodoError')

const editTodoRequest = createAction('todos/editTodoRequest')
const editTodoSuccess = createAction('todos/editTodoSuccess')
const editTodoError = createAction('todos/editTodoError')

const completeTodoRequest = createAction('todos/completeTodoRequest')
const completeTodoSuccess = createAction('todos/completeTodoSuccess')
const completeTodoError = createAction('todos/completeTodoError')

const deleteAllTodoRequest = createAction('todos/deleteAllTodoRequest')
const deleteAllTodoSuccess = createAction('todos/deleteAllTodoSuccess')
const deleteAllTodoError = createAction('todos/deleteAllTodoError')

const filterChange = createAction('filter/Filter_change')


export { fetchTodoRequest, fetchTodoSuccess, fetchTodoError, addTodoRequest, addTodoSuccess, addTodoError, deleteTodoRequest, deleteTodoSuccess, deleteTodoError, deleteAllTodoRequest, deleteAllTodoSuccess, deleteAllTodoError, editTodoRequest, editTodoSuccess, editTodoError, completeTodoRequest, completeTodoSuccess, completeTodoError, filterChange }