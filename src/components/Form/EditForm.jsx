import { useEffect, useState } from 'react'
import style from '../Form/Form.module.scss'
import { editTodo } from "../../redux/todos/todos-operation";
import { useDispatch } from 'react-redux';


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
          <button type="submit" className={style.btn} onClick={onClickEdit}>Сохранить</button>
          <button type="button" className={style.btnSecondary} onClick={onClickEdit}>Отмена</button>
        </div>

      </form>
    )
  }
