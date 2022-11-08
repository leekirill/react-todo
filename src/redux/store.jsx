import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './todos/todos-reducer'

const store = configureStore({
    reducer: todoSlice,
})
export default store