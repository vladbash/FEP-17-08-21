import React, { Component } from "react";

import UserItemComponent from "./UserItemComponent.jsx";

class ClassDemoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      expandedList: true,
    };
  }

  componentDidMount() {
      console.log('[]');
    fetch("https://reqres.in/api/users")
      .then((e) => e.json())
      .then(({ data }) => {
          console.log(data);
        this.setState({
          ...this.state,
          users: data,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {}

//   shouldComponentUpdate(nextProps, nextState) {
//     // return true/false;
//   }

  componentWillUnmount() {
    //
  }

  onEdit(user) {
      console.log('on item edit', user);
  }

  render() {
    return (
      <div className="container">
        <div>
          {this.state.users.map(
            ({ id, email, avatar, first_name, last_name }) => (
              <UserItemComponent
                key={id}
                email={email}
                avatar={avatar}
                firstName={first_name}
                lastName={last_name}
                onEdit={this.onEdit}
              />
            )
          )}
        </div>
      </div>
    );
  }
}

export default ClassDemoComponent;
