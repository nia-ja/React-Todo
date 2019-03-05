import React from 'react';

function ListItem(props) {
    return (
        <li></li>
    )
}

function TodoList(props) {
    return (
        <div className="todo-list">
            <ul>
                <ListItem />
            </ul>
        </div>
    )
}

export default TodoList;
