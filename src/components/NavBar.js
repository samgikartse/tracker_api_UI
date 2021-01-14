import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="logo">
          <h2>The Navbar</h2>
        </div>
        <ul className="nav-links">
          <Link to="/">
            <li>Dashboard</li>
          </Link>
          <Link to="/Services">
            <li>Services</li>
          </Link>
          <Link to="/AppointmentForm">
            <li>Book an appointment</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
