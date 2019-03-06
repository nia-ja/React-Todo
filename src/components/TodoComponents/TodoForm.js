import React from 'react';

export class TodoForm extends React.Component {
    state = {
        task: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.task);
        this.setState({task: ''})
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type='text' name="task" placeholder="Add todo" value={this.state.task} onChange={this.onChange} />

                <button type='submit' className="btn">Add Task</button>
            </form>
        )
    }
}

export default TodoForm;