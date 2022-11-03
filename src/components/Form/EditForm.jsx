import { useEffect, useState } from 'react'
import style from '../Form/Form.module.scss'
import { editTodo } from "../../redux/todos/todos-operation";
import { useDispatch } from 'react-redux';
import Button from "react-bootstrap/Button";
import { useRef } from 'react';


export default function EditForm({ onClickEdit, taskName, isEdit, editNameIndex }) {
  
  const dispatch = useDispatch()
  const onSubmitEditTodo = ({id, taskName}) => dispatch(editTodo({id, taskName}))
  
  const [value, setValue] = useState('') 
  const input = useRef(null);

  useEffect(() => {
    setValue(taskName)
    if (input.current) {
      input.current.focus();
    }
  }, [taskName])

  
  const handleChange = (e) => setValue(e.currentTarget.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmitEditTodo({ id: editNameIndex, taskName: value })
  }

  return (
      <form
        className={style.form}
        onSubmit={handleSubmit}
      >
        <label className={style.label}>
          Edit task
          <textarea className={style.input}
            type="text"
            onChange={handleChange}
            value={value}
            ref={input}
          ></textarea>
        </label>
        <div className={style.button__container}>
          <Button variant="primary" type="submit" onClick={() => onClickEdit()}>Save</Button>
          <Button variant="light" type="button" onClick={() => onClickEdit()}>Cancel</Button>
        </div>

      </form>
    )
  }
