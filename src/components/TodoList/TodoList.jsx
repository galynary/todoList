import React, { Component } from 'react';
import ToDo from '../ToDo/ToDo';
import FormToDo from 'components/FormToDo/FormToDo'; // Fixing import name
import todo from '../../todo.json';
import { nanoid } from 'nanoid';
import './todo.css';

class ToDoList extends Component {
  state = {
    todoList: todo,
    isDelete: false,
    isCreateTodo: false,
  };
  componentDidUpdate(_, prevState) {
    if (prevState.todoList.length > this.state.todoList.length) {
      this.setState({ isDelete: true });
      setTimeout(() => {
        this.setState({ isDelete: false });
      }, 1500);
    }
    if (prevState.todoList.length < this.state.todoList.length) {
      this.setState({ isCreateTodo: true });
      setTimeout(() => {
        this.setState({ isCreateTodo: false });
      }, 1500);
    }
  }

  handleCheckCompleted = id => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  handleDeleteToDo = id => {
    this.setState(prev => ({
      todoList: prev.todoList.filter(todo => todo.id !== id),
    }));
  };

  handleAddToDo = value => {
    this.setState(prev => ({
      todoList: [
        ...prev.todoList,
        { id: nanoid(), title: value, completed: false },
      ],
    }));
  };

  render() {
    return (
      <>
        <h1>My To-Do list</h1>
        {this.state.isDelete && (
          <div className="alert alert-danger" role="alert">
            To-do delete successfully!
          </div>
        )}
        {this.state.isCreateTodo && (
          <div class="alert alert-success" role="alert">
            Aded one more todo
          </div>
        )}
        <FormToDo addToDo={this.handleAddToDo} /> {/* Corrected name */}
        <ul className="list-todo">
          {this.state.todoList.map(todo => (
            <ToDo
              key={todo.id}
              todo={todo}
              handleCheckCompleted={this.handleCheckCompleted}
              handleDeleteToDo={this.handleDeleteToDo} // Ensuring the prop name matches
            />
          ))}
        </ul>
      </>
    );
  }
}

export default ToDoList;

// totoList:prevState.totoList.map(todo=> todo.id===id ? {...todo, completed :!todo.completed}:todo
//змінюємо стан чекбокса
// знайшли todo по якій клікнули,  знайшли відповідну  id і змінили  стан todo.completed на true
