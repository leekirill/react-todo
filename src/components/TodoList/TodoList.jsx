import React from "react";

export default function TodoList({ todoState, updateToDo, deleteToDo, filterState }) {

    const filteredList = todoState.filter(e => e.title.toLowerCase().includes(filterState.toLowerCase()))

    return filteredList.map(({ id, title, completed }) => {
        return (
                <li
                    key={id}
                    draggable={true}
                    onClick={() => updateToDo(id)}
                    className={!completed ? "item" : "item-completed"}
                >
                        <label className="label">
                            <input
                                className="radio"
                                type="radio"
                                checked={completed}
                            ></input>
                            <span>{title}</span>
                        </label>
                    <button
                        onClick={() => deleteToDo(id)}
                        className="deleteBtn"
                        >
                        Удалить
                    </button>
                </li>
            );
        }
    )
}

