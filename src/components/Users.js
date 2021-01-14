import React, { Component } from "react";
import User from "./User";

export class Users extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
            {this.props.usersData.map((user) => (
              <User key={user.id} userData={user} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
