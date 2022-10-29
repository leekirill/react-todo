import { useEffect, useState } from 'react'
import style from '../Form/Form.module.scss'
import { editTodo } from "../../redux/todos/todos-operation";
import { useDispatch } from 'react-redux';
import Button from "react-bootstrap/Button";


export default function EditForm({ onClickEdit, taskName, isEdit, editNameIndex }) {
  
  const dispatch = useDispatch()
  const onSubmitEditTodo = (id, todo) => dispatch(editTodo(id, todo))
  
  const [value, setValue] = useState('') 

  useEffect(() => {
    setValue(taskName)
  }, [isEdit])

  
  const handleChange = (e) => setValue(e.currentTarget.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmitEditTodo(editNameIndex, value)
    setValue(value)
  }

  return (

      <form
        className={style.form}
        onSubmit={handleSubmit}
      >
        <label className={style.label}>
          Редактирование
          <textarea className={style.input}
            type="text"
            onChange={handleChange}
            value={value}
            autoFocus
          ></textarea>
        </label>
        <div className={style.button__container}>
          <Button variant="primary" type="submit" onClick={onClickEdit}>Сохранить</Button>
          <Button variant="outline-primary" type="button" onClick={onClickEdit}>Отмена</Button>
        </div>

      </form>
    )
  }
