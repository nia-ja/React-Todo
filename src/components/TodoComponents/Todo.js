import React from 'react';

function Todo(props) {
    return (
        <div className="todo-container">
            <TodoList />
            <TodoForm />
        </div>
    )
}

export default Todo;