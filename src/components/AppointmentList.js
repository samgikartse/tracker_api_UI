import React, { Component } from "react";
import Appointment from "./Appointment";

export class AppointmentList extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Id</th>
              <th>user name</th>
              <th>Tech name</th>
              <th>service</th>
              <th>Date and Time</th>
            </tr>
            {this.props.appList.map((app) => (
              <Appointment key={app.id} appList={app} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AppointmentList;
