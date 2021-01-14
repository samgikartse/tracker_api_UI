import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import Users from "./components/Users";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import GridTest from "./components/GridTest";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentList from "./components/AppointmentList";

import "./App.css";

export class App extends Component {
  state = {
    usersData: [],
    servData: [],
    appList: [],
    bookApp: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/users")
      .then((response) => this.setState({ usersData: response.data }));

    axios
      .get("http://localhost:8080/appointments")
      .then((response) => this.setState({ appList: response.data }));

    axios
      .get("http://localhost:8080/services")
      .then((response) => this.setState({ servData: response.data }));
  }

  BookApp = (firstName, lastName, technician, service, appDate, appTime) => {
    axios
      .post("http://localhost:8080/appointments", {
        firstName: firstName,
        lastName: lastName,
        technician: technician,
        service: service,
        appDate: appDate,
        appTime: appTime,
      })
      .then((response) =>
        this.setState({ bookApp: [...this.state.bookApp, response.data] })
      );
  };

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route
            exact
            path="/"
            render={(props) => <Users usersData={this.state.usersData} />}
          />
          <Route
            exact
            path="/"
            render={(props) => <AppointmentList appList={this.state.appList} />}
          />
          <Route
            path="/AppointmentForm"
            render={(props) => <AppointmentForm BookApp={this.BookApp} />}
          />
          <Route
            path="/Services"
            render={(props) => <Services servData={this.state.servData} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
