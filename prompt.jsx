import React, { useState } from "react";

function TextBox({ addTodo }){
    const [text, setText] = useState('');

    const handleSubmit= (e)=> {
        e.preventDefault();
        if (text.trim() !== '') {
            addTodo(text);
            setText('');
        }
    }
    return(<form onSubmit={handleSubmit}>
        <input
        type= "text"
        placeholder="Enter a task..."
        value={text}
        onChange={(e)=>setText(e.target.value)}
        /> 
        <button type="submit">Add</button>
    </form>
    );
}
export default TextBox;