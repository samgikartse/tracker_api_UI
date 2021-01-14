import React, { Component } from "react";

export class AppointmentForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    technician: "",
    service: "",
    appDate: "",
    appTime: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.BookApp(
      this.state.firstName,
      this.state.lastName,
      this.state.technician,
      this.state.service,
      this.state.appDate,
      this.state.appTime
    );
    this.setState({
      firstName: "",
      lastName: "",
      technician: "",
      service: "",
      appDate: "",
      appTime: "",
    });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form className="registration-form" onSubmit={this.onSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.onChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.onChange}
          />
        </label>
        <label>
          Technician:
          <input
            type="text"
            name="technician"
            value={this.state.technician}
            onChange={this.onChange}
          />
        </label>
        <label>
          Service:
          <input
            type="text"
            name="service"
            value={this.state.service}
            onChange={this.onChange}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="appDate"
            value={this.state.appDate}
            onChange={this.onChange}
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            name="appTime"
            value={this.state.appTime}
            step="15"
            onChange={this.onChange}
          />
        </label>

        <input type="submit" value="Submit" className="btn" />
      </form>
    );
  }
}

export default AppointmentForm;
