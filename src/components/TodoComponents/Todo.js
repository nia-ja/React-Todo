import React from 'react';
import "./Todo.css";
import moment from 'moment';

export class Todo extends React.Component {
    getStyle = () => {
        return {
            textDecoration: this.props.task.completed ? 'line-through' : 'none',
            color: this.props.task.completed ? '#D1AC69' : 'white',
            background: this.props.task.completed ? 'transparent' : '#41827B',
            boxShadow: this.props.task.completed ? 'none' : '0 10px 6px -6px rgba(209, 172, 105, .8)',
        }
    }
    
    render() {
        const { id, task} = this.props.task;
        const currentTime = moment(id).startOf('minute').fromNow();

        return (
            <div style={this.getStyle()} className="todo-item">
                <input type='checkbox' onChange={this.props.markComplete.bind(this, id)} />
                <p>{task}</p>
                <p className="todo-item-date">Added: {currentTime}</p>
            </div>
        )
    }
}

export default Todo;