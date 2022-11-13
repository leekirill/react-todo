import style from '../Welcome/Welcome.module.scss'
import pic from '../../assets/pic.jpg'
import Button from "react-bootstrap/Button";
import { AiOutlinePlus } from "react-icons/ai";


export default function Welcome({onClick}) {
    return (
        <div className={style.container}>
            <img src={pic} alt="pic" className={style.image}></img>
            <h2>You're all done for today!</h2>
            <p className={style.text}>Enjoy the rest of your day 😊</p>
            <Button variant="primary" onClick={onClick}>Add task <AiOutlinePlus/></Button>
        </div>
    )
}

