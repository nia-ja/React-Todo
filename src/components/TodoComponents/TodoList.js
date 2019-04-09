import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {

    render() {
        console.log(this.props.tasks);
        return (
            <div className="todo-list">
                {this.props.tasks.map(task => (<Todo key={task.id} task={task} markComplete={this.props.markComplete} date={task.time} />
                ))}
            </div>
        )
    }
}

export default TodoList;
