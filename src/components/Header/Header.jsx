import * as action from '../../redux/todos/todos-actions'
import style from '../Header/Header.module.scss'
import { useSelector, useDispatch } from 'react-redux'

export default function Header({ onClick, total }) {
    
    const value = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const onChange = (value) => dispatch(action.filterChange(value))

    return (
        <header className={style.header}>
            <button className={style.btn} onClick={onClick}>+</button>
            <input type="text" value={value.filter} onChange={(e) => onChange(e.target.value)} placeholder='search' className={style.input}></input>
            <span>Total: {total}</span>
        </header>
    )
}