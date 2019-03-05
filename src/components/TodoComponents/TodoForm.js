import React from 'react';

function TodoForm(props) {
    return (
        <form>
            <input type='text' />
            <button type='submit'>Add Task</button>
            <button type='submit'>Remove Task</button>

        </form>
    )
}

export default TodoForm;