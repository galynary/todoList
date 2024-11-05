import { Component } from 'react';

class Button extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // Перевірка лише властивості 'name' з об'єкта obj
    if (
      nextProps.handleClick === this.props.handleClick &&
      nextProps.obj.name === this.props.obj.name
    )
      return false;
    return true;
  }

  render() {
    return (
      <button className="button btn-outline" onClick={this.props.handleClick}>
        {this.props.children} {/* Виводимо контент кнопки */}
      </button>
    );
  }
}

class Counter extends Component {
  state = {
    value: 0,
  };

  handleClick = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };

  handleClickDescrement = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  render() {
    const { value } = this.state;
    return (
      <div className="card-container" style={{ width: '600px' }}>
        <div className="card-body">
          <h5 className="card-title">Counter</h5>
          <p className="card-text">{value}</p>
          <div className="card-button">
            <Button
              obj={{ name: 'asd' }}
              handleClick={this.handleClick}
              className="button button-plus"
            >
              +
            </Button>
            <button
              className="button button-minus"
              onClick={this.handleClickDescrement}
            >
              -
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;

//     this.setState(prevState => ({ value: prevState.value + 1 }));
//    стан => змінюємо стан(текучий стан змінюємо на новий)
