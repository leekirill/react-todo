import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodo, deleteAllTodo } from "../../redux/todos/todos-operation";
import { Reorder } from "framer-motion";

import Welcome from "../../components/Welcome/Welcome";
import TodoList from "../../components/TodoList/TodoList";
import Loading from "../../components/Loading/Loading";
import Button from "react-bootstrap/Button";

import style from './Homepage.module.scss'

const Homepage = ({ setEditNameIndex, toggleState, onClickEdit, total}) => {

    const onClickDeleteAllTodo = () => dispatch(deleteAllTodo());

    const todos = useSelector((state) => state.todos);
    const loading = useSelector((state) => state.loading);
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(todos);
    }, [todos]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodo());
    }, [dispatch]);

    return (
    <>
        {loading ? <Loading /> : ""}
        {todos && todos.length === 0 ? (
            <Welcome onClick={toggleState} />
        ) : (
            <div className="content">
                <Reorder.Group axis="y" values={items} onReorder={setItems} className={style.ul}>
                <button onClick={toggleState} className="item__add">
                    Add task
                </button>
                <TodoList
                    onClickEdit={onClickEdit}
                    setEditNameIndex={setEditNameIndex}
                    items={items}
                />
                </Reorder.Group>
                <div className={style.listBottom}>
                <Button
                onClick={() => onClickDeleteAllTodo()}
                variant="outline-danger"
                >
                Delete all
                </Button>
                <span className={style.span}>{`Total: ${total}`}</span>            
                </div>        
            </div>
        )}
    </>
    )
}

export default Homepage