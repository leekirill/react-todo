import { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import pic from '../../assets/pic.jpg'
import style from './Login.module.scss'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value

        switch (name) {
            case 'email':
                return setEmail(value)
            case 'password':
                return setPassword(value)
            default:
                return
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log({
            email,
            password
        })
    }

    return (
            <div className={style.content}>
                <div className={style.contentLeft}>
                <Form onSubmit={handleSubmit} className={style.form}>
                    <h2 className={style.h2}>Log in</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' value={email} onChange={handleChange} placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' value={password} onChange={handleChange} placeholder="Password" />
                    </Form.Group>
                        <Button variant="primary" type="submit" style={{width: '30%'}}>
                            Log in
                        </Button>
                    </Form>
                    </div>
                    <div style={{width: '100%'}}>
                        <img src={pic} alt="" style={{width: '100%'}} />
                    </div>
                </div>
    )
}

export default Login