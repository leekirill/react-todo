
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { filterChange } from '../../redux/todos/todos-reducer'


import { HiHome } from 'react-icons/hi';
import { GoPlus } from 'react-icons/go'

import style from '../Header/Header.module.scss'


export default function Header({ onClick }) {
    
    const value = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const handleChange = (value) => dispatch(filterChange(value))

    return (
        <header>
            <div className='container'>
            <div className={style.content}>
                <div className={style.control}>
                    <div className={style.menu}>  
                        <NavLink to='/'><div className={style.menuItem}><HiHome /></div></NavLink>
                        <button className={style.menuItem} onClick={onClick}><GoPlus /></button>
                    </div>
                    <input type="text" value={value} onChange={(e) => handleChange(e.target.value)} placeholder='search' className={style.input} />
                </div>
                <div className={style.auth}>
                    <NavLink to='/signup' className={({isActive}) => isActive ? style.linkActive : style.link}>Sign up</NavLink>
                    <NavLink to='/login' className={({isActive}) => isActive ? style.linkActive : style.link}>Log in</NavLink>
                </div>
                </div>
                </div>
        </header>
    )
}