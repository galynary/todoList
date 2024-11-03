import { Component } from 'react';
import Header from './Header/Header';
//import Counter from './Counter/Counter';
import Modal from './Modal/Modal';
import ToDoList from './TodoList/TodoList';

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

  render() {
    return (
      <div className="container-todo">
        {/* Pass the showModal function to Header */}
        <Header showModal={this.showModal} />
        {/*<Counter />*/}
        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>
            <ToDoList />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
