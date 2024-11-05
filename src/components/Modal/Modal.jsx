import { Component } from 'react';
import './modal.css';

class Modal extends Component {
  state = {};
  //вішаємо слухача
  componentDidMount() {
    window.addEventListener('keydown', this.handlePressEsc);
  }
  //знімаємо слухача
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressEsc);
  }
  handlePressEsc = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };
  render() {
    const { children, closeModal } = this.props;
    return (
      <div
        className="modal"
        style={{ display: 'block', backdropFilter: 'blur(5px)' }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1>My To-Do List</h1>
              <button
                onClick={closeModal}
                type="button"
                className="modal-close"
              >
                X
              </button>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

//компонент Modal з розміткою
// closeModal - пропс
