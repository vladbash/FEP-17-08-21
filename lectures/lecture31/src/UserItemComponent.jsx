import React, { Component } from 'react';

class UserItemComponent extends Component {
    render() {
        const {
            avatar,
            firstName,
            lastName,
            email,
            onEdit
        } = this.props;
        return (
            <div>
                <img src={avatar} alt="" />
                <span>{firstName} {lastName}</span>
                <b>{email}</b>
                <button onClick={() => onEdit({ avatar, email, firstName, lastName })}>Edit</button>
            </div>
        );
    }
}

export default UserItemComponent;