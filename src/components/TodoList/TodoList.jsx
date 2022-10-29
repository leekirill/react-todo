import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo } from "../../redux/todos/todos-operation";
import { nanoid } from 'nanoid'
import { BsFillTrashFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';
import { useState } from "react";
import EditForm from "../Form/EditForm";
import Modal from "../Modal/Modal";


export default function TodoList({onClickEdit, setEditNameIndex}) {

    const todos = useSelector(state => state.todos)
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

    const filteredList = todos.filter(e => e.taskName.toLowerCase().includes(filter.toLowerCase()))

    return filteredList.map(({ id, taskName, completed }) => {
        return (
                <li
                    key={nanoid(2)}
                    draggable={true}
                    className={!completed ? "item" : "item-completed"}
                >
                        <label className="label">
                            
                            <input
                                className="checkbox"
                                type="checkbox"
                                defaultChecked={completed}
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
                </li>
            );
        }
    )
}
