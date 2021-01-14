import React, { Component } from "react";

export class User extends Component {
  render() {
    const { id, firstName, lastName, email } = this.props.userData;

    return (
      <tr>
        <td>{id}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
      </tr>
    );
  }
}

export default User;
