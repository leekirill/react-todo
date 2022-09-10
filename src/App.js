import { Component } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import Welcome from "./components/Welcome/Welcome";

class App extends Component {
  state = {
    name: "",
    todos: [],
    filter: "",
    isActive: false,
  };

  handleChange = (e) => {
    this.setState({
      name: e.currentTarget.value,
    });
  };

  filterChange = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  addToDo = (e) => {
    e.preventDefault();

    const todo = {
      id: nanoid(2),
      title: this.state.name,
      completed: false,
    };

    if (this.state.name === "") {
      toast.error("Впишите задачу");
      return;
    }

    this.setState((prevState) => ({
      todos: [todo, ...prevState.todos],
      isActive: !this.state.isActive,
    }));

    this.clear();
  };

  deleteToDo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((e) => e.id !== id),
    }));
  };

  updateToDo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  clear() {
    this.setState({
      name: "",
    });
  }

  clearAll() {
    this.setState({
      name: "",
      todos: [],
      filter: "",
      isActive: false,
    });
  }

  toggleState = (e) => {
    if (e.currentTarget === e.target) {
      this.setState({
        isActive: !this.state.isActive,
      });
    }
  };

  filterToDo = () => {
    const filteredToDo = this.state.todos.map((e) => console.log(e));
    console.log(filteredToDo);
  };

  render() {
    return (
      <>
        <Header
          onClick={this.toggleState}
          onChange={this.filterChange}
          total={this.state.todos.length}
        />
        {this.state.todos.length === 0 ? (
          <Welcome onClick={this.toggleState} />
        ) : (
          <div className="container">
            <div className="content">
              <ul>
                <button onClick={this.toggleState}>Добавить задачу</button>
                {this.state.todos.map(({ id, title, completed }) => {
                  return (
                    <li
                      key={id}
                      onClick={() => this.updateToDo(id)}
                      className={!completed ? "item" : "item-completed"}
                    >
                      <label className="label">
                        <input
                          className="radio"
                          type="radio"
                          checked={completed}
                        ></input>
                        <span>{title}</span>
                      </label>
                      <button onClick={() => this.deleteToDo(id)}>
                        Удалить
                      </button>
                    </li>
                  );
                })}
              </ul>
              <button onClick={() => this.clearAll()}>Удалить всё</button>
            </div>
          </div>
        )}
        <Modal isActive={this.state.isActive} toggleChange={this.toggleState}>
          <Form
            value={this.state.name}
            onChange={this.handleChange}
            onSubmit={this.addToDo}
            toggleChange={this.toggleState}
          />
        </Modal>
        <ToastContainer />
      </>
    );
  }
}

export default App;
