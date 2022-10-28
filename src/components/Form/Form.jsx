import { useEffect, useState } from 'react'
import style from '../Form/Form.module.scss'
// import * as action from '../../redux/todos/todos-actions'
import { useDispatch } from 'react-redux';

export default function Form({ toggleChange }) {
  
  const dispatch = useDispatch()
  // const onSubmit = (text) => dispatch(action.addTodo(text))
  
  const [name, setName] = useState('')
  
  const handleChange = (e) => setName(e.currentTarget.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    // onSubmit(name)
    
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
          <button type="submit" className={style.btn} onClick={toggleChange}>Добавить задачу</button>
          <button type="button" className={style.btnSecondary} onClick={toggleChange}>Отмена</button>
        </div>

      </form>
    )
  }
