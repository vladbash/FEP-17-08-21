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
        <div className="nes-field">
          <label for="email_field">Your email</label>
          <input
            type="text"
            className="nes-input"
            id="email_field"
            placeholder="User email"
            value={this.state.email}
            onChange={this.handleLoginInputChange}
          />
        </div>

        <div className="nes-field">
          <label for="password_field">Your password</label>
          <input
            type="password"
            className="nes-input"
            id="password_field"
            placeholder="User password"
            value={this.state.password}
            onChange={this.handlePasswordInputChange}
          />
        </div>

        <input type="submit" className="nes-btn is-primary" value="Log in" />
      </form>
    );
  }
}

export default LoginForm;
