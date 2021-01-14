import React, { Component } from "react";

export class Service extends Component {
  render() {
    const {
      id,
      serviceName,
      servicePrice,
      serviceDuration,
      serviceCategory,
      seriveDescription,
    } = this.props.serv;

    return (
      <div className="roundCheck" key={id}>
        <input type="checkbox" id={id} name={serviceName} value="Apple" />
        <label className="serviceName" htmlFor={id}>
          {serviceName}
        </label>
      </div>
    );
  }
}

export default Service;
