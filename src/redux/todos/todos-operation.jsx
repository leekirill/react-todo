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


    // axios
    //     .get('/todos')
    //     .then(({ data }) => dispatch(action.fetchTodoSuccess(data)))
    //     .catch(error => action.fetchTodoError(error))
}

// const addTodo = (taskName) => dispatch => {

//     dispatch(action.addTodoRequest())

//     axios
// }

export { fetchTodo }