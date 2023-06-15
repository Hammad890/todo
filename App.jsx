import React, { useState } from "react";
import "./index.css";
import TextBox from "./components/prompt"
import TodoList from "./components/ToDo";
function App(){
const [todos, setTodos] = useState([]);

const addTodo = (text) => {
    const newTodo = {
        id: Date.now(),
        text,
        completed : false
    };
   setTodos ([...todos, newTodo]);
};
const deleteTodo = (id)=> {
    const updatedTodos = todos.filter( todo => todo.id !== id )
    setTodos(updatedTodos);
};
const onEdit = (id,updatedText)=>{
    const updatedTodos = todos.map ((todo)=>
       todo.id === id  ? {...todo, text: updatedText} : todo
    );
        setTodos(updatedTodos);
    };
const toggleComplete = (id)=> {
    const updatedTodos = todos.map (todo =>{ 
        if (todo.id === id ){
            return {...todo, completed: !todo.completed};
        }
        return todo;
    });
    setTodos(updatedTodos);
};
  return (
    <div className="app">
        <h1>To Do List</h1>
        <TextBox addTodo={addTodo}/>
        <TodoList todos={todos}deleteTodo={deleteTodo} toggleComplete={toggleComplete} onEdit={onEdit}/>
    </div>
  );
}
export default App