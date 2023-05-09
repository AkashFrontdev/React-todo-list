import React, {useState} from "react";
import "./App.css";
import Header from "./components/header.jsx";
import Form from "./components/form";
import TodoList from "./components/todolist";



const App = () => {

  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null)
  const [checked, setChecked] = useState(false);
  // const [select, setSelect] = useState(-1)

  return (
    <div className="container">
      <div className="app-wrapper">
        <Header/>
      <div>
        <Form 
        input = {input}
        setInput = {setInput}
        todos = {todos}
        setTodos = {setTodos}
        editTodo={editTodo}
        setEditTodo = {setEditTodo}
        />
      </div>
      <div>
        <TodoList todos = {todos} setTodos = {setTodos} setEditTodo = {setEditTodo}/>
      </div>
      </div>
    </div>
  );
}

export default App;

