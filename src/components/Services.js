import React, { Component } from "react";
import Service from "./Service";

export class Services extends Component {
  render() {
    return (
      <div style={{ margin: "50px" }}>
        <p>Services</p>
        {this.props.servData.map((serv) => (
          <Service key={serv.id} serv={serv} />
        ))}
      </div>
    );
  }
}

export default Services;
