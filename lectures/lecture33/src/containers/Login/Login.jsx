import React, { Component } from "react";

import LoginForm from "./components/LoginForm.jsx";

import "./styles/login.css";

class LoginPage extends Component {
  checkUserCredentials = ({ email, password }) => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        ["content-type"]: "application/json",
      },
    })
      .then((e) => e.json())
      .then(({ token }) => {
        localStorage.setItem("auth-token", token);
        this.props.onLogin(token);

        // DON'T DO THAT!!!
        // this.state.token = 'skslkdslkksladkldsa';
        // this.forceUpdate();
      });
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
