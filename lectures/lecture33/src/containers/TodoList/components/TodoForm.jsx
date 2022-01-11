import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      itemValue: "",
    };
  }

  onItemAdd = () => {
    this.props.onItemAdd && this.props.onItemAdd(this.state.itemValue);
    this.setState({
      itemValue: "",
    });
  };

  onItemValueChange = (e) => {
    this.setState({
      itemValue: e.target.value,
    });
  };

  render() {
    return (
      <div className="todo-item-form">
        <div className="nes-field">
          <input
            type="text"
            className="nes-input"
            onChange={this.onItemValueChange}
            value={this.state.itemValue}
          />
        </div>
        <button
          type="button"
          className="nes-btn is-primary"
          onClick={this.onItemAdd}
        >
          Add
        </button>
      </div>
    );
  }
}

export default TodoForm;
