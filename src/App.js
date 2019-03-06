import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import "./app.css";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    };
  }
  
  addTodo = (task) => {
    const newTask = {
      id: Date.now(),
      task: task,
      completed: false
    }
    this.setState({tasks: [...this.state.tasks, newTask]});
  }

  render() {
      return (
      <div className='container'>
        <h1>Todo App</h1>
        <TodoForm addTodo={this.addTodo} />
        <TodoList tasks={this.state.tasks} />
    </div>
    );
  }
}

export default App;
