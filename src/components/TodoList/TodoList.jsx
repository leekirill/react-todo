import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, completeTodo } from "../../redux/todos/todos-operation";
import { Reorder } from "framer-motion"
import { nanoid } from 'nanoid'
import { BsFillTrashFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';
import { useState } from "react";
import EditForm from "../Form/EditForm";
import Modal from "../Modal/Modal";


export default function TodoList({ onClickEdit, setEditNameIndex, items }) {

    const filter = useSelector(state => state.filter)

    const dispatch = useDispatch()
    
    const onClickDeleteTodo = (id) => {
        if (window.confirm('Are you sure?') === true) {
            dispatch(deleteTodo(id))
        } else {
            return
        }
    }

    const onClickEditButton = (id, taskName) => {
        onClickEdit(taskName)
        setEditNameIndex(id)
    }

    const onClickComplete = ({id, completeState}) => dispatch(completeTodo({id, completeState}))

    const filteredList = items.filter(e => e.taskName.toLowerCase().includes(filter.toLowerCase()))
   
    if (filteredList.length === 0) return <h1>Бананів в нас нема</h1>

    return (
    filteredList.map((todo) => {
        const { id, taskName, completed } = todo
        return (
                <Reorder.Item
                    key={id}
                    value={todo}
                    className={!completed ? "item" : "item-completed"}
                >
                    <label className="label">
                        <input
                            className="checkbox"
                            type="checkbox"
                            defaultChecked={completed}
                            onClick={() => onClickComplete({id, completeState: completed})}
                        ></input>
                        <span>{taskName}</span>
                    </label>
                    <div className="item__buttons">
                        <button className="item__button" onClick={() => onClickEditButton(id, taskName)}><AiFillEdit /></button>
                        <button
                            onClick={() => onClickDeleteTodo(id)}
                            className="item__button"
                            >
                            <BsFillTrashFill />
                        </button>
                    </div>
                </Reorder.Item>
            );
        }
    ))
}

