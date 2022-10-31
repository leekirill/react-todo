import { useEffect, useState } from 'react'
import style from '../Form/Form.module.scss'
import { addTodo } from "../../redux/todos/todos-operation";
import { useDispatch } from 'react-redux';
import Button from "react-bootstrap/Button";
import { useRef } from 'react';



export default function Form({ toggleChange }) {
  
  const dispatch = useDispatch()
  const onSubmitTodo = (todo) => dispatch(addTodo(todo))
  
  const [name, setName] = useState('')
  const input = useRef(null)
  
  const handleChange = (e) => setName(e.currentTarget.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    onSubmitTodo({
      taskName: name
    })
    
    setName('')
  }

  useEffect(() => {
    if (input.current) {
      input.current.focus();
    }
    setName('')
    
  }, [toggleChange])

  return (

      <form
        className={style.form}
        onSubmit={handleSubmit}
      >
        <label className={style.label}>
          New task
          <textarea className={style.input}
            type="text"
            onChange={handleChange}
            value={name}
            placeholder="Task name"
            ref={input}
          ></textarea>
        </label>
        <div className={style.button__container}>
          <Button variant="primary" type="submit" onClick={toggleChange}>Add task</Button>
          <Button variant="light" type="button" onClick={toggleChange}>Cancel</Button>
        </div>

      </form>
    )
  }
