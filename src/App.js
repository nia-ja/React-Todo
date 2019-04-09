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
      completed: false,
    }
    this.setState({tasks: [...this.state.tasks, newTask]});
  }

  markComplete = (id) => {
    this.setState({ tasks: this.state.tasks.map(task => {
      if(task.id === id) {
        task.completed = !task.completed
      }
      return task;
    })})
  }

  clearCompleted = () => {
    this.setState({ tasks: this.state.tasks.filter(task => {
        return !task.completed;
      })
    })
  };

  render() {
      return (
      <div className='container'>
        <h1>Todo App</h1>
        <TodoForm tasks={this.state.tasks} addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
        <TodoList tasks={this.state.tasks} markComplete={this.markComplete} />
    </div>
    );
  }
}

export default App;
