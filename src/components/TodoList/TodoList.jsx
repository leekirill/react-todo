import React from "react";
import * as action from '../../redux/todos/todos-actions'
import { useSelector, useDispatch } from 'react-redux'

export default function TodoList() {

    const todos = useSelector(state => state.todos)
    const filter = useSelector(state => state.filter)

    const dispatch = useDispatch()
    const deleteTodo = (id) => dispatch(action.deleteTodo(id))
    const updateTodo = (id) => dispatch(action.updateTodo(id))
    const editTodo = (title) => dispatch(action.editTodo(title))

    const filteredList = todos.filter(e => e.taskName.toLowerCase().includes(filter.toLowerCase()))

    return filteredList.map(({ id, taskName, completed }) => {

        return (
                <li
                    key={id}
                    draggable={true}
                    className={!completed ? "item" : "item-completed"}
                >
                        <label className="label">
                            
                            <input
                                className="radio"
                                type="radio"
                                checked={completed}
                                onClick={() => updateTodo(id)}
                            ></input>
                            <span>{taskName}</span>
                        </label>
                    <button
                        onClick={() => deleteTodo(id)}
                        className="deleteBtn"
                        >
                        Удалить
                    </button>
                </li>
            );
        }
    )
}
