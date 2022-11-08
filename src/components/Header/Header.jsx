import { filterChange } from '../../redux/todos/todos-reducer'
import style from '../Header/Header.module.scss'
import { useSelector, useDispatch } from 'react-redux'


export default function Header({ onClick, total }) {
    
    const value = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const handleChange = (value) => dispatch(filterChange(value))

    return (
        <header className={style.header}>
            <button className={style.btn} onClick={onClick}>+</button>
            <input type="text" value={value} onChange={(e) => handleChange(e.target.value)} placeholder='search' className={style.input}></input>
            <span>Total: {total}</span>
        </header>
    )
}