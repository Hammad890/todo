import React from "react";
import ToDo from "./edit";
function TodoList({ todos, deleteTodo, toggleComplete, onEdit }){
    return(
        <ul>
            {todos.map(todo =>(
            <li key= {todo.id}>
                <span
                className={todo.completed ? 'completed' : ''}
                onClick={()=> toggleComplete(todo.id)}
                >
                    {todo.text}
                </span>

                <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
                <button onClick={()=> onEdit(ToDo)}>Edit</button>
            </li>
            ))}
        </ul>
    );
}

export default TodoList;