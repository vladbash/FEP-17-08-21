import React, { Component } from "react";

import LoginForm from "./components/LoginForm.jsx";

import "./styles/login.css";

class LoginPage extends Component {
  checkUserCredentials = ({ email, password }) => {
    console.log(`checking email: ${email} and password: ${password}`);
  };

  render() {
    return (
      <div className="login-container">
        <LoginForm onFormSubmit={this.checkUserCredentials} />
      </div>
    );
  }
}

export default LoginPage;
