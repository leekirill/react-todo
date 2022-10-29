import style from '../Welcome/Welcome.module.scss'
import pic from '../../img/pic.jpg'
import Button from "react-bootstrap/Button";

export default function Welcome({onClick}) {
    return (
        <div className={style.container}>
            <img src={pic} alt="pic" className={style.image}></img>
            <p className={style.text}>Наслаждайтесь отдыхом 😊</p>
            <Button variant="primary" onClick={onClick}>Добавить задачу</Button>
        </div>
    )
}

