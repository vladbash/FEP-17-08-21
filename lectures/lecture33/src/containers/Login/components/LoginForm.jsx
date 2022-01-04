import React, { Component } from "react";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleLoginInputChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordInputChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit({
      email: this.state.email,
      password: this.state.password,
    });
  };

  render() {
    return (
      <form className="login-form" onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          placeholder="User email"
          value={this.state.email}
          onChange={this.handleLoginInputChange}
        />
        <input
          type="password"
          placeholder="User password"
          value={this.state.password}
          onChange={this.handlePasswordInputChange}
        />
        <input type="submit" value="Log in" />
      </form>
    );
  }
}

export default LoginForm;
