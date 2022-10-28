import { configureStore } from '@reduxjs/toolkit'
import rootCombiner from './todos/todos-reducer'

const store = configureStore({
    reducer: rootCombiner
})
export default store