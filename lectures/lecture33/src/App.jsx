import React, { Component } from "react";

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
    return <div>{this.state.token ? <TodoList onLogout={this.onLogout}/> : <Login onLogin={this.onLogin}/>}</div>;
  }
}

export default App;
