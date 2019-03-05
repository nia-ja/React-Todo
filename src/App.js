import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const tasks = [
  {
    task: 'Brush teeth',
    id: '756897',
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: '',
      id: '',
      completed: false
    };
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='container'>
        <h1>Todo App</h1>
        <TodoList />
        <TodoForm />
    </div>
    );
  }
}

export default App;
