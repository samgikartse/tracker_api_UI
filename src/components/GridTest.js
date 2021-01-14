import React, { Component } from "react";

export class GridTest extends Component {
  render() {
    return (
      <div className="roundCheck">
        <input type="checkbox" id="fruit1" name="fruit-1" value="Apple" />
        <label for="fruit1">Apple</label>
      </div>
    );
  }
}

export default GridTest;
