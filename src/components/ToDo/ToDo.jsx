import React from 'react';

const ToDo = ({ todo, handleCheckCompleted, handleDeleteToDo }) => {
  return (
    <li className="todo-item">
      <div className="todo-item-container">
        <input
          className="todo-item-checkbox"
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleCheckCompleted(todo.id)}
        />
        {todo.title}
      </div>

      <button
        disabled={!todo.completed}
        onClick={() => handleDeleteToDo(todo.id)} // This should match the prop name
        type="button"
        className="btn-close"
        aria-label="Close"
      ></button>
    </li>
  );
};

export default ToDo;
