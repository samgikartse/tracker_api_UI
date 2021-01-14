import React, { Component } from "react";

export class Appointment extends Component {
  render() {
    const { id, user, staff, service, datetime } = this.props.appList;

    return (
      <tr>
        <td>{id}</td>
        <td>{user.firstName + " " + user.lastName}</td>
        <td>{staff.firstName + " " + staff.lastName}</td>
        <td>{service.serviceName}</td>
        <td>{datetime}</td>
      </tr>
    );
  }
}

export default Appointment;
