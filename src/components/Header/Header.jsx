import * as action from '../../redux/todos/todos-actions'
import style from '../Header/Header.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'


export default function Header({ onClick, total }) {
    
    const value = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const handleChange = (value) => dispatch(action.filterChange(value))

    return (
        <header className={style.header}>
            <button className={style.btn} onClick={onClick}>+</button>
            <input type="text" value={value.filter} onChange={(e) => handleChange(e.target.value)} placeholder='search' className={style.input}></input>
            <span>Total: {total}</span>
        </header>
    )
}