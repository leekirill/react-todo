import { useEffect, useState } from 'react'
import style from '../Form/Form.module.scss'
import { addTodo } from "../../redux/todos/todos-operation";
import { useDispatch } from 'react-redux';
import Button from "react-bootstrap/Button";



export default function Form({ toggleChange }) {
  
  const dispatch = useDispatch()
  const onSubmitTodo = (todo) => dispatch(addTodo(todo))
  
  const [name, setName] = useState('')
  
  const handleChange = (e) => setName(e.currentTarget.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    onSubmitTodo({
      taskName: name
    })
    
    setName('')
  }

  useEffect(() => {
    return setName('')
  }, [toggleChange])

  return (

      <form
        className={style.form}
        onSubmit={handleSubmit}
      >
        <label className={style.label}>
          Новая задача
          <textarea className={style.input}
            type="text"
            onChange={handleChange}
            value={name}
          placeholder="напр., Написать книгу"
          autoFocus
          ></textarea>
        </label>
        <div className={style.button__container}>
          <Button variant="primary" type="submit" onClick={toggleChange}>Добавить задачу</Button>
          <Button variant="outline-primary" type="button" onClick={toggleChange}>Отмена</Button>
        </div>

      </form>
    )
  }
