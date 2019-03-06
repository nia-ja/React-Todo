import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    return (
        <div className="todo-list">
            {props.tasks.map(task => (<Todo key={task.id} task={task} />))}
        </div>
    )
}

export default TodoList;
