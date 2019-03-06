import React from 'react';
import "./Todo.css";

function Todo(props) {
    return (
        <div className="todo-item">
            <input type='checkbox' className="checkbox" />
            <p>{props.task.task}</p>
        </div>
    )
}

export default Todo;