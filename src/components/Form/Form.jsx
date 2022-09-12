
import { Component } from 'react'
import style from '../Form/Form.module.scss'

export default class Form extends Component {
  
  state = {
    name: ''
  }

  handleChange = (e) => {
    this.setState({
      name: e.currentTarget.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.onSubmit(this.state.name)
    this.clear()
  }

  clear() {
    this.setState({
      name: '',
    });
  }
  
  render() {
    return (
      <form
        className={style.form}
        onSubmit={this.handleSubmit}
      >
        <label className={style.label}>
          Новая задача
          <textarea className={style.input}
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="напр., Написать книгу"
          ></textarea>
        </label>
        <div className={style.button__container}>
          <button type="submit" className={style.btn}>Добавить задачу</button>
          <button type="button" className={style.btnSecondary} onClick={this.props.toggleChange}>Отмена</button>
        </div>

      </form>
    )
  }
}