import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import EditForm from "./components/Form/EditForm";
import Modal from "./components/Modal/Modal";

import Homepage from "./views/Homepage/Homepage";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";

import { fetchTodo } from "./redux/todos/todos-operation";

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editName, setIsEditName] = useState("");
  const [editNameIndex, setEditNameIndex] = useState(null);

  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

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
      <Header onClick={toggleState} />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                setIsEditName={setIsEditName}
                setEditNameIndex={setEditNameIndex}
                toggleState={toggleState}
                onClickEdit={onClickEdit}
                total={todos && todos.length}
              />
            }
          ></Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Register />} />
        </Routes>
      </div>
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
//       toast.error("?????????????? ????????????");
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
//     var result = window.confirm("???? ???????????????");

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
//                   ???????????????? ????????????
//                 </button>
//                 <TodoList
//                   todoState={this.state.todos}
//                   updateToDo={this.updateToDo}
//                   deleteToDo={this.deleteToDo}
//                   filterState={this.state.filter}
//                 />
//               </ul>
//               <button className="deleteBtn" onClick={() => this.clearAll()}>
//                 ?????????????? ??????
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
