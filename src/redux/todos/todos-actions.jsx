import { createAction } from '@reduxjs/toolkit'

const fetchTodoRequest = createAction('todos/fetchTodoRequest')
const fetchTodoSuccess = createAction('todos/fetchTodoSuccess')
const fetchTodoError = createAction('todos/fetchTodoError')

const addTodoRequest = createAction('todos/addTodoRequest')
const addTodoSuccess = createAction('todos/addTodoSuccess')
const addTodoError = createAction('todos/addTodoError')

const deleteTodo = createAction('todos/Delete')
const deleteAllTodo = createAction('todos/DeleteAll')

const updateTodo = createAction('todos/Update')
const editTodo = createAction('todos/Edit')

const filterChange = createAction('filter/Filter_change')


export { fetchTodoRequest, fetchTodoSuccess, fetchTodoError, addTodoRequest, addTodoSuccess, addTodoError, deleteTodo, deleteAllTodo, updateTodo, editTodo, filterChange }