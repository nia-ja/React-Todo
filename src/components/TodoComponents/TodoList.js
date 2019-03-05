import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    return (
        <ul className="todo-list">
            <Todo />
        </ul>
    )
}

export default TodoList;
