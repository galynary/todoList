import React, { Component } from 'react';

class FormToDo extends Component {
  state = {
    todo: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addToDo(this.state.todo);
    this.setState({
      todo: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputTodo" className="form-label">
            {' '}
            {/* Change inputEmail to inputTodo */}
            Create todo
          </label>
          <input
            type="text"
            name="todo"
            className="form-control"
            id="inputTodo" // Make sure this matches the htmlFor in the label
            onChange={this.handleChange}
            value={this.state.todo}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add todo
        </button>
      </form>
    );
  }
}

export default FormToDo;
