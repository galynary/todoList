import { Component } from 'react';
import Header from './Header/Header';
//import Counter from './Counter/Counter';
import FormLogin from './FormLogin/FormLogin';
import Modal from './Modal/Modal';
import ToDoList from './TodoList/TodoList';
import { nanoid } from 'nanoid';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

class App extends Component {
  state = {
    isShowModal: false,
  };

  showModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };
  createUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    console.log(newUser);
  };

  render() {
    return (
      <div className="container-todo">
        {/* Pass the showModal function to Header */}
        <Header showModal={this.showModal} />
        {/*<Counter />*/}

        <ToDoList />
        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>
            <FormLogin createUser={this.createUser} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
