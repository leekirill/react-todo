
import style from '../Form/Form.module.scss'

export default function Form({ value, onSubmit, onChange, toggleChange }) {
    return (
      <form
          className={style.form}
          onSubmit={onSubmit}
        >
          <label className={style.label}>
            Новая задача
            <textarea className={style.input}
              type="text"
              onChange={onChange}
              value={value}
              placeholder="напр., Написать книгу"
            ></textarea>
        </label>
        <div className={style.button__container}>
          <button type="submit" className={style.btn}>Добавить задачу</button>
          <button type="button" className={style.btnSecondary} onClick={toggleChange}>Отмена</button>
        </div>

        </form>
    )
}