import style from '../Welcome/Welcome.module.scss'
import pic from '../../img/pic.jpg'

export default function Welcome({onClick}) {
    return (
        <div className={style.container}>
            <img src={pic} alt="pic" className={style.image}></img>
            <p className={style.text}>Наслаждайтесь отдыхом 😊</p>
            <button onClick={onClick} className={style.btn}>Добавить задачу</button>
        </div>
    )
}

