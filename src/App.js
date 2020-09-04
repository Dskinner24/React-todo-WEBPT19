import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import "./components/Styles.css";

const tasks = [
  {
    task: '2 hours of independent learning',
    id: Date.now(),
    completed: false
  },
  {
    task: '2 hours of working out',
    id: Date.now(),
    completed: false
  },
  {
    task: '2 hours meal prep',
    id: Date.now(),
    completed: false
  },
  {
    task: '3 hours of completing school assignments',
    id: Date.now(),
    completed: false
  } 
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }

  addTasks = taskName => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          task: taskName,
          id: Date.now(),
          completed: false
        }
      ]
    });
  };

  toggleCompleted = (taskId) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => {
        return !task.completed;
      })
    });
  }
  
  render() {
    return (
      <div className='App'>
        <div className='Header'>
          <h2>My Todo List</h2>
        </div>
        <TodoForm addTasks={this.addTasks} />
        <TodoList
          tasks={this.state.tasks}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
