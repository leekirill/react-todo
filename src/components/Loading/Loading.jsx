import Spinner from 'react-bootstrap/Spinner';
import style from './Loading.module.scss'

export default function Loading() {
    return <div className={style.box}><Spinner animation="border" role="status" variant="primary" size="m" /></div>
}