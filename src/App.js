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
import TodoList from "./components/TodoList/TodoList";

class App extends Component {
  state = {
    todos: [],
    filter: "",
    isActive: false,
  };

  filterChange = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  addToDo = (text) => {
    const todo = {
      id: nanoid(2),
      title: text,
      completed: false,
    };

    if (text === "") {
      toast.error("Впишите задачу");
      return;
    }

    this.setState((prevState) => ({
      todos: [todo, ...prevState.todos],
      isActive: !this.state.isActive,
    }));
  };

  deleteToDo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((e) => e.id !== id),
    }));

    console.log(id);
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

  clearAll() {
    var result = window.confirm("Вы уверены?");

    if (result) {
      this.setState({
        todos: [],
      });
    } else {
      return;
    }
  }

  toggleState = (e) => {
    if (e.currentTarget === e.target) {
      this.setState({
        isActive: !this.state.isActive,
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem("state", JSON.stringify(this.state.todos));
    }
  }

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
                <button onClick={this.toggleState} className="addBtn">
                  Добавить задачу
                </button>
                <TodoList
                  todoState={this.state.todos}
                  updateToDo={this.updateToDo}
                  deleteToDo={this.deleteToDo}
                  filterState={this.state.filter}
                />
              </ul>
              <button className="deleteBtn" onClick={() => this.clearAll()}>
                Удалить всё
              </button>
            </div>
          </div>
        )}
        <Modal isActive={this.state.isActive} toggleChange={this.toggleState}>
          <Form onSubmit={this.addToDo} toggleChange={this.toggleState} />
        </Modal>
        <ToastContainer
          position="top-left"
          autoClose={3000}
          hideProgressBar
          pauseOnHover={false}
        />
      </>
    );
  }
}

export default App;
