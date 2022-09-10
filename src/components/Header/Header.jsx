import style from '../Header/Header.module.scss'

export default function Header({ onClick, onChange, total}) {
    return (
        <header className={style.header}>
            <button className={style.btn} onClick={onClick}>+</button>
            <input type="text" onChange={onChange} placeholder='search'></input>
            <span>Задачи: {total}</span>
        </header>
    )
}