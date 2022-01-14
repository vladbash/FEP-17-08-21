import React, { Component } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import { Login, TodoList } from "./containers";

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: localStorage.getItem("auth-token"),
    };
  }

  onLogin = (token) => {
    this.setState({ token });
  };

  onLogout = () => {
    this.setState({ token: null });
  };

  render() {
    return (
      <div>
        <Link to="/login">Login</Link>
        <Link to="/">Home</Link>
        <Routes>
          <Route path="login" element={this.state.token ? <Navigate to="/" /> : <Login onLogin={this.onLogin} />} />
          <Route path="/" element={!this.state.token ? <Navigate to="/login" /> : <TodoList onLogout={this.onLogout} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
