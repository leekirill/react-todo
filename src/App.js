import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import EditForm from "./components/Form/EditForm";
import Modal from "./components/Modal/Modal";
import Welcome from "./components/Welcome/Welcome";
import TodoList from "./components/TodoList/TodoList";
import { fetchTodo, deleteAllTodo } from "./redux/todos/todos-operation";
import Loading from "./components/Loading/Loading";

import Button from "react-bootstrap/Button";

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editName, setIsEditName] = useState("");
  const [editNameIndex, setEditNameIndex] = useState(null);

  const todos = useSelector((state) => state.todos);
  const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();
  const onClickDeleteAllTodo = () => dispatch(deleteAllTodo());

  const toggleState = (e) => {
    if (e.currentTarget === e.target) setIsActive(!isActive);
  };

  const onClickEdit = (taskName) => {
    setIsEdit(!isEdit);
    setIsEditName(taskName);
  };

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  return (
    <>
      <Header onClick={toggleState} total={todos && todos.length} />
      {loading ? <Loading /> : ""}
      {todos.length === 0 ? (
        <Welcome onClick={toggleState} />
      ) : (
        <div className="container">
          <div className="content">
            <ul>
              <button onClick={toggleState} className="item__add">
                Add task
              </button>
              <TodoList
                toggleState={toggleState}
                onClickEdit={onClickEdit}
                setEditNameIndex={setEditNameIndex}
              />
            </ul>
            <Button
              onClick={() => onClickDeleteAllTodo()}
              variant="outline-danger"
            >
              Delete all
            </Button>
          </div>
        </div>
      )}
      <Modal isActive={isActive} toggleChange={toggleState}>
        <Form toggleChange={toggleState} isEdit={isEdit} />
      </Modal>
      <Modal isActive={isEdit}>
        <EditForm
          onClickEdit={onClickEdit}
          taskName={editName}
          isEdit={isEdit}
          editNameIndex={editNameIndex}
        />
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

// const mapStateToProps = (state) => ({
//   todos: state.todos,
// });

// const mapDispatchToProps = (dispatch) => ({
//   deleteAllTodo: () => dispatch(action.deleteAllTodo()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);

// class App extends Component {
//   state = {
//     todos: [],
//     filter: "",
//     isActive: false,
//   };

//   filterChange = (e) => {
//     this.setState({
//       filter: e.currentTarget.value,
//     });
//   };

//   addToDo = (text) => {
//     const todo = {
//       id: nanoid(2),
//       title: text,
//       completed: false,
//     };

//     if (text === "") {
//       toast.error("Впишите задачу");
//       return;
//     }

//     this.setState((prevState) => ({
//       todos: [todo, ...prevState.todos],
//       isActive: !this.state.isActive,
//     }));
//   };

//   deleteToDo = (id) => {
//     this.setState((prevState) => ({
//       todos: prevState.todos.filter((e) => e.id !== id),
//     }));

//     console.log(id);
//   };

//   updateToDo = (id) => {
//     this.setState((prevState) => ({
//       todos: prevState.todos.map((todo) => {
//         if (todo.id === id) {
//           return {
//             ...todo,
//             completed: !todo.completed,
//           };
//         }
//         return todo;
//       }),
//     }));
//   };

//   clearAll() {
//     var result = window.confirm("Вы уверены?");

//     if (result) {
//       this.setState({
//         todos: [],
//       });
//     } else {
//       return;
//     }
//   }

//   toggleState = (e) => {
//     if (e.currentTarget === e.target) {
//       this.setState({
//         isActive: !this.state.isActive,
//       });
//     }
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.todos !== prevState.todos) {
//       localStorage.setItem("state", JSON.stringify(this.state.todos));
//     }
//   }

//   render() {
//     return (
//       <>
//         <Header
//           onClick={this.toggleState}
//           onChange={this.filterChange}
//           total={this.state.todos.length}
//         />
//         {this.state.todos.length === 0 ? (
//           <Welcome onClick={this.toggleState} />
//         ) : (
//           <div className="container">
//             <div className="content">
//               <ul>
//                 <button onClick={this.toggleState} className="addBtn">
//                   Добавить задачу
//                 </button>
//                 <TodoList
//                   todoState={this.state.todos}
//                   updateToDo={this.updateToDo}
//                   deleteToDo={this.deleteToDo}
//                   filterState={this.state.filter}
//                 />
//               </ul>
//               <button className="deleteBtn" onClick={() => this.clearAll()}>
//                 Удалить всё
//               </button>
//             </div>
//           </div>
//         )}
//         <Modal isActive={this.state.isActive} toggleChange={this.toggleState}>
//           <Form onSubmit={this.addToDo} toggleChange={this.toggleState} />
//         </Modal>
//         <ToastContainer
//           position="top-left"
//           autoClose={3000}
//           hideProgressBar
//           pauseOnHover={false}
//         />
//       </>
//     );
//   }
// }

// export default App;
